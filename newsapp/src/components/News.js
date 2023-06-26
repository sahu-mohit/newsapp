import React, { Component } from "react";
import NewsItems from "./NewsItems";
import axios from "axios";

export default class News extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
    };
    // console.log("constructor"+ this.state.artical);
  }

  componentDidMount(props) {
    axios
      .get(
        // "https://gnews.io/api/v4/top-headlines?country=pk&lang=en&apikey=d123564b538f828838a90f39b3eed9fe"
        'https://newsapi.org/v2/top-headlines?country=in&apiKey=2d5d6108c52b4e7781b7c229d4679c0c&page=2'
      )
      .then((response) => {
        if (response.data.articles !== undefined) {
          this.setState({
            articles: response.data.articles
        })
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  prevviousButton = ()=>{
    console.log("previous");
  }

  nextButton = ()=>{
    console.log("");
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className="mb-4">Nayi khabarain AapTk</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 mb-4" key={element.url}>
                <NewsItems
                  title={
                    element.title === null ? "" : element.title.slice(0, 40)
                  }
                  // discription={element.description}
                  discription={
                    element.description === null
                      ? ""
                      : element.description.slice(0, 70) + "..."
                  }
                  imageurl={
                    element.image === null
                      ? "https://dnd2oi6izkvoi.cloudfront.net/2023/06/26/image/jpeg/84wjzircuaJQGuOM6jIrVmnutSiRz0CfxezGFF9S.jpg"
                      : element.image
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="row justify-content-between">
        <button type="button" className="col-auto btn btn-dark" onClick={this.prevviousButton}>&#8249; Prev</button>
        <button type="button" className="col-auto btn btn-dark" onClick={this.nextButton}>Next &#8250;</button>
        </div>
      </div>
    );
  }
}
