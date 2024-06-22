'use client'

import Image from "next/image"
import arrow_right from '@/public/icons/arrow-right.svg'
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react";
import Link from "next/link";

export function Welcome()
{
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref);
    
    useEffect(() => {
        if (isInView) {
        controls.start("visible");
        } else {
        controls.start("hidden");
        }
    }, [isInView,controls]);

    const variant1 = {
        hidden: { scale: 0 , opacity : 0 },
        visible: { scale: 1 , opacity : 1 , transition: { duration: 1  } },
    };

    return(
        <>
           <div className="welcome-title">
                <motion.section initial='hidden' animate={controls} variants={variant1} ref={ref}>
                    <div className="title">
                        <p className="oswald">
                            WATC<span className="hub">HUB</span>
                        </p>
                    </div>
                    <div className="content">
                        <article className="roboto-regular">
                            <strong>WatchHub</strong> is an innovative platform that allows users to browse and 
                            stream their favorite movies, series and TV shows.Start rediscovering 
                            the world of fantasy now and experience it for yourself thrill. 
                        </article>
                    </div>
                    <div className="button-get-started">
                        <button>
                            <span className="get-started-text">
                                <Link href='/auth/sign-up'><text className="krub-regular">Get Started</text></Link>
                            </span>
                            <span className="arrow_right">
                                <Image src={arrow_right} alt=""/>
                            </span>
                        </button>
                    </div>
                </motion.section>
            </div>
        </>
    )
}