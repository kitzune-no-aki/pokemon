//'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' .png

for(let i=1; i <= 151; i++){
const newI = document.createElement('Img');
newI.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${[i]}.png`
const images = document.querySelector('#container');
images.appendChild(newI);
}