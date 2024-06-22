import Link from "next/link"
type AuthTypeProp = 
{
    authType : string
}
export function AuthType({authType}:AuthTypeProp)
{
    return(
        <div className='card-title'>
            <section className='card-title-section'>
                <Link href={'/auth/sign-in'} className="sign-in">
                    <p className={`${authType == 'sign-in' ? "is-active" : ''}`}>Sign in</p>
                </Link>
                <Link href={'/auth/sign-up'} className="sign-up">
                    <p className={`${authType == 'sign-up' ? "is-active" : ''}`}>Sign up</p>
                </Link>
            </section>
        </div>
)
}