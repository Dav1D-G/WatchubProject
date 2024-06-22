type OfferLayout = {
    service : string ,
    price : string,
    features : string[],
    isPopular : boolean
}

export function OfferCard({service, price , features , isPopular} : OfferLayout)
{
    return(
        <div className={`offer-option ${isPopular && "is-popular"}`}>
            {isPopular ? 
            <div className="popular">
                <p className="koulen-regular">Popular</p>
            </div> :
            <div className="empty-popular">

            </div>
            }
            <div className="offer-type">
                <p className="koulen-regular">{service}</p>
            </div>
            <div className="offer-price">
                <p className="koulen-regular">${price} USD</p>
            </div>
            <div className="offer-feature">
                <p className="koulen-regular">FEATURE</p>
                <ul>
                    {features.map((el , index)=>(
                        <li key={index}>{el}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}