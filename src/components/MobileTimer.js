import React, { useEffect, useState, useRef } from 'react'
import base from '../base'

const MobileTimer = ({ user }) => {

    const [mobileTimer, setMobileTimer] = useState(null)
    const [isActive, setIsActive] = useState(false)
    const increment = useRef(null)
    const [width, setWidth] = useState(window.innerWidth)
    const rootRef = base.database().ref('/mobile-timer/')

    const handleStart = () => {
        setIsActive(true)
        increment.current = setInterval(() => {
          setMobileTimer((mobileTimer) => mobileTimer + 1)
        }, 1000)
      }

      const formatTime = () => {
        const getSeconds = `0${(mobileTimer % 60)}`.slice(-2)
        const minutes = `${Math.floor(mobileTimer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(mobileTimer / 3600)}`.slice(-2)

        return `${getHours}:${getMinutes}:${getSeconds}`
      }

      const setDataRealTime = () => {
        rootRef.child(user.email.replace('.', '@')).set({
          userEmail: user.email,
          time: mobileTimer
        })
      }

      let snapValue = null
      const getRealTimeData = base.database()
        .ref(`mobile-timer/${user.email.replace('.', '@')}/time`)
        .on('value', snapshot => {
          if(snapshot.val()) {
            snapValue = snapshot.val()
          }
      })
    
      useEffect(() => {
        setDataRealTime()
      }, [mobileTimer])

      // useEffect(() => {
      //   setTimeout(() => {
      //     getDataRealTime()
      //   }, 4000)
      // },[])

      useEffect(() => {
        setMobileTimer(snapValue)
        { width < 600 && handleStart() }
      }, [])

      useEffect(() => {
        function handleResize() {
          setWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, [width])

      return (
            <>
            <h2>Mobile<p>{formatTime()}</p></h2>
            </>
    )
}

export default MobileTimer


