import {OverviewLeftMenuOptions, BeneficiariesScreenElements, AddBeneficiariesFormElements,
    ConfimrBeneficiaryElements} from "./Scenario2Constants";
import {TopMenuPersistentElements} from "./BasicConstants";

cy.Scenario2MainFunctions = {

    FillFistName:() =>{

        ////generating random number for First Name Lenght
        var myNum = cy.Scenario2Helper.getRandomInt(9,17); 
        ////generating random First Name
        var myFirstName = cy.Scenario2Helper.getRandomString(myNum);

        cy.get(AddBeneficiariesFormElements.FirstName).type(myFirstName);
    },

    FillLastName:() =>{

        ////generating random number for Last Name Lenght
        var myNum = cy.Scenario2Helper.getRandomInt(9,17); 
        ////generating random Last Name
        var myLastName = cy.Scenario2Helper.getRandomString(myNum);

        cy.get(AddBeneficiariesFormElements.LastName).type(myLastName);
    },

    FillSecondLastName:() =>{

        ////generating random number for Second Last Name Lenght
        var myNum = cy.Scenario2Helper.getRandomInt(9,17); 
        ////generating random Second Last Name
        var mySecondLastName = cy.Scenario2Helper.getRandomString(myNum);

        cy.get(AddBeneficiariesFormElements.SecondLastName).type(mySecondLastName);
    },

    FillBirthday:() =>{
        var dateYear = cy.Scenario2Helper.getRandomInt(1933,2022); 
        var dateMonth = cy.Scenario2Helper.randomMonth(cy.Scenario2Helper.getRandomInt(1,12));
        var dateDay = 0;
        if(dateMonth == 'February'){
            dateDay = cy.Scenario2Helper.getRandomInt(1,28);
        }else{
            dateDay = cy.Scenario2Helper.getRandomInt(1,30);
        }
        
        ////I know, it would be more fancy and maybe complete
        ////if I can click on drop down and then select from option
        ////in visible drop down. Will try to da that if time allows it.
        cy.Scenario2Helper.FillAddBeneficiarieFormElement(AddBeneficiariesFormElements.day, dateDay);
        cy.Scenario2Helper.FillAddBeneficiarieFormElement(AddBeneficiariesFormElements.month, dateMonth);
        cy.Scenario2Helper.FillAddBeneficiarieFormElement(AddBeneficiariesFormElements.year, dateYear);
        
    },

    selectKinshin:(my_relationship) =>{
        var downKeyStrokes = ''

        for(var i = 0; i < my_relationship; i++){
            downKeyStrokes += '{downarrow}';
        }

        cy.Scenario2Helper.FillAddBeneficiarieFormElement(AddBeneficiariesFormElements.relationship, downKeyStrokes);

    },

    selectBeneficiariePercentage:() => {
        //added as var instead of directly into paramenters of type()
        //only to make it more easy to read
        var my_Percentage = cy.Scenario2Helper.getRandomInt(0,15);
        cy.get(AddBeneficiariesFormElements.BenefitPercentage).type(my_Percentage +'{enter}');
    },

    FillPIN:() => {
        //added as var instead of directly into paramenters of type()
        //only to make it more easy to read
        var my_PIN = cy.Scenario2Helper.getRandomInt(0,15)
        
        cy.Scenario2Helper.FillConfirmBeneficiarieFormElement(ConfimrBeneficiaryElements.PINField, my_PIN);
    },

    GoToUserProfile:() => {
        //Navigate to option from Profile drop down on top right corner
        cy.Scenario2Helper.SelectFromPersistentProfileMenu(TopMenuPersistentElements.Profile);

        ////Another way of doing this is forcing the URL to go to desired screen. 
        ////Wich one is better?
        //cy.BasicHelperBrowserFunctions.GoToPage('https://stage.bitso.com/r/user/beneficiaries/add');        
    },

    ValidatePinErrorMessage:(expectedPINErrorMessage) => {
        cy.get('.styles__Message-a4dq6g-2').should((elem) => {
            expect(elem.text()).to.equal(expectedPINErrorMessage);
            expect(elem).to.be.visible;
        })
    },

    GoToAddBeneficiaries:() =>{
        ////Click on 'BENEFICIARIES' from the left panel
        cy.Scenario2Helper.selectfromOverviewLeftMenu(OverviewLeftMenuOptions.Beneficiaries);

        ////click on 'Add' button to add beneficiarie       
        cy.BasicHelperBrowserFunctions.ClickOnElement(BeneficiariesScreenElements.AddButton);
    }
}