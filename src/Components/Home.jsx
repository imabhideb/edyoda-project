import React from 'react'
import UpcomingCertification from './UpcomingCertification'
import ContinueLearningBox1 from './ContinueLearningBox1'
import ContinueLearningBox2 from './ContinueLearningBox2'

const Home = () => {
  return (
    <div className='ml-[200px] mt-[70px]'>

      {/* first section */}
      <div className='mb-[60px]'>
        <h1 className='mb-[50px] font-bold text-[30px]'>Upcoming Certifications</h1>
        <UpcomingCertification/>
      </div>

      {/* second section */}
      <div>
        <h1 className='mb-[10px] font-bold text-[30px]'>Continue Learning</h1>
        
        <div className='flex gap-[50px]'>
          <ContinueLearningBox1/>
          <ContinueLearningBox2/>
        </div>
      </div>
    </div>
  )
}

export default Home