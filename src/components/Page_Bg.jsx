import React from 'react'
import BgItem from './BgItem'

const Page_Bg = ({text,img}) => {
  return (
    <div className="bg" style={{ backgroundImage: `url(${img})` }}>
        <div className="container">
            <div className="bg_content">
              <BgItem text = {text}/>
            </div>
        </div>
    </div>
  )
}

export default Page_Bg