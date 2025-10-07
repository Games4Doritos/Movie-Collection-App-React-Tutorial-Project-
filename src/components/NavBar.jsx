import {Link} from "react-router-dom";
import '../css/navBar.css'
import tmdbLogo from '../assets/TMDBLogo.svg'
function NavBar(){
    return <nav className="navbar">
        
        <div>
            <Link className="navbarBrand" to="/">Your Movie Collection</Link>
            <Link to="/" className="navLink">Home</Link>
            <Link to="/favourites" className="navLink" style={{borderRight:'outset', marginRight:'40px'}}>Favourites</Link>

            Powered by <img src={tmdbLogo} style={{height:'25px',width:'25px'}}></img>
        </div>
    </nav>
}

export default NavBar