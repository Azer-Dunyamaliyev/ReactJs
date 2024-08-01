import React from 'react'
import WorkImg from '../assets/image/Workshop_1.png'

const Work = () => {
  return (
    <div className="work">
      <div className="container">
        <div className="work_content">
          <div className="work_col">
            <img src={WorkImg} alt="" />
          </div>
          <div className="col_info">
            <p className="title">Workshops</p>
            <p className="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere. Praesent congue dui nec lectus tincidunt elementum. Donec viverra a neque vel egestas. Ut quis urna orci. Nullam sollicitudin est et quam rhoncus, nec imperdiet sem efficitur. 
                Etiam aliquam posuere hendrerit. Curabitur egestas sed nisl rhoncus finibus.
            </p>
            <div className="collection_btn">Subscribe</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work