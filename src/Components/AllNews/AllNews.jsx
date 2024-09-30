import React, { useEffect, useState } from "react";
import "./AllNews.scss";
import News from "../News/News";

const AllNews = () => {
  const [page, setPage] = useState(10);
  const [data, setData] = useState([]);

  useEffect(() => {
    // const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&from=2024-07-30&to=2024-08-04&pageSize=${page}&apiKey=ea5917d0cd47457cba5c934abe3db484`;
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${"business"}&apiKey=ea5917d0cd47457cba5c934abe3db484&pageSize=${page}`;


    const fetchTheUrl = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    };
    fetchTheUrl();
  }, [page]);

  const handleLoadMore = () => {
    console.log(page);
    setPage((prevState) => prevState + 5);
  };

  const handleChange = () =>{

  }

  return (
    <div className="AllNews">
      <div style={{display : "flex", alignItems : "center" ,justifyContent : "space-between", width : "100%"}}>
        <h2 className="latesth2">The Latest</h2>
        {/* <DateRangePickerFilter onChange={handleChange}/> */}
      </div>
      {data?.articles?.map((item, index) => (
        <News key={index} item={item} />
      ))}
      <div className="loadmorebuttoncontainer">
        <button className="loadmorebutton" onClick={handleLoadMore}>
          LoadMore
        </button>
      </div>
    </div>
  );
};

export default AllNews;
