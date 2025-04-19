class WishlistPage {

  addToWishlist() {
    cy.get('.product-item').first().find('.towishlist').click();
  }

  openWishlist() {
    cy.visit('/wishlist/')
  }  

  addToCartFromWishlist(productName) {
    cy.get('ol[class="product-items"]').first().click();
    cy.get('div[option-label="28"]').click();
    cy.get('div[option-label="Gray"]').click(); 
    cy.get('#product-addtocart-button').click();  
    cy.get('.message-success').should('be.visible');  
  }

  validateCart() {
    cy.get('.showcart').click();
    cy.get('ol#mini-cart').should('be.visible');  }
}

export default WishlistPage;
