/// <reference types="Cypress" />

import {BasicConstantURLs} from "../../support/BasicConstants";
import {Relationship, PinErrorMessage} from "../../support/Scenario2Constants";

describe('Scenario 2', function(){

    beforeEach(() => {
        cy.BasicHelperBrowserFunctions.GoToPage(BasicConstantURLs.BitsoLogin);

    })

    it('Scenario 2', function() {
        ////Log into bitso page
        cy.BasicHelperBrowserFunctions.BitsoLogIn();

        ///////////////Navigate to User Profile///////////////////////////////////////////////////
        cy.Scenario2MainFunctions.GoToUserProfile();
        /////////////////Navigate to User Profile///////////////////////////////////////////////////


        // ///////////////Add Beneficiaries////////////////////////////
        cy.Scenario2MainFunctions.GoToAddBeneficiaries();
        // ///////////////Add Beneficiaries////////////////////////////

        
        /////////////////Adding Name on name field/////////////////
        cy.Scenario2MainFunctions.FillFistName();
        /////////////////Adding Name on name field/////////////////

        
        /////////////////Adding Last name field/////////////////
        cy.Scenario2MainFunctions.FillLastName();
        /////////////////Adding Last name field/////////////////


        /////////////////Adding Second Last Name on field/////////////////
        cy.Scenario2MainFunctions.FillSecondLastName();
        /////////////////Adding Second Last Name on field/////////////////


        ///////////////Birthday///////////////
        cy.Scenario2MainFunctions.FillBirthday();
        ///////////////Birthday///////////////


        //////////////Relationship//////////////
        cy.Scenario2MainFunctions.selectKinshin(Relationship.Acquaintance);
        //////////////Relationship//////////////

        //////////////Percentage//////////////
        cy.Scenario2MainFunctions.selectBeneficiariePercentage();
        //////////////Percentage//////////////

        /////////////Pin Input Field/////////
        //cy.get(`input[name=pin]`).click().type(cy.Scenario2Helper.getRandomInt(0,15)+'{enter}');
        cy.Scenario2MainFunctions.FillPIN();
        /////////////Pin Input Field/////////

        /////////////Validate Error Message////////
        //Depending on the number of attempts message can change from 
        //incorrect pin' to 'too many attempts', that is why I have defined
        //2 constants, one for each message. Right now I'm unable to know beforehand
        //wich message to expect, a function could be created to find that out and easily
        //decide which message string pass to below function to properly assert
        cy.Scenario2MainFunctions.ValidatePinErrorMessage(PinErrorMessage.IncorrectPin);
        /////////////Validate Error Message////////
    })


})