import  {ReactNode} from 'react'
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

type LayoutType = {
    children : ReactNode
}

export default function HomePageLayout({children} : LayoutType)
{
    return(
        <>
        <main>
            <Navigation/>
            {children}
            <Footer/>
        </main>
        </>
    )
}