import React, { useEffect, useState } from 'react'
import AllNews from '../../Components/AllNews/AllNews'
import Category from '../../Components/Category/Category'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Home.scss'
import { useParams } from 'react-router-dom'
const Home = () => {
  const params = useParams();

  console.log(params.cat)

  return (
    <div className='home'>
      <Category />
      <div className="newsandsidebar">
        <AllNews cat = {params.cat}/>
        <Sidebar />
      </div>
    </div>
  )
}

export default Home