import { cardItems } from "@/utils/card-text";
import { Card } from "../molecule/card";

export function WhyUs()
{
    return(
        <>
           <div className="why-us">
                <section className="why-us-section">
                    {cardItems.map((el)=>{
                        return(<>
                            <Card  
                            variant={el.variant} 
                            image={el.image} 
                            boldText={el.boldText} 
                            text={el.text} 
                            key={el.numberCard} 
                            numberCard={el.id}/>
                        </>)
                    })}
                </section>
            </div>
        </>
    )
}