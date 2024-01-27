const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `https://gabrielkkskx.github.io/artists/artists.json?name=${searchTerm}`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
        .catch((error) => console.error('Erro na requisição:', error));
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

    // Esconder a playlist (se necessário)
    resultPlaylist.classList.add('hidden');
    // Exibir os resultados dos artistas
    resultArtist.classList.remove('hidden');
}

// Adicionar evento input
searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        // Se a pesquisa estiver vazia, esconda a playlist e exiba os resultados dos artistas
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return;
    }

    // Se houver um termo de pesquisa, chame a API
    requestApi(searchTerm);
});
