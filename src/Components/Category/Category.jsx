import React from 'react'
import './Category.scss'
const Category = () => {
    const data = [
        {
            title: "Education",
            imgUrl: "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_640.jpg",
            content: "Global Family Travels Climate Education"
        },
        {
            title: "Sports",
            imgUrl: "https://cdn.pixabay.com/photo/2016/11/29/06/20/blonde-1867768_1280.jpg",
            content: "Read All the Sports News"
        },
        {
            title: "Entertainment",
            imgUrl: "https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg",
            content: "Read All the Entertainment News"
        },
        {
            title: "Business",
            imgUrl: "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_640.jpg",
            content: "Read All the Business News"
        },
        {
            title: "Weather",
            imgUrl: "https://cdn.pixabay.com/photo/2017/05/04/16/37/meeting-2284501_640.jpg",
            content: "Read All the Weather News"
        },

    ]
    return (
        <div className='category'>
            <div className="categoryTop">
                <h3>Featured Categories</h3>
                {/* <button>slide</button> */}
            </div>
            <div className="categoryBottom">
                {data.map((item, index) => (
                    <div className='singleCat' key={index}>
                        <img src={item.imgUrl} alt="" />
                        <p>{item.title}</p>
                        <h2>{item.content}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category