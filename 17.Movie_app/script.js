const API_Token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmRjY2NiMzFhODhmNDU3MDQ5YzRlZjJlZGM3OTRhNyIsInN1YiI6IjYwMmM0N2QxZGI0ZWQ2MDAzZTZhZjg1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AkAGcnsTVfMUHATvi47-tC22EwhpyVbUOTaN6YcKpjI';
const API_Key = '62dcccb31a88f457049c4ef2edc794a7';
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=62dcccb31a88f457049c4ef2edc794a7';
const IMG_Path = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL = 'https://api.themoviedb.org/3/search?api_key=62dcccb31a88f457049c4ef2edc794a7&query=" ';



//Get Initital Movies
getMovies(API_URL)
async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results)
}
