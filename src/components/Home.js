import React from 'react'
import DesktopTimer from './DesktopTimer'
import MobileTimer from './MobileTimer'


const Home = ({ handleLogout, user }) => {

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
            <DesktopTimer 
                user={user}
            />
            <MobileTimer 
                user={user}
            /> 
        </div>
    )
}

export default Home