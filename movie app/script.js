const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w500/";
//got this from the official themoviedb.org documentation
const SEARCHAPI =
"https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";



const main = document.querySelector('#main');
const form = document.querySelector('#form');
const search = document.querySelector('.search');

//initially get movies
getMovies(APIURL);


async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

    showMovies(respData.results);


    // return respData;
}
//xtra: console.log(getMovies()); //returns a pending promise

function showMovies(movies) {
    //clear main
    main.innerHTML ='';

    movies.forEach(movie =>{
        // destructuring the array
        const {poster_path, title, vote_average, overview} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
        <img src="${IMGPATH + poster_path}" alt="${title}" srcset="">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class = "overview">
        <h4>Overview:</h4>${overview}</div>
`;
//         const img = document.createElement("img");
// //adding the poster path with the common source
//         img.src = IMGPATH + movie.poster_path;

//         document.body.appendChild(img);

        main.appendChild(movieEl);
    });
}



function getClassByRate(vote) {
    if (vote>=8) {
        return 'green';
    } else if (vote >=5){
        return 'orange';
    } else{
        return 'red';
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    if (searchTerm) {
        getMovies(SEARCHAPI + searchTerm);
        search.value = '';
    }

});