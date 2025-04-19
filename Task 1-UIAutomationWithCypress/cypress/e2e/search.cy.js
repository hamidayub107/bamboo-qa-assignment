import SearchPage from '../pages/SearchPage';

describe('Product Search and Validation', () => {
  it('should search for a product and validate search results', () => {
    cy.visit('/');
    SearchPage.search('shirt');
    SearchPage.validateSearchResults('shirt');
  });
});