export const handleChangePassword = (event : React.ChangeEvent<HTMLInputElement> , setStatePassword :  React.Dispatch<React.SetStateAction<number>>) => {
    const value = event.target.value;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasNumber = /\d/.test(value);
    const isLongEnough = value.length > 6;
    
    

    if(!value) {
        setStatePassword(0); 
    }
    if(value) {
        setStatePassword(1); 
    }
    if(value && (hasUpperCase || hasNumber || isLongEnough)) {
        setStatePassword(2);
    }
    if ((hasUpperCase && hasNumber) || (hasUpperCase && isLongEnough) || (isLongEnough && hasNumber)) {
        setStatePassword(3);
    }
    if (hasUpperCase && hasNumber && isLongEnough) {
        setStatePassword(4);
    }
}