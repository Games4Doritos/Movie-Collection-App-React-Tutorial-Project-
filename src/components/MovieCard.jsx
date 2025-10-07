import '../css/movieCard.css'
import {useMovieContext} from '../contexts/MovieContext'
function MovieCard({movie}){
    const {isFavourite, addToFavourites, removeFromFavourites} = useMovieContext()
    const favourite = isFavourite(movie.id)
    function favouriteClick(e){
        e.preventDefault()
        if (favourite) removeFromFavourites(movie.id)
        else addToFavourites(movie)

    }
    return (
        <div className='movieCard'>
            <div className='moviePoster'>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className='movieOverlay'>
                    <button className={`favouriteButton ${favourite ? "active" : ""}`} onClick={favouriteClick}> Favourite</button>
                </div>
            </div>
            <div className='movieInfo'>
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>

    );
}

export default MovieCard