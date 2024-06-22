import Image from 'next/image';
import white_rectagle from '@/public/icons/white_rectangle.png';
import red_rectagle from '@/public/icons/red_rectangle.png';
import green_rectagle from '@/public/icons/green_rectangle.png';
import { ReactNode } from 'react';
import { FieldError, FieldErrors } from 'react-hook-form';
import { SignInValues } from '@/utils/sign-in-resolver';
import { ValidatePassword } from '../atom/validatePassword';
import { validatePassword } from '@/utils/validate-password';

type AuthInputProps =
{
    name : string,
    typeAuth : string,
    children : ReactNode,
    error ?: FieldError,
    statePassword : number
}



export function AuthInput({name , typeAuth , children , error , statePassword}:AuthInputProps)
{
    return(
        <div className={`card-${typeAuth}`}>
            <section className='card-input-section'>
                <div className='card-input-title'>
                    <p>{name}</p>
                </div>
                <div className={`card-input-type ${error && "error"}`}>
                    {children}
                    {typeAuth == 'sign-up' ? (name == 'Password' || name == "Confirm Password" ? 
                    <div className="password-rules">
                        {/* <div className='level'>
                            <Image src={white_rectagle} alt={'white-rectangle'}/>
                        </div>
                        <div className='level'>
                            <Image src={red_rectagle} alt={'white-rectangle'}/>
                        </div>
                        <div className='level'>
                            <Image src={green_rectagle} alt={'white-rectangle'}/>
                        </div>
                        <div className='level'>
                            <Image src={green_rectagle} alt={'white-rectangle'}/>
                        </div> */}
                        {validatePassword[ statePassword ].map((el,index)=>(
                            <ValidatePassword image={el.src} key={index}/>
                        ))}
                    </div>
                    : ' ') : ' '}
                </div>
                {error && <p className='card-error-input'>{error.message}</p>}
            </section>
        </div>
    )
}