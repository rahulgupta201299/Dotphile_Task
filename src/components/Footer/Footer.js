import React,{useState} from 'react';
import './Footer.scss';
import { Button } from '../../Style/Button/Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

function Footer() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [area,setArea]=useState('')
    const [suscribe,setSuscribe]=('')
    const handleSubmit=()=>{
        const data={
            userName:name,
            Email:email,
            TextArea: area
        }
    }
  return (
    <div className='footer-container'>
      <div className="footer-row">
      <section className='footer-contact' onSubmit={handleSubmit}>
        <h2 style={{padding:"4px",color:"white",left:"10%",textAlign:"center",marginTop:"6px"}}>Please provide your personal information to make us contact you</h2><br/>
        <form className="footer-col">
        <input className="contact-input" placeholder="Name" type="text" onChange={(e)=>setName(e.target.value)} required/>
        <input className="contact-input"  placeholder="Email" type="email" onChange={(e)=>setEmail(e.target.value)} required/>
        <textarea className="contact-input" placeholder="Reason and purpose of contacting!" onChange={(e)=>setArea(e.target.value)} type="text" required />
        <Button type="submit" buttonStyle='btn--outline' buttonColor="green">Contact Us</Button>
        </form>
      </section>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Drop your email id & we will notify you when we go live!
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
              onChange={(e)=>setSuscribe(e.target.value)}
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      </div>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/signin'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdFingerprint className='navbar-icon' />
              Dotphile
            </Link>
          </div>
          <small className='website-rights'>Dotphile © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='//www.facebook.com/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='//www.instagram.com/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='//twitter.com/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='//in.linkedin.com/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;