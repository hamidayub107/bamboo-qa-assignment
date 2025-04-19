Cypress.Commands.add('login', (email, password) => {
    cy.visit('/customer/account/login/');
    cy.get('#email').type(email);
    cy.get('#pass').type(password);
    cy.get('#send2').click();
  });