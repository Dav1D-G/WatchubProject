
const variant1 = {
    hidden: { opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 2  } },
};

const variant2 = {
    hidden: { opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 2 , delay : 0.5 } },
};

const variant3 = {
    hidden: { opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 2 , delay : 1 } },
};

const variant4 = {
    hidden: {  opacity: 0 },
    visible:{ opacity: 1, transition: { duration: 2 , delay : 1.5 } }, 
}


export {variant1,variant2,variant3,variant4}
