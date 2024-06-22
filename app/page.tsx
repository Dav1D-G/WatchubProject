import {Navigation} from '@/components/navigation'
import {Background} from '@/components/background'
import {Footer} from '@/components/footer'
import { Offer , Question , WhyUs , Welcome } from '@/components/entry-page/index'
import { AOSInit } from "@/utils/aos"
import { PrelineScript }from '@/utils/preline-script'




export default function Home() {
  return (
    <main>
      <Background/>
      <Navigation/>
      <div className='flex flex-col'>
        <Welcome />
        <Question/>
        <WhyUs/>
        <Offer/>
      </div>
      <Footer/>
    </main>
  );
}
