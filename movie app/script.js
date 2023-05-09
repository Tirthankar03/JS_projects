const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w500/";
//got this from the official themoviedb.org documentation

const main = document.querySelector('main');

async function getMovies() {
    const resp = await fetch(APIURL);
    const respData = await resp.json();

    console.log(respData);

    respData.results.forEach(movie =>{
        // destructuring the array
        const {poster_path, title, vote_average} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
        <img src="${IMGPATH + poster_path}" alt="${title}" srcset="">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
`;
//         const img = document.createElement("img");
// //adding the poster path with the common source
//         img.src = IMGPATH + movie.poster_path;

//         document.body.appendChild(img);

        main.appendChild(movieEl);
    });


    return respData;
}
//xtra: console.log(getMovies()); //returns a pending promise

function getClassByRate(vote) {
    if (vote>=8) {
        return 'green';
    } else if (vote >=5){
        return 'orange';
    } else{
        return 'red';
    }
};

getMovies();