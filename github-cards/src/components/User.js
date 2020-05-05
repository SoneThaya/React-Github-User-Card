import React from 'react'

export default function User({ userData }) {
  
  return (
    <div>
      <h1>{userData.name}</h1>
      <img src={userData.avatar_url} alt="profile" />
      
      <p>{userData.bio}</p>
      
      <p>{userData.location}</p>
    </div>
  )
}
