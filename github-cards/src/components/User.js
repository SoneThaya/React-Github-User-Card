import React from 'react'

export default function User({ userData }) {
  
  return (
    <div>
      <h1>{userData.name}</h1>
      <p>{userData.avatar_url}</p>
      <p>{userData.bio}</p>
      
      <p>{userData.location}</p>
    </div>
  )
}
