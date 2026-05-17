import React, { useRef, useEffect } from 'react';

const vertexShaderSource = `
  attribute vec2 position;
  varying vec2 v_uv;
  void main() {
    v_uv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

interface ShaderBackgroundProps {
  theme?: string;
  enabled?: boolean;
  maxFps?: number;
}

export const ShaderBackground: React.FC<ShaderBackgroundProps> = ({
  theme = 'dark',
  enabled = true,
  maxFps = 24,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isRetro = theme === 'retro';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !enabled) return;
    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: true });
    if (!gl) return;

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, `
      precision mediump float;
      uniform float u_time;
      uniform vec2 u_mouse;
      uniform vec2 u_resolution;
      uniform float u_isRetro;
      uniform float u_hasMouse;
      varying vec2 v_uv;

      float rand(vec2 n) {
          return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
      }

      float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(mix(rand(i), rand(i + vec2(1.0, 0.0)), f.x),
                     mix(rand(i + vec2(0.0, 1.0)), rand(i + vec2(1.0, 1.0)), f.x), f.y);
      }

      float fbm(vec2 p) {
          float sum = 0.0;
          float amp = 0.5;
          float freq = 1.0;
          for(int i = 0; i < 6; i++) {
              sum += noise(p * freq) * amp;
              freq *= 2.0;
              amp *= 0.5;
          }
          return sum;
      }

      void main() {
          vec2 uv = v_uv;
          vec2 aspect = vec2(u_resolution.x/u_resolution.y, 1.0);
          vec2 sceneUv = (uv - 0.5) * aspect + 0.5;
          vec2 mouseUv = (u_mouse - 0.5) * aspect + 0.5;
          float mouseLane = smoothstep(0.2, 0.0, abs(sceneUv.y - mouseUv.y))
              * smoothstep(0.95, 0.0, abs(sceneUv.x - mouseUv.x))
              * u_hasMouse;
          
          vec2 p = sceneUv * 2.75 + vec2(u_time * 0.052, -u_time * 0.012);
          p += vec2(
              mouseLane * 0.12,
              mouseLane * sin((sceneUv.x - mouseUv.x) * 13.0 + u_time * 0.75) * 0.065
          );
          p += vec2(fbm(sceneUv * 0.72 + vec2(u_time * 0.014, -u_time * 0.006)) * 0.08, 0.0);
          
          float noise1 = fbm(p + vec2(u_time * 0.055, -u_time * 0.034));
          float noise2 = fbm(p * 1.18 + vec2(-u_time * 0.045, u_time * 0.03) + noise1 * 0.54);
          float roll = fbm(p * 0.52 + vec2(-u_time * 0.032, u_time * 0.052));
          float river = 0.49
              + (fbm(vec2(sceneUv.x * 1.7 + u_time * 0.032, u_time * 0.018)) - 0.5) * 0.34
              + sin(sceneUv.x * 4.8 + u_time * 0.16) * 0.055;
          float band = smoothstep(0.32, 0.03, abs(sceneUv.y - river));
          float plume = fbm(sceneUv * 1.08 + vec2(-u_time * 0.022, u_time * 0.009));
          float plumePocket = smoothstep(0.42, 0.84, plume);
          float plumeMask = band * mix(0.22, 1.0, plumePocket);
          float pattern = noise2 * 0.5 + noise1 * 0.28 + roll * 0.22;
          pattern += smoothstep(0.25, 0.78, noise1) * 0.08;
          
          float dither = rand(sceneUv + u_time * 0.004) * 0.014;
          pattern += dither;
          pattern = clamp(pattern, 0.0, 1.0);
          
          vec3 colorMist;
          vec3 colorHigh;
          float alpha;

          if (u_isRetro > 0.5) {
              colorMist = vec3(0.22, 0.22, 0.22);
              colorHigh = vec3(0.78, 0.78, 0.76);
              float smoke = smoothstep(0.48, 0.68, pattern) * plumeMask;
              float core = smoothstep(0.7, 0.9, pattern) * plumeMask;
              float highlight = smoothstep(0.42, 0.88, noise1 + core * 0.2) * smoke;
              vec3 finalColor = mix(colorMist, colorHigh, highlight * 0.52 + core * 0.36);
              alpha = clamp(smoke * 0.56 + core * 0.28, 0.0, 0.86);
              gl_FragColor = vec4(finalColor, alpha);
          } else {
              colorMist = vec3(0.62, 0.64, 0.68);
              colorHigh = vec3(0.98, 0.99, 1.0);
              float smoke = smoothstep(0.47, 0.67, pattern) * plumeMask;
              float core = smoothstep(0.69, 0.89, pattern) * plumeMask;
              float highlight = smoothstep(0.4, 0.86, noise1 + core * 0.22) * smoke;
              vec3 finalColor = mix(colorMist, colorHigh, highlight * 0.56 + core * 0.38);
              alpha = clamp(smoke * 0.64 + core * 0.32, 0.0, 0.92);
              gl_FragColor = vec4(finalColor, alpha);
          }
      }
    `);

    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionAttributeLocation = gl.getAttribLocation(program, 'position');
    const timeLocation = gl.getUniformLocation(program, 'u_time');
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const mouseLocation = gl.getUniformLocation(program, 'u_mouse');
    const isRetroLocation = gl.getUniformLocation(program, 'u_isRetro');
    const hasMouseLocation = gl.getUniformLocation(program, 'u_hasMouse');

    let mouseX = 0.5;
    let mouseY = 0.5;
    let hasMouse = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = 1.0 - (e.clientY / window.innerHeight);
      hasMouse = 1;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animationFrameId: number;
    let startTime = performance.now();
    let lastFrameTime = 0;
    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    const frameInterval = reducedMotion ? 1000 : 1000 / Math.max(1, maxFps);

    const render = (time: number) => {
      if (document.hidden || time - lastFrameTime < frameInterval) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      lastFrameTime = time;
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      }

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      gl.enableVertexAttribArray(positionAttributeLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

      gl.uniform1f(timeLocation, (time - startTime) * 0.001);
      gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height);
      gl.uniform2f(mouseLocation, mouseX, mouseY);
      gl.uniform1f(isRetroLocation, isRetro ? 1.0 : 0.0);
      gl.uniform1f(hasMouseLocation, hasMouse);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      gl.deleteBuffer(positionBuffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, [enabled, isRetro, maxFps]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
    />
  );
};
