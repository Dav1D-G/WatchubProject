import Image from 'next/image';
import arrow_right from '@/public/icons/arrow-right.svg';
import { Title } from '../molecule/main-title';
import { cardOffer } from '@/utils/card-offer';
import { OfferCard } from '../molecule/offer';
import Link from 'next/link';

export function Offer()
{
    return(
        <>
            <div className="offer-page">
                <section>
                    <Title text="OUR OFFER" classItem="offer-title"/>
                    <div className="offer-plan">
                        <Title text="CHOOSE YOUR PLAN :" classItem="offer-sugestion"/>
                        <div className="offer-menu-options">
                            {cardOffer.map((el)=>(
                                <OfferCard service={el.type} price={el.price} features={el.features} isPopular={el.isPopular} key={el.id}/>
                            ))}
                        </div>
                        <div className="offer-button">
                            <button className='offer-start-button'>
                                <Link href='/auth/sign-up'><text className='krub-regular'>Continue</text></Link>
                                <Image src={arrow_right} alt='arrow_right'/>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}