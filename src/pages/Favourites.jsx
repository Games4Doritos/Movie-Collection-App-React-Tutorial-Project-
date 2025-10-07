import {useMovieContext} from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

function Favourites(){
    const {favourites} = useMovieContext();
    if (favourites.length != 0){
        return (  <div>
            <h2>Your Favourites</h2>
            <div className="movieGrid">
                {favourites.map((movie) => (
                <MovieCard movie={movie} key={movie.id}/>))}
            </div>
        </div> )
    }
    return (
        <div className="favouritesEmpty">
            <h2>No Favourite Movies</h2>
            <p>Start adding movies to your favourites to make them appear here!</p>

        </div>

    );
}

export default Favourites