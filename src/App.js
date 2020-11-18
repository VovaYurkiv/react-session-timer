import './App.css'
import React, { useState, useEffect } from 'react'
import base from './base'
import SignUp from './components/SignUp'
import Home from './components/Home'

function App() {

  const[user, setUser] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[fname, setFname] = useState('')
  const[lname, setLname] = useState('')
  const[account, setAccount] = useState(false)


  const handleLogin = () => {
      base.auth().signInWithEmailAndPassword(email, password)
  }

  const handleSignUp = () => {
      base.auth().createUserWithEmailAndPassword(email, password)
  }

  const handleLogout = () => {
      base.auth().signOut()
  }

  const authListener = () => {
      base.auth().onAuthStateChanged(user => {
          if(user) {
              setUser(user)
              console.log(`${user.email} signed in`)
          } else {
              setUser('')
              console.log('No one is signed in')
          }
      })
  }

  useEffect(()=> {
      authListener()
  }, [])
  

  return (
    <div className="container">
        {user ? (
          <>
          <Home 
            handleLogout={handleLogout} 
            user={user}
          />
          </>
        ) : (
          <SignUp 
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignUp={handleSignUp} 
            fname={fname}
            setFname={setFname}
            lname={lname}
            setLname={setLname}
            account={account}
            setAccount={setAccount}
          />
        )}
    </div>
  )
}

export default App