const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w500/";
//got this from the official themoviedb.org documentation


async function getMovies() {
    const resp = await fetch(APIURL);
    const respData = await resp.json();

    console.log(respData);

    respData.results.forEach(movie =>{
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <img src="${IMGPATH + movie.poster_path}" alt="${movie.title}" srcset="">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <span>${movie.vote_average}</span>
            </div>
`;
//         const img = document.createElement("img");
// //adding the poster path with the common source
//         img.src = IMGPATH + movie.poster_path;

//         document.body.appendChild(img);

        document.body.appendChild(movieEl);
    });





    return respData;
}
//xtra: console.log(getMovies()); //returns a pending promise

getMovies();