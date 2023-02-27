import React from 'react'
import MemberGraph from '../../../../components/memebrsCard/MemberGraph'
import MembersOnline from '../../../../components/memebrsCard/MembersOnline'
import SettingsIcon from '../../../../components/memebrsCard/SettingsIcon'

export default function MemebrsCard() {
  return (
    <div>
      <MembersOnline/>
      <SettingsIcon/>
      <MemberGraph/>
    </div>
  )
}
