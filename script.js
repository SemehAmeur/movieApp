//Declaring urls
const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b9c91cad7cf17ef7099ee2bbcaaffde6&page=1';
const imgPath = 'https://image.tmdb.org/t/p/w1280';
const searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=b9c91cad7cf17ef7099ee2bbcaaffde6&query="';

//get elements
const formEl = document.getElementById('form');
const searchEl = document.getElementById('search');
const mainEl = document.getElementById('main');

//get movies
getMovies(apiUrl)

//showMovies function
const showMovies = (movies) =>{
    mainEl.innerHTML = '';
    movies.forEach(element => {
        const { title, poster_path, vote_average, overview} = element;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <img
          src="${imgPath + poster_path + '"'}"
          alt=""
        />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>overview</h3>
          ${overview}
        </div>
        `;
        mainEl.appendChild(movieEl);
    });
}

//getClassByRate function to get the color based on the rating
const getClassByRate = (vote) => {
    if(vote >= 8) return 'green';
    else if(vote >= 5) return 'orange';
    else return 'red';
}

//getMovies function
async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    showMovies(data.results)
}

//search functionality
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