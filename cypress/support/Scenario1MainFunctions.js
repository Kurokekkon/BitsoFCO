
import {BasicConstantURLs} from "./BasicConstants";
import {DepositPopUpScreens, ErrorMessageEnglish, WalletPageElements} from "./Scenario1Constants"


cy.Scenario1MainFunctions = {


    DoAllWork: (myCurrenciesLabel, myWalletFundPath, myDepositModalBool) => {

        //Log into page
        //cy.BasicHelperBrowserFunctions.BitsoLogIn();

        //Validate correct URL
        cy.location('pathname').should('eq',BasicConstantURLs.BitsoWalletPath)

        //Not ideal, don´t like to use this but other waits
        //are  more complicated and  not able to be consistent in results,
        //will try to look for another way if possible.
        cy.wait(3000)

        //Click on desired currency to deposit
        cy.get(`label[for=${myCurrenciesLabel}]`).click()

        //click on deposit button for the selected currency
        //cy.get('.bdGJMw > .Container__StyledContainer-sc-1nmtyg4-0 > :nth-child(1)').click()
        cy.get(WalletPageElements.MainOperationsButtonsContainer).contains(WalletPageElements.DepositBtnEN).click()

        //Validate correct url extension using the WalletFundPath 
        cy.location('pathname').should('eq',myWalletFundPath)

        //Validate "we have multiple options to deposit" modal or not.
        //Would prefer if .get() had the ability to intercept or catch error when
        //assertion failed, could use that as condition inside the if, but seems 
        //it is not possible. 
        if(myDepositModalBool){
            //cy.log('Deposiy modal should be visible')
            cy.get(DepositPopUpScreens.depositOptions1).eq(0).click()
            cy.get('.ebqPit > .Typography__H3-qw5r90-2').should('have.text', ErrorMessageEnglish.ErrorLabelComplete)
        }
        else{
            //cy.log('Deposiy modal should not be visible')
            cy.get('.ebqPit > .Typography__H3-qw5r90-2').should('have.text', ErrorMessageEnglish.ErrorLabelComplete)
        }

        //This wait is mainly to be able to validate that 
        //the error message is there and quickly look at the assertion logs
        cy.wait(2000)

    }
}