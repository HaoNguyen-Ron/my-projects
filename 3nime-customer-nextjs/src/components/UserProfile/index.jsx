import React from 'react'
import UserDetail from './UserDetail'
import UserHistory from './UserHistory'
import UserPassword from './UserPassword'

export default function UserProfile({userName, userEmail , userAddress, isShow}) {
  return (
    <div>
        <UserDetail userName={userName} userAddress={userAddress} userEmail={userEmail}  isShow={isShow} />

        <UserHistory isShow={isShow} />

        <UserPassword isShow={isShow}/>
    </div>
  )
}
