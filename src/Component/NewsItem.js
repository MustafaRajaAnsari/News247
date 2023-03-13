import React, { Component } from 'react'
import {Link} from "react-router-dom";
export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl, author, date} = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={!imageUrl?"https://assets-prd.ignimgs.com/2023/02/15/alienwarepresdaysale-1676490236893.jpg?width=1280":imageUrl} className="card-img-top" alt="Technical issues"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author?"Unknow":author} on {new Date(date).toGMTString()}</small></p>
                        <Link rel="noreferrer" to={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
