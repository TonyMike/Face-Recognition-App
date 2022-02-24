import React from 'react'
import '../../../src/index.css'

function SignIn ({onRouteChange}) {
    // const {onRouteChange} = props
  const formStyle = {
    width: '100%',
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  const form = {
    display: 'flex',
    flexDirection: 'column'
  }
  return (
    <div style={formStyle}>
      <form style={form} className='tc shadow-5 pa4 br2'>
        <h2 className='route-title'>Sign In</h2>
        <label htmlFor='email'>Email</label>
        <input className='' type='email' name='email' />
        <label htmlFor='password'>Password</label>
        <input className='' type='password' name='password' />
        <button type='button' onClick={()=>onRouteChange('home')}>
          Sign In
        </button>
        <p className='switch' onClick={()=>onRouteChange('register')}>Register</p>
      </form>
    </div>
  )
}

export default SignIn
