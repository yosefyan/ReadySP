import React from 'react'
import Graph from '../../../comps/LineGraph'
import { centerItem } from '../../../utils/utils'

const RolesGraph = () => {
  return (
    <div className={`w-full h-[50%] ${centerItem()}`}>
      <Graph/>
    </div>
  )
}

export default RolesGraph
