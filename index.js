function requestApi(searchTerm) {
    console.log('Chamando requestApi');
    const url = `https://gabrielkkskx.github.io/artists/artists.json?name_like=${searchTerm}`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
        .catch((error) => console.error('Erro na requisição:', error));
}

function displayResults(result) {
    console.log('Chamando displayResults');
    // Restante do código...
}
