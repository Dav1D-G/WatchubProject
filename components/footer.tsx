
import phone from '@/public/icons/phone-footer.svg';
import mail from '@/public/icons/mail-footer.svg';
import location from '@/public/icons/location-footer.svg';
import fb from '@/public/icons/fb.svg';
import insta from '@/public/icons/insta.svg';
import twitter from '@/public/icons/twitter.svg';
import linkedin from '@/public/icons/linkedin.svg';

import Image from 'next/image';


export function Footer()
{
    
    return(
        <footer className="footer-page">
            <section className="footer-contact">
                <div className="footer-contact-item">
                    <div className="footer-contact-img">
                        <Image src={phone} alt='' width={35} height={35}/>
                    </div>
                    <div className="footer-contact-text">
                        <text className='krub-regular'>+48 734 123 567</text>
                    </div>
                </div>
                <div className="footer-contact-item">
                    <div className="footer-contact-img">
                        <Image src={mail} alt='' width={35} height={35}/>
                    </div>
                    <div className="footer-contact-text">
                        <text className='krub-regular'>watchub@gmail.com</text>
                    </div>
                </div>
                <div className="footer-contact-item">
                    <div className="footer-contact-img">
                        <Image src={location} alt='' width={35} height={35}/>
                    </div>
                    <div className="footer-contact-text">
                        <text className='krub-regular'>Kościuszki 24/3 90-567, Warsaw</text>
                    </div>
                </div>
            </section>
            <section className="footer-info">
                <div className='footer-info-item'>
                    <text className='krub-regular'>About</text>
                </div>
                <div className='footer-info-item'>
                    <text className='krub-regular'>Company</text>
                </div>
                <div className='footer-info-item'>
                    <text className='krub-regular'>Resources</text>
                </div>
                <div className='footer-info-item-sub'>
                    <div className='footer-item-subscribe'>
                        <text className='krub-regular'>Subscribe</text>
                    </div>
                    <div className='footer-item-input'>
                        <input type='text' placeholder='Enter your email'></input>
                    </div>
                    <div className='footer-item-info'>
                        <text>Our digital marketing updates in your mailbox</text>
                    </div>
                </div>
            </section>
            <section className="footer-copyright">
                <div className='footer-copyright-social'>
                    <Image src={fb} alt='fb' className='image-social'/>
                    <Image src={insta} alt='insta' className='image-social'/>
                    <Image src={twitter} alt='twitter' className='image-social'/>
                    <Image src={linkedin} alt='linkedin' className='image-social'/>
                </div>
                <div className='footer-copyright-sign'>
                    <text>
                        © 2024 Dawid Głowacz. All rights reserved.
                    </text>
                </div>
            </section>
        </footer>
    )
}