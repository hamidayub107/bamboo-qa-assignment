import RegistrationPage from '../pages/RegistrationPage';

describe('User Registration Flow', () => {
  it('should register a new user and validate login', () => {
    RegistrationPage.visit();
    const email = `test${Date.now()}@test.com`;
    RegistrationPage.fillForm('Test', 'User', email, 'Password123!');
    cy.contains('Thank you for registering').should('exist');
  });
});

