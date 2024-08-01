import React from 'react'
import TeamItem from './TeamItem'
import Person_1 from '../assets/image/person_1.png'
import Person_2 from '../assets/image/person_2.png'
import Person_3 from '../assets/image/person_3.png'

const Team = () => {
  return (
    <div className="team">
        <div className="container">
            <div className="team_content">
                <p className="title">Our employees</p>
                <div className="team_cards">
                    <TeamItem key={TeamItem.id} title = {'Mary Smith'} img = {Person_1} />
                    <TeamItem key={TeamItem.id} title = {'James Jones'} img = {Person_2} />
                    <TeamItem key={TeamItem.id} title = {'Emily Murphy'} img = {Person_3} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team