import React from 'react'
import MemebrInfo from './pageContent/MemebrInfo'
import PrimaryMenu from './pageContent/PrimaryMenu'
import SecondaryMenu from './pageContent/SecondaryMenu'
import SocialInfo from './pageContent/SocialInfo'

export default function PageContent() {
  return (
    <div>
      <PrimaryMenu/>
      <SecondaryMenu/>
      <MemebrInfo/>
      <p>Graph</p>
      <SocialInfo/>
    </div>
  )
}
