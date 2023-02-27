import React from 'react'
import Dashboard from '../../components/leftNav/Dashboard'
import PageLogo from '../../components/leftNav/PageLogo'
import ComponentsSec from './leftNav/ComponentsSec'
import ExtrasSec from './leftNav/ExtrasSec'

import ThemeCard from './leftNav/ThemeCard'



export default function LeftNav() {
  return (
    <div>
      <PageLogo/>
      <Dashboard/>
      <ThemeCard/>
      <ComponentsSec/>
      <ExtrasSec/>
    </div>
  )
}
