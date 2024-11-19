class CreatePage {
    // Definir el campo de nombre de usuario usando XPath
    get createusernameField() {
      return cy.xpath('//input[@data-qa="signup-name"]');  // Asegúrate de que el XPath esté correcto
    }
  
    // Definir el campo de contraseña usando XPath
    get createpasswordField() {
      return cy.xpath('//input[@data-qa="signup-email"]');
    }
  
    // Definir el botón de login usando XPath
    get signupButton() {
      return cy.xpath('//button[@data-qa="signup-button"]');
    }

    //Definir checkbox Mr usando Xpath
    get checkBoxMale(){
      return cy.xpath('//input[@id="id_gender1"]')
    }


      //Definir checkbox Mr usando Xpath
      get password(){
        return cy.xpath('//input[@data-qa="password"]');
      }

      //Definir DayPicker usando Xpath
      get days(){
        return cy.xpath('//select[@data-qa="days"]');
      }

      //Definir MonthPicker usando Xpath
      get months(){
        return cy.xpath('//select[@data-qa="months"]');
      }

      //Definir YeatPicker usando Xpath
      get years(){
        return cy.xpath('//select[@data-qa="years"]');
      }
      
      //Definir firstName  usando Xpath
      get firstName(){
        return cy.xpath('//input[@data-qa="first_name"]');
      }      

      
      //Definir lastName  usando Xpath
      get lastName(){
        return cy.xpath('//input[@data-qa="last_name"]');
      } 
      
      //Definir lastName usando Xpath
      get address(){
        return cy.xpath('//input[@data-qa="address"]');
      }          

      //Definir country usando xpath
      get country(){
        return cy.xpath('//select[@data-qa="country"]');
      }

      //Definir state usando xpath   
      get state(){
        return cy.xpath('//input[@data-qa="state"]');
      }       
    
       //Definir city usando xpath  
      get city(){
        return cy.xpath('//input[@data-qa="city"]');
      }       
      

       //Definir zipcode usando xpath  
       get zipcode(){
        return cy.xpath('//input[@data-qa="zipcode"]');
      }       
      
       //Definir mobile usando xpath  
       get mobile(){
        return cy.xpath('//input[@data-qa="mobile_number"]');
      }     

       //Definir boton de crear cuenta usando xpath  
       get createAccount(){
        return cy.xpath('//button[@data-qa="create-account"]');
      }     

       //Definir elemento que comprueba que cuenta fue creada  
       get accountCreated(){
        return cy.xpath('//b[text()="Account Created!"]');
      }        

      
      
    // Método para visitar la página de login
    visit() {
      cy.visit('https://automationexercise.com/login');
    }
  
    // Método para realizar el login
    signup(username, password) {
      this.createusernameField.type(username);
      this.createpasswordField.type(password);
      this.signupButton.click();
      this.checkBoxMale.click();
    }

    //Metodo para llenar formulario
    fillForm( password, days, months, years, firstName, lastName, address, country, state, city, zipcode, mobile ){

      this.password.type(password);
      this.days.select('30');
      this.months.select('September');
      this.years.select('1994');
      this.firstName.type(firstName);
      this.lastName.type(lastName);
      this.address.type(address);
      this.country.select(5);
      this.state.type(state);
      this.city.type(city);
      this.zipcode.type(zipcode);
      this.mobile.type(mobile);
      this.createAccount.click();

    }

    //Metodo para comprobar si cuenta fue creada
    checkAccount(checkAccount){
      this.accountCreated.should('exist');
    }

  }
  
  export default new CreatePage();