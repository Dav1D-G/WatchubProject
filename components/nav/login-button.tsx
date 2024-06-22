import Link from "next/link"

export function LoginButton()
{
    return(
        <div className='login-button'>
            <div className='login-button-style'>
                <Link href='/auth/sign-in'>
                    <button className=''>
                        <text className='roboto-regular'>Log in</text>
                    </button>
                </Link>
            </div>
        </div>
    )
}