'use client'
import { Footer } from '@/components/footer'
import background from '@/public/photos/background-auth-reverse.png';
import { useState } from 'react';
import Image from 'next/image';
import { AuthType } from "@/components/entry-page/molecule/auth-title";
import { GoogleButton } from "@/components/entry-page/molecule/google-button";
import { SignIn } from '@/components/entry-page/organism/sign-in';
import { SignUp } from '@/components/entry-page/organism/sign-up';
import { icons } from '@/utils/icons';


type AuthParams = {
    params : {auth_type : string},
}

export default function AuthLayout({params} : AuthParams)
{
    const [typeAuth , setTypeAuth] =  useState(params.auth_type);

    return(
        <>
        <main style={{backgroundImage : `url(${background.src})` , backgroundRepeat : 'no-repeat', backgroundPosition : 'center'}} className='auth-layout'>
            <div className='underlay'>
                <section className='card-auth'>
                    {typeAuth == 'sign-up' ? <GoogleButton/> : ''}
                    <AuthType authType={typeAuth}/>
                    {typeAuth == 'sign-in' ? <SignIn typeAuth={typeAuth}/> : <SignUp  typeAuth={typeAuth}/>}
                    {typeAuth == 'sign-in' ? <div className='card-social_media'>
                        <div className='card-social-text'>
                            <p>Or Sign in with</p>
                        </div>
                        <div className='card-social-icons'>
                            {icons.map((el)=>(
                                <Image src={el.img} key={el.id} alt='icon_socialmedia'/>
                            ))}
                        </div>
                    </div>: ''}
                </section>
            </div>
            <Footer/>
        </main>
        </>
    )
}