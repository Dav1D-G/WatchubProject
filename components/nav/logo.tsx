import logo from '@/public/icons/logo.svg'
import Image from 'next/image'
export function Logo()
{
    return(
        <div className='logo'>
            <div className=''>
                <Image src={logo} alt={''} width={80} height={80}/>
            </div>
        </div>
    )
}