import React from 'react'

const NewsItem = (props) => {

  
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0 }}>         
          <span className="badge rounded-pill bg-danger" style={{left: '90%',zIndex: '1'}}>
            {source}
          </span>                  
          </div>
        <img src={imageUrl ? imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC_13ebLeTd0rsVIplte6zH-EEqleIiGuw6A&s"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title?title:"No Title"}... </h5>  
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-success">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>           
          <a href={newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>   
        </div>
      </div>
      </div >
    )
  
}

export default NewsItem
