import React from 'react'
import '../../../src/index.css'

function Register ({onRouteChange}) {
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
        <h2 className='route-title'>Register</h2>
        <label htmlFor='username'>Name</label>
        <input className='' type='text' name='username' />
        <label htmlFor='email'>Email</label>
        <input className='' type='email' name='email' />
        <label htmlFor='password'>Password</label>
        <input className='' type='password' name='password' />
        <button type='button' onClick={()=>onRouteChange('home')}>
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
