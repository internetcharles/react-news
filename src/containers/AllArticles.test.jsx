import React from 'react';
import { render, screen } from '@testing-library/react';
import { getHeadlines } from '../services/news-api';
import AllArticles from './AllArticles';

jest.mock('../services/news-api.js');

describe('AllArticles container', () => {
  it('displays a list of articles', () => {
    getHeadlines.mockResolvedValue([
      {
        title: 'Man dies',
        author: 'John Doe',
        description: 'A guy died'
      }
    ]);

    render(<AllArticles />);

  });
});
