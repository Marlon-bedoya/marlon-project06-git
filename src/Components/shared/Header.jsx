import { Link } from "react-router-dom"



const Header = () => {


    return (
        <header>
            <h1><Link to='/'>htleApp</Link></h1>
            <nav>
                <lu>
                    <li><Link to='/register'>Register</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </lu>
            </nav>
        </header>
    )
}

export default Header