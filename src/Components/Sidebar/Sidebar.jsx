import React from 'react'
import './Sidebar.scss'
import useFetch from '../../hooks/useFetch'
const Sidebar = () => {
  const page = 5;
  const data = useFetch(page)
  return (
    <div className='Sidebar'>

      <h2>On Treding &#128293;</h2>
      <div className="sidebarTrending">
        <div className="sidebarPosts">
          {data?.articles.map((item, index) => (
            <div key={index} className='sidebarPost'>
              <div className="sidebarPostLeft">
                #{index + 1}
              </div>
              <div className="sidebarPostRight">
                <h2>{item?.title?.substring(0, 100)}</h2>
                <div>
                  <p>{new Date(item?.publishedAt).getHours()} Hour Ago</p>
                  <p>{item?.author === null ? "Unknown" : item?.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sidebarPopular">
        <h2>Popular Posts</h2>
        <div className="sidebarPopularposts">
          {data?.articles.map((item, index) => (
            <div key={index}>
              <img src={item?.urlToImage === null ? "https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_1280.jpg" : item.urlToImage} alt="" />
              <h2>{item?.title?.substring(0, 80)}...</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar