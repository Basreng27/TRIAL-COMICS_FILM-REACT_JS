import axios from "axios";

const baseUrl = 'https://api.themoviedb.org/3'
const apiBarerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGQzZGZhNzk5Y2YwODJhZjE5NjE2ZjZjYTZkMGY0MiIsInN1YiI6IjY0YzQ2ZmQwY2FkYjZiMDE0NDBjZWY3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cVzCguFaqRjBXudoHNlB5AD6xH9BT5JvkETxfe6CjfY'
const headers = { Authorization: `Bearer ${apiBarerToken}` };

export const getMovie = async()=>{
    const movie = await axios.get(`${baseUrl}/movie/popular`,{ headers })
    
    return movie.data.results
}

export const searchMovie = async(query)=>{
    const search = await axios.get(`${baseUrl}/search/movie?query=${query}`,{ headers })

    return search.data
}