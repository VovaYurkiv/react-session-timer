import React, { useEffect, useState, useRef } from 'react'
import base from '../base'

const DesktopTimer = ({ user }) => {

    const [desktopTimer, setDesktopTimer] = useState(null)
    const [isActive, setIsActive] = useState(false)
    const increment = useRef(null)
    const [width, setWidth] = useState(window.innerWidth)
    const rootRef = base.database().ref('/desktop-timer/')

    const handleStart = () => {
        setIsActive(true)
        increment.current = setInterval(() => {
          setDesktopTimer((desktopTimer) => desktopTimer + 1)
        }, 1000)
      }

      const formatTime = () => {
        const getSeconds = `0${(desktopTimer % 60)}`.slice(-2)
        const minutes = `${Math.floor(desktopTimer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(desktopTimer / 3600)}`.slice(-2)

        return `${getHours}:${getMinutes}:${getSeconds}`
      }

      const setDataRealTime = () => {
        rootRef.child(user.email.replace('.', '@')).set({
          userEmail: user.email,
          time: desktopTimer
        })
      }

      let snapValue = null
      const getDataRealTime = base.database()
        .ref(`desktop-timer/${user.email.replace('.', '@')}/time`)
        .on('value', snapshot => {
          if(snapshot.val()) {
            snapValue = snapshot.val()
          } 
      })
      console.log(desktopTimer)

      useEffect(() => {
        setDataRealTime()
      }, [desktopTimer])

      // useEffect(() => {
      //   setTimeout(() => {
      //     getDataRealTime()
      //   }, 4000)
      // },[])

      useEffect(() => {
        setDesktopTimer(snapValue)
        { width > 600 && handleStart() }
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
            <h2>Desktop<p>{formatTime()}</p></h2>
            </>
    )
}

export default DesktopTimer


