import logo from '../assets/logo/FTD_logoBig.svg';
import callIcon from '../assets/callIcon.svg'
import locationIcon from '../assets/locationIcon.svg'

function HeaderBar() {
    return (
        <nav id="navbar">
            <img id='navbarLogo' src={logo} alt="Logo" />
            <h4>Ingrosso articoli di ferramenta e tabaccherie</h4>
            <a href="https://maps.app.goo.gl/H4DNaxgzrRN724LC7" target="_blank"><img className='inlineIcon' src={locationIcon} alt="Ci trovi in:" />C.so Garibaldi n.168, Portici (Na)</a>
            <a href="tel:0810487003"><img className='inlineIcon' src={callIcon} alt="Chiama al:" />0810487003</a>
            <p>Orario apertura: Lun/Ven 08:30/19:00 - Sab 08:30/12:00</p>
        </nav>
    )
}

export default HeaderBar