import React from 'react';
import './Footer.css';
// import Button from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <section className='footer__container'>
            {/* <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Zapraszamy do zapisania się do newslettera
        </p>
                <p className='footer-subscription-text'>
                    Możesz wypisać się w każdej chwili
        </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <Button buttonStyle='btn--outline'>Subskrybuj</Button>
                    </form>
                </div>
            </section> */}
            <div class='footer__links'>
                <div className='footer__link__wrapper'>
                    <div class='footer__link__items'>
                        <h2>O nas</h2>
                        <Link to='/draft'>Jak działamy?</Link>
                        <Link to='/draft'>Referencje</Link>
                        <Link to='/draft'>Kariera</Link>
                        <Link to='/draft'>Dla inwestora</Link>
                    </div>
                    <div class='footer__link__items'>
                        <h2>Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                    <div class='footer__icons'>
                        <Link
                            class='social__icon__link facebook'
                            to={{ pathname: 'https://github.com/jacekmaciejak/' }}
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                            class='social__icon__link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            class='social__icon__link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social__icon__link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </Link>
                        <Link
                            class='social__icon__link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                    {/* <div class='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div> */}
                    {/* <div class='footer-link-items'>
                        <h2>Kontakt</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div> */}
                </div>
            </div>
            {/* <section class='social__media'>
                <div class='social__media__wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>

                            Jacek Maciejak
                            <i class="fas fa-tools"></i>
                        </Link>
                    </div>

                </div>
            </section> */}
        </section >
    );
}

export default Footer;
