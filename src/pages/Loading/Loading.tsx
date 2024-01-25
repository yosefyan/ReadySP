import React from 'react'
import { centerItem } from '../../utils/utils'

const Loading = () => {
  return (
    <div className={`${centerItem()} w-full h-full`}>
        <div className='w-[10%] h-[20%] border border-b-transparent border-t-transparent rounded-full animate-spin'></div>
    </div>
  )
}

export default Loading
