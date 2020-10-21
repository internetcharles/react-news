export const getHeadlines = () => {
  // eslint-disable-next-line max-len
  return fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=d5303225693c46b0a9280a4a55f0911f')
    .then(res => res.json())
    .then(json => json.articles.map(article => ({
      title: article.title,
      author: article.author,
      description: article.description
    })));
};

export const searchArticles = (query) => {
  // eslint-disable-next-line max-len
  return fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=d5303225693c46b0a9280a4a55f0911f`)
    .then(res => res.json())
    .then(json => json.articles.map(article => ({
      title: article.title,
      author: article.author,
      description: article.description
    })));
};

