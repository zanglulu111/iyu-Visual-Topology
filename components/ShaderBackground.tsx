import React, { useRef, useEffect } from 'react';

const vertexShaderSource = `
  attribute vec2 position;
  varying vec2 v_uv;
  void main() {
    v_uv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision mediump float;

  uniform float u_time;
  uniform vec2 u_mouse;
  uniform vec2 u_resolution;
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
      vec2 p = (uv - 0.5) * aspect;
      
      // Removed mouse warp distortion as requested
      // We keep a very subtle mouse brightness influence for 'presence'
      vec2 mousePos = (u_mouse - 0.5) * aspect;
      float dist = distance(p, mousePos);
      
      // Base noise for cloud texture (blue-grey tinted)
      float n1 = fbm(p * 2.5 + u_time * 0.12);
      vec2 p_with_drift = p + vec2(n1 * 0.05);
      
      float finalNoise = fbm(p_with_drift * 1.8 - u_time * 0.08);
      float cloud = smoothstep(0.15, 0.85, finalNoise);
      
      // Very subtle mouse glow without warping the texture
      float mouseGlow = smoothstep(0.4, 0.0, dist) * 0.08;
      
      // Premium blue-grey mist color palette
      vec3 colorMist = vec3(0.38, 0.4, 0.44); // Desaturated blue-grey
      vec3 colorHigh = vec3(0.6, 0.65, 0.7);  // Bright bluish highlight
      
      vec3 finalColor = mix(vec3(0.012), colorMist, cloud);
      finalColor += colorHigh * smoothstep(0.75, 0.98, finalNoise) * 0.4;
      finalColor += mouseGlow * colorMist; // Presence without warp
      
      float alpha = clamp(cloud * 0.7 + mouseGlow, 0.0, 0.8);
      
      gl_FragColor = vec4(finalColor, alpha);
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

export const ShaderBackground: React.FC<{ theme?: string }> = ({ theme = 'dark' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isRetro = theme === 'retro';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl');
    if (!gl) return;

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, `
      precision mediump float;
      uniform float u_time;
      uniform vec2 u_mouse;
      uniform vec2 u_resolution;
      uniform float u_isRetro;
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
          vec2 p = (uv - 0.5) * aspect;
          
          vec2 mousePos = (u_mouse - 0.5) * aspect;
          float dist = distance(p, mousePos);
          
          float n1 = fbm(p * 2.5 + u_time * 0.12);
          vec2 p_with_drift = p + vec2(n1 * 0.05);
          
          float finalNoise = fbm(p_with_drift * 1.8 - u_time * 0.08);
          float cloud = smoothstep(0.15, 0.85, finalNoise);
          
          float mouseGlow = smoothstep(0.4, 0.0, dist) * 0.08;
          
          vec3 colorMist;
          vec3 colorHigh;
          float alpha;

          if (u_isRetro > 0.5) {
              // Retro: Greyscale/Black clouds (Like ink fog)
              colorMist = vec3(0.08, 0.08, 0.08); 
              colorHigh = vec3(0.15, 0.15, 0.15);  
              vec3 finalColor = mix(vec3(0.0), colorMist, cloud);
              finalColor += colorHigh * smoothstep(0.75, 0.98, finalNoise) * 0.2;
              finalColor += mouseGlow * colorMist;
              alpha = clamp(cloud * 0.4 + mouseGlow * 0.2, 0.0, 0.5);
              gl_FragColor = vec4(finalColor, alpha);
          } else {
              // Dark theme: Original Blue-Grey Mist
              colorMist = vec3(0.38, 0.4, 0.44); 
              colorHigh = vec3(0.6, 0.65, 0.7);  
              vec3 finalColor = mix(vec3(0.012), colorMist, cloud);
              finalColor += colorHigh * smoothstep(0.75, 0.98, finalNoise) * 0.4;
              finalColor += mouseGlow * colorMist;
              alpha = clamp(cloud * 0.7 + mouseGlow, 0.0, 0.8);
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

    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = 1.0 - (e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    let startTime = performance.now();

    const render = (time: number) => {
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      }

      gl.useProgram(program);
      gl.enableVertexAttribArray(positionAttributeLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

      gl.uniform1f(timeLocation, (time - startTime) * 0.001);
      gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height);
      gl.uniform2f(mouseLocation, mouseX, mouseY);
      gl.uniform1f(isRetroLocation, isRetro ? 1.0 : 0.0);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isRetro]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
    />
  );
};
