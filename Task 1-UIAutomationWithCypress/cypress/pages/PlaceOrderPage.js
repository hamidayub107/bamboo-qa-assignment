class PlaceOrderPage {

    visitHomePage() {
        cy.visit('https://magento.softwaretestingboard.com/');
    }

    scrollToProductSection() {
        cy.get('.block.widget.block-products-list.grid').scrollIntoView();
    }

    selectProductByName(productName) {
        cy.contains('.product-item-link', productName).click();
    }

    selectSizeAndColor() {
        cy.get('div[option-label="S"]').click();  
        cy.get('div[option-label="Purple"]').click();  
    }

    addToCart() {
        cy.get('#product-addtocart-button').click();  
        cy.get('.message-success').should('be.visible');  
    }

    openMiniCart() {
        cy.get('.showcart').click();  
        cy.get('ol#mini-cart').should('be.visible');
    }

    getCartPricesAndValidate() {
        cy.get('ol#mini-cart').should('be.visible');
    
        let expectedTotal = 0;
    
        cy.get('ol#mini-cart .product .price').each(($el) => {
            const priceText = $el.text().replace('$', '').trim();
            const price = parseFloat(priceText);
            expectedTotal += price;
        }).then(() => {
            cy.get('.subtotal .price').invoke('text').then((subtotalText) => {
                const subtotal = parseFloat(subtotalText.replace('$', '').trim());
                expect(subtotal).to.eq(expectedTotal);
            });
        });
    }    

    proceedToCheckout() {
        cy.get('.checkout').click();  
        cy.url().should('include', '/checkout');  
    }
}

export default new PlaceOrderPage();