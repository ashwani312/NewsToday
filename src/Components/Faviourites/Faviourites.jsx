import React from 'react'
import { useSelector } from 'react-redux'
import News from '../News/News';
import './Faviourites.scss'



const Faviourites = () => {
  const data = useSelector(state => state.faviourite.fav);
  console.log(data?"chintu" : "montu")
  console.log(data)

  return (
    <div className='Faviourites'>
      <h2 className='catNewsHeading'>The Faviourites</h2>
      {(data?.map((item, index) => (
        <News key={index} item={item} />
      ))) }
      <div className="catNewsloadmorebuttoncontainer">
      </div>
    </div>
  )
}

export default Faviourites