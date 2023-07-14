import React, { Component } from "react";
import NewsItems from "./NewsItems";
import axios from "axios";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export default class News extends Component {
  articles = [];

  static defaultProps = {
    country : "in",
    category : "general"
  }
  
  static propTypes = {
    country : PropTypes.string,
    category : PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading:true,
      country : "in",
    category : "general"
    };
  }
  async componentDidMount(props) {
    console.log(this.state.category);
  await axios
      .get(
        // `https://gnews.io/api/v4/top-headlines?country=in&lang=en&apikey=d123564b538f828838a90f39b3eed9fe&country=${this.category}`
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=2d5d6108c52b4e7781b7c229d4679c0c&country=${this.props.country}`
      )
      .then(
        (response) => {
        if (response.data.articles !== undefined) {
          this.setState({
            articles: response.data.articles,
            loading : false
        }
        )
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }


  render() {
    return (
      <div className="container my-3">
        <h2 className="mb-4 text-center">Nayi khabarain AapTk</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 mb-4" key={element.url}>
                <NewsItems
                  title={
                    element.title === null ? "" : element.title.slice(0, 40)
                  }
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
      </div>
    );
  }
}
