import React, { Component } from 'react';
import ArticleList from '../components/app/articles/ArticleList';
import SearchBar from '../components/app/search/SearchBar';
import { getHeadlines, searchArticles } from '../services/news-api';

export default class AllArticles extends Component {

  state = {
    articles: [],
    query: ''
  }

  componentDidMount = async() => {
    await getHeadlines()
      .then(articles => {
        this.setState({ articles });
      });
  }

  handleSubmit = async() => {
    await searchArticles(this.state.query)
      .then(articles => {
        this.setState({ articles });
      });
  }

  handleChange = ({ target }) => {
    this.setState({ query: target.value });
  }

  render() {
    const { articles } = this.state;
    return (
      <>
        <SearchBar 
          onChange={this.handleChange} 
          onClick={this.handleSubmit} 
        />
        <ArticleList articles={articles} />
      </>
    );
  }
}
