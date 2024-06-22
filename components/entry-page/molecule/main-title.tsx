type TitleProps = {
    classItem : string,
    text : string
}

export function Title({ classItem , text } : TitleProps)
{
    return(
        <div className={`${classItem}`}>
            <div>
                <p className="koulen-regular">{text}</p>
            </div>
        </div>
    )
}