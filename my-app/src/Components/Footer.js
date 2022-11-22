import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            {/* <Link to='/'>Testimonials</Link> */}
            <Link to='/'>Company</Link>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Terms and conditions</Link>
            <Link to='/'>Refund and Cancel</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Blogs</Link>

          </div>
          <div class='footer-link-items'>
            <h2>PGs</h2>
            <Link to='/'>PG in Delhi</Link>
            <Link to='/pginpune'>PG in Pune</Link>
            <Link to='/pginmumbai'>PG in Mumbai</Link>
            <Link to='/'>PG in Bangalore </Link>
            <Link to='/'>PG in Hyderabad</Link>
            <Link to='/'>PG in Noida</Link>
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Flatmates</h2>
            <Link to='/'>Flatmates in Pune</Link>
            <Link to='/'>Flatmates in Mumbai</Link>
            <Link to='/'>Flatmates in Delhi</Link>
            <Link to='/'>Flatmates in Bangalore</Link>
            <Link to='/'>Flatmates in Hyderabad</Link>
            <Link to='/'>Flatmates in Noida</Link>
            
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Your Second Home
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'> YSH © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;