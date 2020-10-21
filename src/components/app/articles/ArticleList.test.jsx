import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ArticleList from './ArticleList';

describe('ArticleList', () => {
  afterEach(() => cleanup());
  it('renders ArticleList', () => {
    const { asFragment } = render(<ArticleList
      articles={[
        {
          title: 'Yo',
          author: 'It\'s',
          description: 'Lit'
        }
      ]}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
