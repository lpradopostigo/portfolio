const ctx = document.getElementById('canvas').getContext('2d');



const numberOfSides = 5,
  radio = 20,
  x = 25,
  y = 25;

const angleStep = 2 * Math.PI / numberOfSides;

ctx.beginPath();
ctx.moveTo(x + radio * Math.cos(angleStep - Math.PI / 2), y + radio * Math.sin(angleStep - Math.PI / 2));

for (let i = 0; i <= numberOfSides; i += 1) {
  ctx.lineTo(x + radio * Math.cos(i * angleStep - Math.PI / 2), y + radio * Math.sin(i * angleStep - Math.PI / 2));
}

ctx.strokeStyle = "#fff";
ctx.lineWidth = 2;
ctx.stroke();