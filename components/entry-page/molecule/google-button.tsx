import Image from "next/image"
import google from '@/public/icons/google.svg'
export function GoogleButton()
{
    return(
        <div className='card-google-auth'>
            <button className='card-google-section'>
                <div className='card-google-image'>
                    <Image src={google} alt=''/>
                </div>
                <div className='card-google-text'>
                    <p>Continue with Google</p>
                </div>
            </button>
        </div>
    )
}