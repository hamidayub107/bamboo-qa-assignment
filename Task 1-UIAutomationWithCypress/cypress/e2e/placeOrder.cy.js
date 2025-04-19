import PlaceOrderPage from '../pages/PlaceOrderPage';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Place Order with Multiple Products', () => {

    it('should add multiple products to cart from homepage', () => {

        cy.visit('/');
        PlaceOrderPage.scrollToProductSection();

        PlaceOrderPage.selectProductByName('Breathe-Easy Tank');
        PlaceOrderPage.selectSizeAndColor();
        PlaceOrderPage.addToCart();

        cy.go('back');
        PlaceOrderPage.scrollToProductSection();

        PlaceOrderPage.selectProductByName('Radiant Tee');
        PlaceOrderPage.selectSizeAndColor();
        PlaceOrderPage.addToCart();
        cy.wait(2000);
        PlaceOrderPage.openMiniCart();
        PlaceOrderPage.getCartPricesAndValidate();
        PlaceOrderPage.proceedToCheckout();

    });

});
