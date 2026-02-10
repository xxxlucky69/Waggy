import {FaSearch} from 'react-icons/fa';
import './header.scss';

const Header = ({searchQuery, setSearchQuery}) => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__inner'>
                    <div className='logo'>
                        <img src='/img/logo.svg'/>
                    </div>
                    <div className='header__search'>
                        <div className='search-box'>
                            <img src='/img/loupe.svg' className='search-icon'/>
                            <input type='text' placeholder='Search for more than 10,000 products' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='search-input'></input>
                        </div>
                    </div>
                    <div className='header__contacts'>
                            <div className='contact-item'>
                                <div className='contact-label'>Phone</div>
                                <a href="" className='contact-number'>+980-34984089</a>
                            </div>
                            <div className='contact-item'>
                                <div className='contact-label'>Email</div>
                                <a href="" className='contact-number'>waggy@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
        </header>
    )
}
export default Header;