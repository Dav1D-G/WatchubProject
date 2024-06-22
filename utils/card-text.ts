import {variant1 , variant2, variant3 ,variant4} from '@/utils/variants'
import document from '@/public/icons/document.svg';
import content from '@/public/icons/content.svg';
import high_quality from '@/public/icons/high-quality.svg';
import devices from '@/public/icons/devices.svg';

export const cardItems = [
    {
        id : 1,
        image : document,
        variant : variant1,
        boldText : "Wide range of content:",
        text : `Watchub can give you access to a wide range of movies, 
        series, documentaries, TV shows and more in one place. This is a convenient solution for people 
        who want to have access to a variety of content without having to use multiple platforms.`,
        numberCard : 1,
    },
    {
        id : 2,
        image : content,
        variant : variant2,
        boldText : "Personalization:",
        text : `Watchub can customize recommendations based on user preferences. 
        Thanks to this, the customer receives the content that interests him without having 
        to search the entire library.`,
        numberCard : 2,
    },
    {
        id : 3,
        image : high_quality,
        variant : variant3,
        boldText : "Broadcast quality:",
        text : `The platform can provide high-quality broadcasting, 
        which is important for people who value smooth viewing without interruptions.`,
        numberCard : 3,
    },
    {
        id : 4,
        image : devices,
        variant : variant4,
        boldText : "Multi-Device Support:",
        text : `The platform can run on a variety of devices such as smartphones, 
        tablets, TVs, and computers.This means that users can use it anywhere and anytime.`,
        numberCard : 4,
    },
]