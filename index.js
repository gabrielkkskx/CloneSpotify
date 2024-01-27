const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `https://gabrielkkskx.github.io/artists/artists.json?name_like=${searchTerm}`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result));
}

function displayResults(result) {
    // Limpar resultados anteriores
    resultArtist.innerHTML = '';

    result.forEach(element => {
        // Criar elementos para cada resultado
        const artistItem = document.createElement('li');
        const artistName = document.createElement('span');
        const artistImage = document.createElement('img');

        // Adicionar classes e atributos
        artistItem.classList.add('artist-item');
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;

        // Adicionar elementos ao item do artista
        artistItem.appendChild(artistName);
        artistItem.appendChild(artistImage);

        // Adicionar item do artista à lista
        resultArtist.appendChild(artistItem);
    });

    resultPlaylist.classList.add('hidden');
    resultArtist.classList.remove('hidden');
}

// Adicionar evento input
document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return;
    }

    // Chamar a API com o novo termo de pesquisa
    requestApi(searchTerm);
});
