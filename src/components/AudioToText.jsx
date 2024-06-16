import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const AudioToText = () => {
    const startListening = () => {
        SpeechRecognition.startListening({continuous: true});
    }
    const stopListening = () => {
        SpeechRecognition.stopListening();
    }
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    if(!browserSupportsSpeechRecognition){
        return <span>Browser doesn't support speech recognition</span>
    }
  return (
    <div>
    <div className='text-xl text-center mt-[20px]'>
        Voice to text converter
    </div>
      <div className='bg-[#18181C] text-white min-h-[300px] w-[550px] mt-[10px]'>
        {transcript}
      </div>

      <div className='flex justify-between'>
        <button className='bg-red-500 outline-2 p-[10px]' onClick={stopListening}>
            stop listening
        </button>
        <button className='bg-green-500 outline-2 p-[10px]' onClick={startListening}>
            start listening
        </button>
      </div>
    </div>
  )
}

export default AudioToText
