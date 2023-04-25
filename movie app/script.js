const APIURL = "http://";
const IMGPATH = "https://";

async function getMovies(){
    const resp = await fetch(APIURL); //resp fetches data from the API URL
    
    const respData = await resp.json(); //all data from json of API is stored in respData variable

    respData.results.forEach(m => {
        const img = document.createElement("img");
        img.src = IMGPATH + m.poster_path;

        document.body.appendChild(img);
    });

    return respData;
}

getMovies();
