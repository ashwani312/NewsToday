import { useEffect, useState } from "react";


const useFetch = (page, category) => {
    console.log(category)
    const [cat, setCat] = useState(category===undefined? "business" : category);
    const [data, setData] = useState();
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=a7f4eca04e0348e4ae022f197e05d730&pageSize=${page}`;

    useEffect(() => {
        const fetchTheUrl = async () => {
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
        }
        fetchTheUrl()
    }, [cat]);

    return(data);
}
export default useFetch;