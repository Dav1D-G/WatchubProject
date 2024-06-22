import Image from "next/image"
export function ValidatePassword({image}:{image : string})
{
    return(
        <div className='level'>
            <Image src={image} alt={'rectangle'} width={4} height={4}/>
        </div>
    )
}