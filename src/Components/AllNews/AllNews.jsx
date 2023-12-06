import React, { useEffect, useState } from 'react'
import './AllNews.scss';
import useFetch from '../../hooks/useFetch';
import News from '../News/News';

const AllNews = ({ cat }) => {
    console.log(cat)
    const [page, setPage] = useState(5)
    const data = useFetch(page, cat);;
    console.log(data)

    const handleLoadMore = () => {
        setPage(prevState => prevState + 5);
    }

    return (
        <div className='AllNews'>
            <h2 className='latesth2'>The Latest</h2>
            {data?.articles.map((item, index) => (
                <News key={index} item={item} />
            ))}
            <button className='loadmorebutton' onClick={handleLoadMore}>LoadMore</button>
        </div>
    )
}

export default AllNews