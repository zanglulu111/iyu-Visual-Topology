const fs = require('fs');

const p1_str = "M 440 494 L 421 469 L 370 451 L 300 444 L 230 451 L 179 469 L 160 494 M 440 194 L 421 169 L 370 151 L 300 144 L 230 151 L 179 169 L 160 194";
const p2_str = "M 440 194 L 421 144 L 370 107 L 300 94 L 230 107 L 179 144 L 160 194 M 440 760 L 440 194 M 160 194 L 160 760 M 20 550 L 160 494";
const p3_str = "M 440 494 L 580 550 M 20 250 L 160 194 M 440 194 L 580 250 M 440 494 L 160 494 M 440 194 L 160 194 M 160 344 L 440 344 M 160 622 L 440 622";

function processGeom(g) {
    const tokens = g.split(' ');
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === 'M' || tokens[i] === 'L') {
            const x = parseFloat(tokens[i+1]);
            const y = parseFloat(tokens[i+2]);
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
            i += 2;
        }
    }
    
    // Safety padding
    minX = Math.floor(minX) - 2;
    minY = Math.floor(minY) - 2;
    maxX = Math.ceil(maxX) + 2;
    maxY = Math.ceil(maxY) + 2;
    
    const out = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === 'M' || tokens[i] === 'L') {
            out.push(tokens[i]);
            out.push(parseFloat(tokens[i+1]) - minX);
            out.push(parseFloat(tokens[i+2]) - minY);
            i += 2;
        }
    }
    
    return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY,
        geometry: out.join(' ')
    };
}

console.log(processGeom(p1_str));
console.log(processGeom(p2_str));
console.log(processGeom(p3_str));

