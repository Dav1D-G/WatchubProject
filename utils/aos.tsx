'use client'

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from 'react';

export function  AOSInit() {
    useEffect(() => {
      AOS.init({
        duration : 1000,
        offset: -100,
        disable : ()=>{
          return window.innerWidth >= 1500;
        },
        
      });
      AOS.refresh();
    }, []);

    return null;
};
  