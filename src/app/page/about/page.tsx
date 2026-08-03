import AboutHero from '@/app/Components/AboutHero'
import CTA from '@/app/Components/CTA'
import Mission from '@/app/Components/Mission'
import Stats from '@/app/Components/Stats'
import Story from '@/app/Components/Story'
import Team from '@/app/Components/Team'
import WhyChooseUs from '@/app/Components/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <div>
      <AboutHero/>
      <Story/>
      <WhyChooseUs/>
      <Mission/>
      <Stats/>
      <Team/>
      <CTA/>
    </div>
  )
}

export default page
