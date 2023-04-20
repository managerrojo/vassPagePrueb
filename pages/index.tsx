import { Inter } from 'next/font/google'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Section from '@/components/section/Section'
import Forms from '@/components/forms/Forms'
import Menu from '@/components/menu-se/Menu-se'
import MenuMobil from '@/components/menu-mobile/Menu-mobile'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <view>
      <Header></Header>
      <Section></Section>
      <Forms></Forms>
      <Menu></Menu>
      <Footer></Footer>
    </view>
  )
}
