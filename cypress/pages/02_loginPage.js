class LoginPage {
    // Definir el campo de nombre de usuario usando XPath
    get usernameField() {
      return cy.xpath('//input[@data-qa="login-email"]');  // Asegúrate de que el XPath esté correcto
    }
  
    // Definir el campo de contraseña usando XPath
    get passwordField() {
      return cy.xpath('//input[@data-qa="login-password"]');
    }
  
    // Definir el botón de login usando XPath
    get loginButton() {
      return cy.xpath('//button[text()="Login"]');
    }

    get buttonDelete(){
      return cy.xpath('//a[text()=" Delete Account"]');
    }

    get buttonConfirm(){
      return cy.xpath('//a[@data-qa="continue-button"]');
    }
  
    // Método para visitar la página de login
    visit() {
      cy.visit('https://automationexercise.com/login');
    }
  
    // Método para realizar el login
    login(username, password) {
      this.usernameField.type(username);
      this.passwordField.type(password);
      this.loginButton.click();
    }

    //Metodo para borrar cuenta
    deleteAccount(buttonDelete,buttonConfirm){
      this.buttonDelete.click();
      this.buttonConfirm.click();

    }
  }
  
  export default new LoginPage();