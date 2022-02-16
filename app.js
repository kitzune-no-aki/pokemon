//'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' .png

for(let i=1; i <= 151; i++){
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon')
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newI = document.createElement('Img');
    newI.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${[i]}.png`
    pokemon.appendChild(newI);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}