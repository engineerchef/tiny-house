import React from 'react';
import { storiesOf } from '@storybook/react';
import ListingsComponent from './ListingsComponent';

let listingItems = [
  {
    rent: 500,
    dimensions: 300,
    coordinates: 'Berkeley, CA',
    date: 'September 23, 2017',
    amenities: 'washer/dryer, water hose, compost/recycling/trash bins'
    //   imagePath: '//via.placeholder.com/300x200'
  },
  {
    rent: 400,
    dimensions: 500,
    coordinates: 'Oakland, CA',
    date: 'October 3, 2017',
    amenities: 'water hose, compost/recycling/trash bins'
    //   imagePath: '//via.placeholder.com/300x200'
  }
];

storiesOf('ListingsComponent', module).add('happy path', () =>
  <ListingsComponent listingItems={listingItems} />
);
