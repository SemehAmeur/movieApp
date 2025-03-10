//Declaring urls
const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b9c91cad7cf17ef7099ee2bbcaaffde6&page=1';
const imgPath = 'https://image.tmdb.org/t/p/w1280';
const searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=b9c91cad7cf17ef7099ee2bbcaaffde6&query="';

//get elements
const formEl = document.getElementById('form');
const searchEl = document.getElementById('search');
//get movies
getMovies(apiUrl)

//getMovies function
async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data)
}

formEl.addEventListener('submit', e =>{
    e.preventDefault();
    const searchMovie = searchEl.value;
    if(searchMovie && searchMovie !== '') {
        getMovies(searchUrl + searchMovie);
        searchEl.value = '';
    } else{
        window.location.reload()
    }
})