class RegistrationPage {
  visit() {
    cy.visit('/customer/account/create/');
  }

  fillForm(firstName, lastName, email, password) {
    cy.get('#firstname').type(firstName);
    cy.get('#lastname').type(lastName);
    cy.get('#email_address').type(email);
    cy.get('#password').type(password);
    cy.get('#password-confirmation').type(password);
    cy.get('button[title="Create an Account"]').click();
  }
}
export default new RegistrationPage();
