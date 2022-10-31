import {Link} from 'react-router-dom'
import './Header.css'

function Header(){

    return(
        <div className='Header' >
            <div className='nome'>
                <h1>Prof. Janier Arias Garcia</h1>
            </div>
        
            <div>
                <ul className="list">
                    <li className='item'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className="item">
                        <Link to="/Research">Research</Link>
                    </li>
                </ul>
            </div>
        </div>

    )

}

export default Header