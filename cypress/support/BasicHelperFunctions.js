import {BasicConstantURLs,LogInPageElements,LogInInfo} from "./BasicConstants";

cy.BasicHelperBrowserFunctions = {

    GoToPage: (desiredURL) => {

        cy.visit(desiredURL);

    },

    BitsoLogIn: () => {
        cy.get(LogInPageElements.EmailField).clear().type(LogInInfo.Email);
        cy.get(LogInPageElements.PasswordField).clear().type(LogInInfo.PWD,'{enter}');
        cy.get(LogInPageElements.LogInButton).click();
    },

    ValidatePageByURL: (ExpectedURL) => {

        cy.url().then(($url) => {
            if($url == ExpectedURL){
                cy.log('inside if: ', $url);
                return true;
            }
            else{
                cy.log('inside elseeee: ', $url);
                return false;
            }
        })
    },


    ClickOnElement: (DesiredElement) => {
        cy.get(DesiredElement).should('be.visible').click();
    }
}