import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('Controls component', () => {
  afterEach(() => cleanup());

  it('renders Controls', () => {
    const { asFragment } = render(<SearchBar 
      query="Test Query"
      onChange={() => {}}
      onClick={() => {}}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
