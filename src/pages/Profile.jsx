import { useState } from 'react'
import './Profile.css'

function Profile() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'News enthusiast and tech lover',
    preferences: {
      categories: ['Technology', 'Business'],
      notifications: true
    }
  })

  return (
    <div className="profile">
      <div className="container">
        <h1>Profile</h1>
        <div className="profile-content">
          <div className="profile-info">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.bio}</p>
          </div>
          <div className="preferences">
            <h3>Preferences</h3>
            <div className="categories">
              {user.preferences.categories.map(cat => (
                <span key={cat} className="category-tag">{cat}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
