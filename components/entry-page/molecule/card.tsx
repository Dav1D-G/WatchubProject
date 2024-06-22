'use client'


import { Variants, motion , useAnimation , useInView} from "framer-motion"
import Image from "next/image"
import { useEffect, useRef } from "react";

type CardLayout = {
    variant : Variants,
    image : string,
    boldText : string,
    text : string,
    numberCard : number,
}

export function Card({variant , image , text , boldText , numberCard} : CardLayout)
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


    return(
        <>
            <motion.div className="card-space" initial="hidden" ref={ref} animate={controls} variants={variant}>
                <section className={`card-${numberCard}`}>
                    <div className="card-header">
                        <div className="card-header-number">
                            <p className="koulen-regular">0{numberCard}</p>
                        </div>
                        <div className="card-header-image">
                            <Image src={image} alt={'content'} width={45} height={45}/>
                        </div>
                    </div>
                    <div className="card-content">
                        <strong>{boldText}</strong> {text}
                    </div>
                </section>
            </motion.div>
        </>
    )
}