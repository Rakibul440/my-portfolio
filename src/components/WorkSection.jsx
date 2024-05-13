import React from 'react'


import "../asset/WorkSection.css"
export default function WorkSection(props) {
  return (
    < div className='work container'>
        <div className='work-image'>

            <img src={props.link} alt="The Visionery" className='project'/>

        </div>
    
    </div>
  )
}
