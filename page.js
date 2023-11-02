import Image from 'next/image'
import watches from '@/lib'
import Watches from '@/components/watch'
import Header from '@/components/header'

export default function Home() {
  return (
    <main >
      
      <Header></Header>

      <Watches></Watches>

    </main>
  )
}
