import React from 'react'

const WorkItemRight = ({img,title}) => {
  return (
    <div className="work_item">
        <div className="container">
            <div className="work_item_content">
                <div className="work_item_img">
                    <img src={img} alt="" />
                </div>
                <div className="work_item_text">
                    <p className="title">{title}</p>
                    <p className="work_item_subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere. 
                        Praesent congue dui nec lectus tincidunt elementum. Donec viverra a neque vel egestas. Ut quis urna orci. 
                        Nullam sollicitudin est et quam rhoncus, nec imperdiet sem efficitur. Etiam aliquam posuere hendrerit. 
                    </p>
                    <div className="work_item_buttons">
                        <div className="work_item_button">Subscribe</div>
                        <div className="work_item_button">Show More</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkItemRight