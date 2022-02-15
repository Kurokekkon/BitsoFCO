

cy.Scenario1Helper = {
    // BitsoLogIn: () => {
    //     cy.get(LogInPageElements.EmailField).clear().type(LogInInfo.Email);
    //     cy.get(LogInPageElements.PasswordField).clear().type(LogInInfo.PWD,'{enter}');
    //     cy.get(LogInPageElements.LogInButton).click();
    // },

    findCurrencyByLable: (desiredCurrency) =>{
        cy.get(`label[for=${desiredCurrency}]`).click();
    },

    ValidaErrorMessage: (desiredCurrency) =>{

    },

}