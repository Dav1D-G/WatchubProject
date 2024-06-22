import { Regulation } from "../atom/regulation"

type AuthCheckProps = {
    typeAuth :  string
}

export function AuthCheck({typeAuth} : AuthCheckProps)
{
    return(
        <div className='card-check'>
            <section className='card-check-section'>
                {typeAuth == 'sign-in' ? <>
                    <div className="flex justify-between">
                        <div className='card-check-item'>
                            <input type='checkbox'></input>
                            <p>Remember me</p>
                        </div>
                        <div className='card-check-item'>
                            <p>Forgot Password</p>
                        </div>
                    </div>
                </> : 
                <>
                    <div>
                        <Regulation text="I have read and accept the regulations *"/>
                        <Regulation text="I agree to the processing of personal data"/>
                    </div>
                </>
                }
            </section>
        </div>
    )
}