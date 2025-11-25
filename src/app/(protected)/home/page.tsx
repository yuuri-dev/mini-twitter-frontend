'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

const Home = () => {
  const router = useRouter()
  return (
    <div>
      <Button onClick={() =>router.push('/login')}>ログイン</Button>
    </div>
  )
}

export default Home