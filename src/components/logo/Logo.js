import LogoIcon from '../../logo.svg'
import '../logo/Logo.css';


export default function Logo() {
    return (
        <div className='logo'>
            <img src={LogoIcon} alt="Logo olacak" />
        </div>
    )
}