type RegulationProps = {
    text : string
}
export function Regulation({text}:RegulationProps)
{
    return(
        <div className='card-check-item w-full'>
            <input type='checkbox'></input>
            <p>{text}</p>
        </div>
    )
}