// DO NOT CHANGE ANYTHING IN THIS FILE //
// This file is responsible for the navigation menu and the initial loading of the project.

// These are all the functions that render the pages
import { renderCardSetsPage } from './cardSetsPage.js';
import { renderAboutPage } from './aboutPage.js';
import { renderHomePage } from './homePage.js';

// Navigation logic
const addListenerToNavigation = () => {
  addNavListener('cardSetPage', renderCardSetsPage);
  addNavListener('aboutPage', renderAboutPage);
  addNavListener('homePage', renderHomePage);
};

// Helper function to add event listeners to navigation items
const addNavListener = (elementId, callback) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.addEventListener('click', callback);
  }
};

// Initialize the page
renderHomePage();
addListenerToNavigation();

// Safe form handling
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('createSetForm');
  const input = document.getElementById('setName');
  const message = document.getElementById('message');

  if (form && input && message) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (input.value.trim() === '') {
        message.textContent = 'This field is required';
        message.style.color = 'red';
      } else {
        message.textContent = 'Set created';
        message.style.color = 'green';
        form.reset();
      }
    });
  }
});
