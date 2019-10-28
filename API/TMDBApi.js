import API_TOKEN from '../Helpers/token'

export function getFilmsFromApiWithSearchedText(text){
    const url='https://api.themoviedb.org/3/search/movie?api_key=2b9e0bd3e9dead0c4834e56a3e4f24ae&language=en&query='+text
    return fetch(url)
        .then((response)=> response.json())
        .catch((error)=>console.log(error))
}

export function getImageFromApi(name){
    return 'https://image.tmdb.org/t/p/w300' + name
}