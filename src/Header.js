import logo from './images/logo.png'
export default function Header(){
    return (
        <header className="header">
            <img src={logo} className="header--logo" alt="logo"></img>
            <h4 className="header--text">my travel journal.</h4>
        </header>
    )
}