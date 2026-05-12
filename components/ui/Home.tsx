import React from 'react'
import HomeTestimonials from '../home/HomeTestimonials'
import HomeAboutSnippet from '../home/HomeAboutSnippet'
import HomePackages from '../home/HomePackages'
import HomeStatsSnippet from '@/components/home/HomeStatsStrip'
import HomeHero from '@/components/home/HomeHero'
import HomeWhyUs from '../home/HomeWhyUs'


export default function Home() {
  return (
   <>
<div>
      <HomeHero/>
      <HomeStatsSnippet/>
      <HomePackages/>
     <HomeAboutSnippet/>
     <HomeTestimonials/>
     <HomeWhyUs/>
     </div>
   </>
  )
}
