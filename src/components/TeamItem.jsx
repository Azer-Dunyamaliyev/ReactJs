import React from 'react'

const TeamItem = ({title , img}) => {
  return (
    <div className="team_card">
        <div className="person_img">
            <img src={img} alt="" />
        </div>
        <p className='person'>{title}</p>
        <p className='person_info'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Aenean elementum sapien ac sapien vestibulum posuere. Praesent congue dui nec lectus tincidunt elementum.
        </p>
    </div>
  )
}

export default TeamItem