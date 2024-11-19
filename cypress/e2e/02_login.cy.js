import LoginPage from '../pages/02_loginPage';

describe('Login test and delete account', () => {
  it('Visita pagina', () => {
    // Visitar la página de login
    LoginPage.visit();
    
    // Usar el método login del POM para hacer login
    LoginPage.login('seb.vidalv@gmail.com', '123456');

    // Usar el metodo para borrar cuenta
    LoginPage.deleteAccount('','');
    
    // Comprueba que se vuelva al inicio de pagina
    cy.url().should('include', 'automationexercise.com/');
  });
});