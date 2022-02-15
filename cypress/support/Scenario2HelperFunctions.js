const months_Array = ['January', 'February','March','April','May','June','July','August','September','October','November','December',]
import {OverviewLeftMenuOptions,AddBeneficiariesFormElements,ConfimrBeneficiaryElements} from "./Scenario2Constants";
import {TopMenuPersistentElements} from "./BasicConstants";

cy.Scenario2Helper = {

    getRandomInt:(min, max) =>{
        return Math.floor(Math.random() * (max - min)) + min;
    },

    getRandomString:(length) =>{
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var result = '';
        for ( var i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    },

    randomDate:(start, end) =>{
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    },

    randomMonth:(intMonth) =>{
        return months_Array[intMonth];
    },

    FillAddBeneficiarieFormElement:(my_formElement, myValue) =>{
        //cy.get('input[name = day]').parent().click().type(dateDay + '{enter}');
        cy.get(AddBeneficiariesFormElements.Main1 + my_formElement + AddBeneficiariesFormElements.Main2)
        .parent()
        .click()
        .type(myValue + '{enter}');
    },

    FillConfirmBeneficiarieFormElement:(my_formElement, myValue) =>{
        cy.get(ConfimrBeneficiaryElements.InputMain1 + my_formElement + ConfimrBeneficiaryElements.InputMain2)
        .parent()
        .click()
        .type(myValue + '{enter}');
    },

    selectfromOverviewLeftMenu:(OptionToSelect) => {
        cy.get(OverviewLeftMenuOptions.LeftManuMain1 + OptionToSelect + OverviewLeftMenuOptions.LeftManuMain2).click();
    },

    SelectFromPersistentProfileMenu:(my_Option) => {
        //First click on the Profile Button to open drop down
        cy.get(TopMenuPersistentElements.ProfileMainButton).click();
        //Select desired option from drop down
        cy.get(TopMenuPersistentElements.ProfileDropDownElementType).contains(my_Option).click();
    }

}