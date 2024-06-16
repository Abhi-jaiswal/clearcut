import React from 'react'
import { useSelector } from 'react-redux'
import AudioToText from './AudioToText'

const TopLevel = () => {
    const NameData = useSelector((state) => state.Name.NameData);
    console.log(NameData);
  return (
    <div>
      {
        NameData === "" ? 
        <div>Please enter your name !!</div> 
        : 
        <div>
        <div>
            <div>
            Hello!!
            </div> 
            <div className='text-3xl text-bold'>
            {NameData}
            </div>
        </div>
            <div>
                <div>Welcome to ClearCut!</div>
            </div>
            <div>
                <AudioToText/>
            </div>
        </div>
      }
    </div>
  )
}

export default TopLevel
