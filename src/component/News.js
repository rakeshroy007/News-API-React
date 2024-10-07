import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
 
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)                
  const [totalResults, setTotalResults] = useState(0)
  

  const capitalizerFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const updateNews = async() => {

    props.setProgress(10)

    const { category, newsAPI, pageSize } = props;
    const { query } = props; 

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${newsAPI}&page=${page}&pageSize=${pageSize}`;

    if (query) {
      url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${newsAPI}&page=${page}&pageSize=${pageSize}`;
    }
    else if (category) {
      url = `https://newsapi.org/v2/top-headlines?category=${category}&country=${props.country}&apiKey=${newsAPI}&page=${page}&pageSize=${pageSize}`;
    }

                 
    setLoading(true)    
    let data = await fetch(url)
    props.setProgress(30)                
    let parseData = await data.json()
    props.setProgress(60)                 
    console.log(parseData)
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
    props.setProgress(100)                

  }

  useEffect(() => {
    document.title = `${capitalizerFirstLetter(props.category)} - NewsMonkey` 
    updateNews();
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    setPage(1);  
    updateNews();
}, [props.query]);


  const fetchMoreData = async () => {

    const { category, newsAPI, pageSize } = props;
    const { query } = props;

    setPage(page + 1)
    
    if (query) {
      var url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${newsAPI}&page=${page + 1}&pageSize=${pageSize}`;
    }
    else if(category){
      url = `https://newsapi.org/v2/top-headlines?category=${category}&country=${props.country}&apiKey=${newsAPI}&page=${page + 1}&pageSize=${pageSize}`;
    }

    setLoading(true)                   
    let data = await fetch(url)
    let parseData = await data.json()
    console.log(parseData)
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
    setLoading(false)
  };


  
    return (        
      <>
        <h1 className='text-center' style={{marginTop: '90px', marginBottom: '14px'}}>NewsMonkey - Top {capitalizerFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}         >

          <div className="container">
            <div className='row'>             
              {articles.map((element, index)=>{
                return <div className="col-md-4" key={index}>    
                  <NewsItem title={element.title ? element.title.slice(0, 33): " "} description={element.description ? element.description.slice(0, 77): "No Description Available"} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}  />
                </div>
              })}
            </div>
          </div>
          
          </InfiniteScroll>
      </>
    )
  }

News.defaultProps = {
  country: 'us',
  pageSize: 7,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
