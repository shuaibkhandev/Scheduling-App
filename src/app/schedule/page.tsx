import MeetingForm from '@/components/MeetingForm'
import React from 'react'

const SchedulePage = () => {
  return (
    <div className='p-10'>
        <h2 className='text-2xl font-semibold mb-5'>Create Meeting</h2>
        <MeetingForm/>
    </div>
  )
}

export default SchedulePage