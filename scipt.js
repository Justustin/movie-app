const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04df3e0fa443bb3743719a3c5826b59f&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=04df3e0fa443bb3743719a3c5826b59f&query="'

const webname = document.getElementById('name')
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

getMovie(API_URL);
async function getMovie(url){
  const res = await fetch(url)
  const data = await res.json()
  showMovies(data.results)

}
function showMovies(movies){
  main.innerHTML = ''
   movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie

    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')

    movieEl.innerHTML = `
      <img src="${IMG_PATH + poster_path}" alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getColorRating(vote_average)}">${Math.round(vote_average*10)/10}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
      `
    main.appendChild(movieEl)
   })
}
function getColorRating(vote){
  if(vote >= 8){
    return 'green'
  }else if(vote >= 5){
    return 'yellow'
  }else{
    return 'red'
  }
}
form.addEventListener('submit',(e)=>{
  e.preventDefault()

  const searchTerm = search.value
  if(searchTerm && searchTerm !== ''){
    getMovie(SEARCH_API + searchTerm)

    search.value = ''
  }else{
    window.location.reload()
  }
})
webname.addEventListener('click',() => {
 window.location.reload()
})