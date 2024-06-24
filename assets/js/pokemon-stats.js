const ol = document.querySelector('ol');
const pokemonDiv = document.getElementById("detailHidden");

ol.addEventListener('click', function (event) {
    const liElement = event.target.closest('li');

    if (liElement) {
        const pokemonStats = liElement.getAttribute('data-stats').split(',');
        const pokemonNumber = liElement.getAttribute('data-number');
        const pokemonName = liElement.getAttribute('data-name');
        const pokemonPhoto = liElement.getAttribute('data-photo');
        const pokemonType = liElement.getAttribute('data-type');

        const pokemonData = {
            stats: pokemonStats,
            number: pokemonNumber,
            name: pokemonName,
            type: pokemonType,
            photo: pokemonPhoto
        };

        htmlAppear(pokemonData);
    }
});

function pokemonDetailHtml(detailsPokemon) {
    return `
    <div class="allDetails ${detailsPokemon.type}">
        <div class="headerDetails">
            <button class="close-btn" onclick="hideDetails()">x</button>
            <span class="nameDetail">${detailsPokemon.name}</span>
            <span class="numberDetail">#${detailsPokemon.number}</span>
        </div>

        <img src="${detailsPokemon.photo}" alt="${detailsPokemon.name}">
        <div class="statsDetails">
            Vida: <span class="detailsValues">${detailsPokemon.stats[0]}</span><br>
            Ataque: <span class="detailsValues">${detailsPokemon.stats[1]}</span><br>
            Defesa: <span class="detailsValues">${detailsPokemon.stats[2]}</span><br>
            Ataque Especial: <span class="detailsValues">${detailsPokemon.stats[3]}</span><br>
            Defesa Especial: <span class="detailsValues">${detailsPokemon.stats[4]}</span><br>
            Velocidade: <span class="detailsValues">${detailsPokemon.stats[5]}</span>
        </div>
    </div>
    `;
}

function htmlAppear(pokeResult) {
    pokemonDiv.innerHTML = pokemonDetailHtml(pokeResult);
    pokemonDiv.classList.remove('hidden');
}

function hideDetails() {
    pokemonDiv.classList.add('hidden');
    pokemonDiv.innerHTML = '';
}
