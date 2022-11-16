import React from 'react'
import construccion from '../images/construccion.png';


const OnDevelopment = () => {
  return (
    <div 
    style={{
        textAlign: '-webkit-center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        placeContent: 'center'
    }}>
        <h3>En construcción...</h3>
        <img style={{
            width: '25rem',
            height: '25rem'
        }} src={construccion} alt="" />
        
    </div>
  )
}

export default OnDevelopment