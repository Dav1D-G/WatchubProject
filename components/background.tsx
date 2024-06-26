'use client'

import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import {  useCallback } from "react";
import type { Container , Engine} from "tsparticles-engine";


export function Background()
{

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);


    return(
        <>
            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen : {
                    enable : true,
                    zIndex :  -1
                },
                background: {
                    color: {
                        value: "#071E0B",
                    },
                },
                fpsLimit: 120,
                // interactivity: {
                //     events: {
                //         onClick: {
                //             enable: false,
                //             mode: "push",
                //         },
                //         onHover: {
                //             enable: false,
                //             mode: "repulse",
                //         },
                //     },
                //     modes: {
                //         push: {
                //             quantity: 10,
                //         },
                //         repulse: {
                //             distance: 200,
                //             duration: 0.4,
                //         },
                //     },
                // },
                particles: {
                    color: {
                        value: "#00FF1E",
                    },
                    links: {
                        color: "#009311",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                          
                        },
                        value: 200,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
            />
        </>
    )
}