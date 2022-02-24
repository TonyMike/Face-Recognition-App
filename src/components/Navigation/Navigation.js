import React from 'react'

function Navigation ({ onRouteChange, isSignedIn }) {
  const flexNav = {
    display: 'flex',
    justifyContent: 'flex-end'
  }
  if (isSignedIn) {
    return (
      <nav style={flexNav}>
        <p
          className='pa3 link pointer dim black underline f3'
          onClick={() => onRouteChange('login')}
        >
          Sign out
        </p>
      </nav>
    )
  } else {
    return (
      <div>
        <nav style={flexNav}> 
          <p
            className='pa3 link pointer dim black underline f3'
            onClick={() => onRouteChange('login')}
          >
            Sign In
          </p>
          <p
            className='pa3 link pointer dim black underline f3'
            onClick={() => onRouteChange('register')}
          >
            Register
          </p>
        </nav>
      </div>
    )
  }
}

export default Navigation
