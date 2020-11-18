import React from 'react'


const SignUp = ({ 
    email, 
    setEmail, 
    password, 
    setPassword, 
    fname, 
    setFname, 
    lname, 
    setLname, 
    handleLogin,
    handleSignUp,
    account,
    setAccount }) => {
    
    return (
        <div>
            <form>
                {account ? (
                      <>
                <input
                    type='text'
                    name='fname'
                    placeholder='First Name'
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                  />
                <input
                      type='text'
                      name='lname'
                      placeholder='Last Name'
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                  />
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                      </>                  
                ) : (
                    <>
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </>
                )}
            </form>
            {account ? (
                <>
                <button onClick={handleSignUp}>Sign up</button>
                <p>Already have an account? 
                    <span onClick={() => setAccount(!account)}>Login</span>
                </p>
                </>
               
            ) : (
                <>
                <button onClick={handleLogin}>Login</button>
                <p>Do not have an account? 
                    <span onClick={() => setAccount(!account)}>Sign up</span>
                </p>
                </>
            )}
        </div>
    )
}

export default SignUp
