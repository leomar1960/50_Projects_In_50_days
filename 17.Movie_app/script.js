// const API_Token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmRjY2NiMzFhODhmNDU3MDQ5YzRlZjJlZGM3OTRhNyIsInN1YiI6IjYwMmM0N2QxZGI0ZWQ2MDAzZTZhZjg1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AkAGcnsTVfMUHATvi47-tC22EwhpyVbUOTaN6YcKpjI';
// const API_Key = '62dcccb31a88f457049c4ef2edc794a7';
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=62dcccb31a88f457049c4ef2edc794a7';
const IMG_Path = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=62dcccb31a88f457049c4ef2edc794a7&query=" ';


//Get Initital Movies
getMovies(API_URL)
async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    showMovies(data.results);
}

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

function showMovies(movies) {
    main.innerHTML = ''
    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
        <img src="${IMG_Path + poster_path}"
        alt="${title}">
    <div class="movie-info">
        <h3 class="title">${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>

    <div class="overview">
        <h3>Overview</h3>
        ${overview}
    </div>
        `
        main.appendChild(movieEl)
    });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm);

        search.value = '';
    } else {
        window.location.reload();
    }
})
