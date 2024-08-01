import React from 'react'
import collectionImg from '../assets/image/collection_img_1.png'

const Collection = () => {
  return (
    <div className="collection">
        <div className="container">
            <div className="collection_content">
                <div className="col_info">
                    <p className="title">New collection</p>
                    <p className="subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere. Praesent congue dui nec lectus tincidunt elementum. Donec viverra a neque vel egestas. Ut quis urna orci. Nullam sollicitudin est et quam rhoncus, nec imperdiet sem efficitur. 
                        Etiam aliquam posuere hendrerit. Curabitur egestas sed nisl rhoncus finibus.
                    </p>
                    <div className="collection_btn">More</div>
                </div>
                <div className="col_info">
                    <div className="collection_mini">
                        <div className="collection_img">
                            <img src={collectionImg} alt="" />
                        </div>
                        <div className="collection_img">
                            <img src={collectionImg} alt="" />
                        </div>
                    </div>
                    <div className="collection_mini">
                        <img src={collectionImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Collection