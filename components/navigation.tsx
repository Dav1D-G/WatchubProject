'use client'
import { Language } from './nav/language';
import { Logo } from './nav/logo';
import { LoginButton } from './nav/login-button';
import Link from 'next/link';
import profile from '@/public/icons/profile.svg';
import notify from '@/public/icons/notify.svg';
import Image from 'next/image';
import { typeMovies } from '@/utils/type-movies';
import { useState } from 'react';
import arrow_up from '@/public/icons/arrow-up.svg';
import { delay, motion, useAnimation } from 'framer-motion';
import burger_menu from '@/public/icons/burger_menu.svg';
import arrow_left from '@/public/icons/arrow-left.svg'
import useNextMediaQuery from '@mui/material/useMediaQuery';

export function Navigation()
{
    // check useCookies
    // check urlPage
    const [hoverState, setHoverState] = useState(false);
    const arrowAnimation = useAnimation();
    const controls = useAnimation();
    const [showMovies , setShowMovies] = useState(false);
    const isMediumScreen = useNextMediaQuery('(min-width: 768px)');


    const toggleHoverState = () => {
        setHoverState((prev) => !prev);
        arrowAnimation.start({
        rotate: hoverState ? 0 : 180,
        transition: { duration: 0.3 },
        });
    };

    const toggleHoverAsideItem = () => {
        arrowAnimation.start({
        rotate: showMovies ? 0: 180,
        transition: { duration: 0.3 },
        });
    };

    const handleButtonClick = () => {
        setHoverState(!hoverState);
        if (!hoverState) {
            controls.start("open");
        } else {
            controls.start("closed");
        }
    };

    return(
        <header className="nav-style">


            {/* <nav className='un-register'>
                <Logo/>
                <Language />
                <LoginButton />
            </nav> */}

            {isMediumScreen ? 
            <>
                <nav className='register'>
                    <Logo/>
                    <div className='pages'>
                        <Link href={'/homepage'} className='nav-pages is-active-page'>
                            <p className='koulen-regular'>HOME</p>
                        </Link>
                        <div className='nav-movies is-active-page' onClick={()=>toggleHoverState()}>
                            <p className='koulen-regular' >MOVIES</p>
                            <motion.img animate={arrowAnimation} src={arrow_up.src} alt='arrow_down' className='arrow-menu'/>
                            <div className={`expand-menu ${hoverState ? 'absolute' : 'hidden'}`}>
                                <ul className='list-type-movies'>
                                    {typeMovies.map((el,index)=>(
                                        <li key={index} className={`type-movie koulen-regular`}>
                                            <Link href={`/homepage/movies/${el}`}>
                                                <p>{el}</p>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <Link href={'/homepage/my-list'} className='nav-pages'>
                            <p className='koulen-regular'>MY LIST</p>
                        </Link>
                    </div>
                    <div className='others'>
                        <div className='notification'>
                            <Image src={notify} alt='notify'/>
                        </div>
                        <div className='user-profile'>
                            <Link href={'/homepage/profile'}>
                                <Image src={profile} alt='profile'/>
                            </Link>
                        </div>
                        <Language />
                    </div>
                </nav>
            </> : 
            <>
                <nav className="burger-menu">
                    <Logo/>
                    <div className='burger-button'>
                        <div className={`burger-icon ${hoverState && "is-border-burger-active"}`} onClick={()=>handleButtonClick()}>
                            <Image src={burger_menu} alt='burger_menu' width={60} height={60}/>
                        </div>
                    </div>
                    <motion.div className={`burger-aside-menu `} initial="closed"
                    animate={controls}
                    variants={{
                    open: { x: 0 },
                    closed: { x: "-100%" },
                    }}
                    >
                        <div className='aside-item'>
                            <Link href={'/homepage'} onClick={()=>handleButtonClick()}>
                                <p className='koulen-regular'>HOME</p>
                            </Link>
                        </div>
                        <div className='aside-item-movie'>
                            <div className='movie-title' onClick={()=>{
                                setShowMovies(()=>!showMovies)
                                toggleHoverAsideItem()
                            }}>
                                <p className='koulen-regular'>MOVIES</p>
                                <motion.img animate={arrowAnimation} src={arrow_left.src} alt='arrow-right'/>
                            </div>
                            <div className={`aside-list-movies ${showMovies ? "absolute": "hidden"}`}>
                                <ul className='aside-list-type-movies'>
                                    {typeMovies.map((el,index)=>(
                                        <li key={index} className={`aside-type-movie koulen-regular`}>
                                            <Link href={`/homepage/movies/${el}`} onClick={()=>handleButtonClick()}>
                                                <p>{el}</p>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='aside-item'>
                            <Link href={'/homepage/my-list'} onClick={()=>handleButtonClick()}>
                                <p className='koulen-regular'>MY LIST</p>
                            </Link>
                        </div>
                        <div className='aside-item'>
                            <Link href={'/homepage/profile'} onClick={()=>handleButtonClick()}>
                                <p className='koulen-regular'>PROFILE</p>
                            </Link>
                        </div>
                    </motion.div>
                </nav>
            </>}


           



           
        </header>
    )
}