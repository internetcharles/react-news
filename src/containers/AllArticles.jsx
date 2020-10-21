import React, { Component } from 'react';
import { getHeadlines } from '../services/news-api';

export default class AllArticles extends Component {

  state = {
    articles: []
  }

  componentDidMount = async() => {
    // await getHeadlines()
    //   .then(articles => {
    //     this.setState({ articles });
    //   });
  }

  render() {
    return (
      <div>
        Hi
      </div>
    );
  }
}
