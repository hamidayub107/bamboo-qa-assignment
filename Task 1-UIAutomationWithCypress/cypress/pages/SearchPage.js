class SearchPage {
  search(product) {
    cy.get('#search').type(`${product}{enter}`);
  }

  validateSearchResults(product) {
    cy.get('.products-grid .product-item').should('contain.text', product);
  }
}
export default new SearchPage();