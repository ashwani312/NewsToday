import React from 'react'
import './News.scss'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addToFavList , resetCart } from '../../redux/newsReducer'

const News = ({ item }) => {
  const dispatch = useDispatch();
  const addToFav = () => {
    dispatch(addToFavList(item));
  }
  return (
    <div className='News'>
      <img src={item?.urlToImage === null ? "https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_1280.jpg" : item.urlToImage} alt="" />
      <div className="NewsContent">
        <h2>{item?.title}</h2>
        <p>{item?.content?.substring(0, 200)}</p>
        <div className="NewsDetails">
          <Link to={item?.url}>
            <button>readMore</button>
          </Link>
          <p>{new Date(item?.publishedAt).toDateString()}</p>
          <p>{item?.author === null ? "Unknown" : item?.author}</p>
          <button onClick={addToFav}>AddFav</button>
        </div>
      </div>
    </div>
  )
}

export default News