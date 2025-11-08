import "../styles/Header.css"
import searchIcon from "../assets/search.png"
import appIcon from "../assets/app-icon.png"
import man from "../assets/man.png"

export default function Header() {
    return (
        <header className="app-header">
            <div className="icon-name-wrapper">
                <img src={appIcon} alt="app icon" />
                <h1>Forger Talks</h1>
            </div>

            <div className="profile-wrapper">
                <img src={searchIcon} className="search-icon" alt="search icon" />
                
                <img src={man} className ="profile" alt="a man" />
            </div>
        </header>
    )
}