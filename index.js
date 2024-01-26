const searchInput = document.getElementById('search-input');
const  resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:300/artists?name_like=${searchTerm}`
    fetch (url)
        .then((Response) => Response.json())
        .then((result) => displayResults(result))
}



document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLoweCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return;
    }
})