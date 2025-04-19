import WishlistPage from '../pages/WishlistPage';
import PlaceOrderPage from '../pages/PlaceOrderPage';

describe('Add Products to Wishlist and Checkout', () => {
  const wishlistPage = new WishlistPage();

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes("Cannot read properties of undefined") || 
          err.message.includes("AddFotoramaVideoEvents is not a function")) {
        return false;
      }
    });
  });
  
  it('should add product to wishlist and checkout from wishlist', () => {
    cy.login(Cypress.env('email'), Cypress.env('password'));
    cy.visit('/');
    PlaceOrderPage.scrollToProductSection();
    PlaceOrderPage.selectProductByName('Breathe-Easy Tank');
    PlaceOrderPage.selectSizeAndColor();
    wishlistPage.addToWishlist();
    wishlistPage.openWishlist();
    wishlistPage.addToCartFromWishlist('Breathe-Easy Tank');
    cy.wait(2000);
    wishlistPage.validateCart();
   });
});
