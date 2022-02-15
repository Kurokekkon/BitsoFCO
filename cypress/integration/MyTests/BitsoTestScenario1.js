/// <reference types="Cypress" />
import {BasicConstantURLs} from "../../support/BasicConstants";
import {CurrenciesLabel, BTCData, ETHData, BCHData, XRPData, MANAData} from "../../support/Scenario1Constants";

var TestData = [
    [CurrenciesLabel.Bitcoin, BTCData.WalletFundPath, BTCData.DepositModal],
    [CurrenciesLabel.Ether, ETHData.WalletFundPath, ETHData.DepositModal],
    [CurrenciesLabel.BitcoinCash, BCHData.WalletFundPath, BCHData.DepositModal],
    [CurrenciesLabel.XRP, XRPData.WalletFundPath, XRPData.DepositModal],
    [CurrenciesLabel.Mana, MANAData.WalletFundPath, MANAData.DepositModal]
  ];

describe('Scenario 1', function(){
    
    beforeEach(() => {
        cy.BasicHelperBrowserFunctions.GoToPage(BasicConstantURLs.BitsoLogin);
        cy.BasicHelperBrowserFunctions.BitsoLogIn();

    })

    it('Scenario 1 BTC', function() {
       cy.Scenario1MainFunctions.DoAllWork(TestData[0][0], TestData[0][1], TestData[0][2])
    })

    it('Scenario 1 ETH', function() {
        cy.Scenario1MainFunctions.DoAllWork(TestData[1][0], TestData[1][1], TestData[1][2])
     })

     it('Scenario 1 BCH', function() {
 
        cy.Scenario1MainFunctions.DoAllWork(TestData[2][0], TestData[2][1], TestData[2][2])
 
     })

     it('Scenario 1 DAI', function() {
 
        cy.Scenario1MainFunctions.DoAllWork(TestData[3][0], TestData[3][1], TestData[3][2])
 
     })

     it('Scenario 1 XRP', function() {
 
        cy.Scenario1MainFunctions.DoAllWork(TestData[3][0], TestData[3][1], TestData[3][2])
 
     })

     it('Scenario 1 MANA', function() {
 
        cy.Scenario1MainFunctions.DoAllWork(TestData[3][0], TestData[3][1], TestData[3][2])
 
     })

})