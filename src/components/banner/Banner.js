import './Banner.css';
import logo from '../../assets/logo.png'

function Banner() {
    return (
        <div className='jh-banner'>
            <img src={logo} alt='Jungle House' className='jh-logo' />
            <h1 className='jh-title'>Jungle House</h1>
        </div>
    );
}

export default Banner