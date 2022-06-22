/// <reference types="cypress" />

const { should } = require("chai")
import TelnyxPage from './page/TelnyxPage';
import TelnyxSignUpPage from './page/TelnyxSignUpPage';
import TelnyxFooter from './page/TelnyxFooter';
import footerProductLinks from './page/TelnyxFooter';
import footerPricingLinks from './page/TelnyxFooter';
import footerCompanyLinks from './page/TelnyxFooter';
import footerLinks from './page/TelnyxFooter';

context('Telnyx', () => {

    beforeEach(() => {
      cy.visit('https://telnyx.com/');
      cy.get('body')
  .then($body => {
    if ($body.find('[class="sc-5d3a275a-1 sc-5d3a275a-3 sc-5d3a275a-4 sc-5d3a275a-9 cSsJix fqfWHQ eUnEoi itIjRb"]').length) {
      cy.get('[class="sc-5d3a275a-1 sc-5d3a275a-3 sc-5d3a275a-4 sc-5d3a275a-9 cSsJix fqfWHQ eUnEoi itIjRb"]').click(); 
    }
    else{

    }
  })

    })
    
  
    describe('Redmine website bottom products menu', () => {

      
    Array.from(footerProductLinks).forEach(footerLink => {
      it(`Should test the footer products ${footerLink} Tab`, () =>{
          TelnyxFooter.verifyFooterLink(products, footerLink).contains(footerLink)
      });
     });

  Array.from(footerPricingLinks).forEach(footerLink => {
      it(`Should test the footer products ${footerLink} Tab`, () =>{
          TelnyxFooter.verifyFooterLink(pricing, footerLink).contains(footerLink)
      });
  });

  Array.from(footerCompanyLinks).forEach(footerLink => {
      it(`Should test the footer products ${footerLink} Tab`, () =>{
          TelnyxFooter.verifyFooterLink(company, footerLink).contains(footerLink)
      });
  });

  Array.from(footerLinks).forEach(footerLink => {
      it(`Should test the footer products ${footerLink} Tab`, () =>{
          TelnyxFooter.verifyFooterLink(footerLink).contains(footerLink)
      });
  });

     
    })

  
      describe('Redmine website SignUp page', () => {
        it('Should test bottom mission control menu Sign Up', () => {
          TelnyxFooter.clickFooterLinkSingle('sign-up');
          cy.get('body div h1').contains('Create a free account');
        })

        it('Should negative test Sign Up function with empty inputs', () => {
          TelnyxFooter.clickFooterLinkSingle('sign-up');
          TelnyxSignUpPage.pressCreateAccountButton();
          cy.get('#email_error').should('be.visible');
          cy.get('#full_name_error').should('be.visible');
        })

        it('Should negative test Sign Up function with correct inputs but without password', () => {
          TelnyxFooter.clickFooterLinkSingle('sign-up');
          TelnyxSignUpPage.inputEmailData('shivantesting@gmail.com');
          TelnyxSignUpPage.inputNameData('name');
          TelnyxSignUpPage.pressCreateAccountButton();
          cy.get('#password_requirements').should('be.visible');
        })

        it('Should negative test Sign Up function with incorrect email input data', () => {
          cy.get('footer [href="/sign-up"]').click();
          TelnyxSignUpPage.inputIncorrectEmailData()
          TelnyxSignUpPage.inputNameData('name');
          TelnyxSignUpPage.pressCreateAccountButton();
          cy.get('#email_error').should('be.visible');
          cy.get('#email_error').contains('enter a valid email address.')
        })
      })

      describe('Telnyx middle page buttons', () => {
        it('Should test Messaging API button', () => {
          TelnyxPage.scrollMidPageButtonIntoView(1)
          TelnyxPage.clickMidPageButton(1)
          cy.get('body h1').contains('SMS API');
       })

        it('Should test Video API button', () => {
          TelnyxPage.scrollMidPageButtonIntoView(2)
          TelnyxPage.clickMidPageButton(2)
          cy.get('body h1').contains('Build an integrated video solution');
       })

        it('Should test Wireless button', () => {
          TelnyxPage.scrollMidPageButtonIntoView(3)
          TelnyxPage.clickMidPageButton(3)
          cy.get('body h1').contains('IoT SIM Cards');
      })

        it('Should test Voice API button', () => {
          TelnyxPage.scrollMidPageButtonIntoView(4)
          TelnyxPage.clickMidPageButton(4)
          cy.get('body h1').contains('Voice API');
      })

        it('Should test Elastic SIP Trunk button', () => {
          TelnyxPage.scrollMidPageButtonIntoView(5)
          TelnyxPage.clickMidPageButton(5);
          cy.get('body h1').contains('SIP Trunks for ');
      })

        it('Should test Storage button', () => {
          TelnyxPage.scrollMidPageButtonIntoView(6)
          TelnyxPage.clickMidPageButton(6)
          cy.get('body h1').contains('Better cloud storage,');
      })
      })
})
