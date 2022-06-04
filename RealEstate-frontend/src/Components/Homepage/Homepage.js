import React from 'react'
import Staticpart from './Staticpart'

import Dynamicpart from './Dyanamicpart/Dynamicpart'

export default function Homepage() {
  return (
    <div className='homepage'>
      <Staticpart/>
      <Dynamicpart/>
      </div>
   
  )
}
