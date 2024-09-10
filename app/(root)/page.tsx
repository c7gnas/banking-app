import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: "Aniruddha" };
  return (
   <section className='home'>
    <div className="home-content"></div>
    <header className='home-header'>
      <HeaderBox
        type="greeting"
        title="Welcome"
        user={loggedIn?.firstName || 'Guest'}
        subtext="Access and manage your bank transactions efficiently"
      />

      <TotalBalanceBox
        accounts = {[]}
        totalBanks = {3}
        totalCurrentBalance={1250.35}
      /> 
    </header>
   </section>
  )
}

export default Home