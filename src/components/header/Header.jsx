import logo from '../../assets/images/Logos/Logo_movies_ft.png';
import 'ionicons/dist/ionicons/ionicons.esm.js';
import language from '../../assets/images/ion-icon/language-outline.svg'

import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="logos">
                <img src={logo} className="logo" alt="Logo Movies" />
            </div>
            <div className="navbar">
                <select name="langue" id="langue">
                    <option value="français">
                        <img src={language} alt="" />Français
                    </option>
                    <option value="anglais">
                        <img src={language} alt="" />Anglais
                    </option>
                </select>
                <a href="/login" className="btn-identification">S&apos;identifier</a>
            </div>
        </header>
    );
};

export default Header;
