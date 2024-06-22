type AuthButtonProps = {
    name : string
}

export function AuthButton({name} : AuthButtonProps)
{
    return(
        <div className='card-button'>
            <button type="submit">
                {name}
            </button>
        </div>
    )
}