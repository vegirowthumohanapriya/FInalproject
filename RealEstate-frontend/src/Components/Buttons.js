import React from 'react'
import Number from './Number'

export default function Buttons() {
  return (
    <div className='buttons-main'>
        <h3 className='button-head'>ADD NEW PROPERTY</h3>
        <div className='buttons'>
            <div className='button'>
                <Number num={1}/>
                <p className='button-name'>Basic info</p>
                
            </div >
            <div className='button'>
            <Number num={2}/>
            <p className='button-name'>Property Detail</p>
            
            </div>
            <div className='button'>
            <Number num={3}/>
            <p className='button-name'>General Info</p>
            
            </div>
          <div className='button'>
          <Number num={4}/>
          <p className='button-name'>Location info</p>
         
          </div>
            
        </div>
      
    </div>
  )
}
