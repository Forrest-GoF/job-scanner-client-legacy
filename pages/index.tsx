import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      Job Scanner Project
      <Link href={'/jobs'}>공고 검색</Link>
    </div>
  )
}

export default Home
