import React from 'react';
import { render } from '@testing-library/react-native';
import { TechnologyScreen, ScienceScreen } from '../src/screens';

describe('Starting initial tests', () => {

  it('should exist the SearchButton in TechnologyScreen', () => {
    const page = render(<TechnologyScreen />);
    const searchButtonTechnology = page.getByTestId('searchButton');
  });

  it('should exist the SearchButton in ScienceScreen', () => {
    const page = render(<ScienceScreen />);
    const searchButtonScience = page.getByTestId('searchButton');
  });

});
