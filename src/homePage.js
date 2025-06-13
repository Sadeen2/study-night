// DO NOT CHANGE ANYTHING IN THIS FILE //
// This file is responsible for loading the Home page

// Import image for homepage using Parcel
import homePageImage from '../images/homePage.png';

// Import helper functions for element creation
import {
  createHeader,
  createElement,
  createImage,
} from './utilityRenderFunctions.js';

// Render the Home page content
const renderHomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = '';

  const header = createHeader('h1', 'Study Night', 'home_header');

  const subHeading = createElement(
    'h2',
    'A Digital Study Solution for the Modern World'
  );

  // Load image using Parcel
  const image = createImage(homePageImage, 'Desk of laptops');
  image.className = 'homeImage';

  const homeContainer = document.createElement('div');
  homeContainer.className = 'homeContainer';

  homeContainer.append(header, subHeading, image);
  main.append(homeContainer);
};

export { renderHomePage };
