import CreatePage from  '../pages/01_createPage'

describe('signUp Test and fill form', () => {
    it('Crea cuenta nueva', () => {
      // Visitar la página de login
      CreatePage.visit();
      
      // Usar el método signup del POM para llenar primeros campos
      CreatePage.signup('Sebastian', 'seb.vidalv@gmail.com');

      //Usar el metodo fillForm del POM para llenar form final
      CreatePage.fillForm('123456','30','','','Sebastian','Vidal','Auckland','','Auckland','Auckland','1010','+6402902215712');
      
      //Check si cuenta fue creada
      CreatePage.checkAccount('');

      // Comprueba si cuenta fue creada
      cy.url().should('include', 'account_created');
    });
  });