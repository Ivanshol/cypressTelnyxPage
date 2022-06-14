/// <reference types="cypress" />

const { should } = require("chai")
import TelnyxPage from './page/TelnyxPage';
import TelnyxSignUpPage from './page/TelnyxSignUpPage';
import TelnyxContactUsPage from './page/TelnyxContactUsPage';
import TelnyxFooter from './page/TelnyxFooter';

context('Telnyx', () => {

    beforeEach(() => {
      cy.visit('https://telnyx.com/');
      if(cy.get('[class="sc-5d3a275a-1 sc-5d3a275a-3 sc-5d3a275a-4 sc-5d3a275a-9 cSsJix fqfWHQ eUnEoi itIjRb"]').should('be.visible')){
        cy.get('[class="sc-5d3a275a-1 sc-5d3a275a-3 sc-5d3a275a-4 sc-5d3a275a-9 cSsJix fqfWHQ eUnEoi itIjRb"]').click(); 
      }
      else{

      }

    })
    
  
    describe('Redmine website bottom products menu', () => {

      it('Should test bottom products menu Trunks Tab', () => {
        TelnyxFooter.clickFooterLink(products, sip-trunks, 2);
        cy.get('[class="sc-31ce2512-5 locIEM"] strong').contains('SIP Trunks for ');
      })

      
      it('Should test footer menu Voice API Tab', () => {
        TelnyxFooter.clickFooterLink(products, voice-api, 2);
        cy.get('[class="sc-31ce2512-5 locIEM"] span').contains('Voice API');
      })


      it('Should test bottom products menu SMS API Tab', () => {
        TelnyxFooter.clickFooterLink(products, sms-api, 2);
        cy.get('[class="sc-31ce2512-5 locIEM"] span').contains('SMS API');
      })


      it('Should test bottom products menu WhatsApp API Tab', () => {
        TelnyxFooter.clickFooterLink(products, whatsapp-api, 0);
        cy.get('[class="sc-31ce2512-5 locIEM"] span').contains('WhatsApp');
      })

      it('Should test bottom products menu Secure Faxing Tab', () => {
        TelnyxFooter.clickFooterLink(products, fax-api, 0);
        cy.get('[class="sc-31ce2512-5 locIEM"] span').contains('Programmable Fax API');
      })

      it('Should test bottom products menu IoT Tab', () => {
        TelnyxFooter.clickFooterLink(products, iot-sim-card, 2);
        cy.get('[class="sc-31ce2512-5 locIEM"] span').contains('IoT SIM Cards');
      })


      it('Should test bottom products menu Number Lookup Tab', () => {
        TelnyxFooter.clickFooterLink(number-lookup, 1);
        cy.get('[class="sc-31ce2512-5 locIEM"] span').contains('Phone Number Lookup');
      })

      it('Should test bottom products menu Global Numbers Tab', () => {
        TelnyxFooter.clickFooterLink(products, phone-numbers, 1);
        cy.get('[class="sc-31ce2512-5 locIEM"] span').contains('Get phone numbers on demand.');
      })

      it('Should test bottom products menu  Verify API Tab', () => {
        TelnyxFooter.clickFooterLink(products, verify-api, 0);
        cy.get('[class="sc-31ce2512-5 locIEM"] span').contains('Verify API:');
      })

      it('Should test bottom products menu  See All Products Tab', () => {
        TelnyxFooter.clickFooterLink(products, 2);
        cy.get('[class="Text-sc-5o8owa-0 sc-ce3c78c4-2 clNvhv juvWNo"]').contains('Products');
      })
    })

    describe('Redmine website bottom Resources menu', () => {
  
        it('Should test bottom products menu  Blog Tab', () => {
          TelnyxFooter.clickFooterLink(resources, 1);
          cy.get('[class="Text-sc-5o8owa-0 sc-23cf8fb7-2 clNvhv iUbuxV"]').contains('Blog');
        })

        it('Should test bottom products menu  Resource Hub Tab', () => {
          TelnyxFooter.clickFooterLink(learn, 0);
          cy.get('[class="Text-sc-5o8owa-0 sc-5160b4a4-2 clNvhv eafIwD"]').contains('Resource');
        })

        it('Should test bottom products menu  Release notes Tab', () => {
          TelnyxFooter.clickFooterLink(release-notes, 0);
          cy.get('[class="Text-sc-5o8owa-0 sc-ce6dc8c9-2 gkWopw dbaFpf"]').contains('Release');
        })
      })

      describe('Redmine website bottom Pricing menu', () => {
        
        it('Should test bottom pricing menu SIP Trunking Pricing Tab', () => {
          TelnyxFooter.clickFooterLink(pricing, elastic-sip, 1);
          cy.get('[class="Text-sc-5o8owa-0 sc-9480303f-2 clNvhv hWGRnZ"] span').contains('Trunk Pricing');
        })

        
        it('Should test bottom pricing menu SMS API Pricing Tab', () => {
          TelnyxFooter.clickFooterLink(pricing, messaging, 1);
          cy.get('[class="Text-sc-5o8owa-0 sc-9480303f-2 clNvhv hWGRnZ"] span').contains('Messaging Pricing');
        })

        
        it('Should test bottom pricing menu Voice API Pricing Tab', () => {
          TelnyxFooter.clickFooterLink(pricing, call-control, 1);
          cy.get('[class="Text-sc-5o8owa-0 sc-9480303f-2 clNvhv hWGRnZ"] span').contains('API Pricing');
        })

        
        it('Should test bottom pricing menu Wireless Pricing Tab', () => {
          TelnyxFooter.clickFooterLink(pricing, wireless-pricing, 1);
          cy.get('[class="Text-sc-5o8owa-0 sc-9480303f-2 clNvhv hWGRnZ"] span').contains('SIM Card & Data Pricing');
        })

      })

      describe('Redmine website bottom Company menu', () => {
        it('Should test bottom company menu About Us Tab', () => {
          TelnyxFooter.clickFooterLink(company, about, 0);
          cy.get('[class="Text-sc-5o8owa-0 sc-f6d2e4fb-4 czgqGc dCnMZf"]').contains('About Us');
        })

        it('Should test bottom company menu Careers Tab', () => {
          TelnyxFooter.clickFooterLink(company, careers, 1);
          cy.get('[class="Text-sc-5o8owa-0 sc-f6d2e4fb-4 czgqGc dCnMZf"]').contains('careers at telnyx');
        })

        it('Should test bottom company menu Data And Privacy Tab', () => {
          TelnyxFooter.clickFooterLink(company, data-privacy, 1);
          cy.get('[class="sc-31ce2512-5 locIEM"] span').contains('Data & Privacy');
        })

        it('Should test bottom company menu Report Abuse Tab', () => {
          TelnyxFooter.clickFooterLink(report-abuse, 0);
          cy.get('[class="Text-sc-5o8owa-0 sc-256d2eeb-1 gkWopw gRMPsA"]').contains('Report Abuse');
        })

        it('Should test bottom company menu Privacy Policy Tab', () => {
          TelnyxFooter.clickFooterLink(privacy-policy, 0);
          cy.get('[class="Text-sc-5o8owa-0 sc-d8f5e61f-1 gkWopw"]').contains('Privacy Policy')
        })

        it('Should test bottom company menu Cookie Policy Tab', () => {
          TelnyxFooter.clickFooterLink(cookie-policy, 0);
          cy.get('[class="Text-sc-5o8owa-0 sc-d8f5e61f-1 gkWopw"]').contains('Cookie Policy');
        })

        it('Should test bottom company menu Acceptable Use Policy Tab', () => {
          TelnyxFooter.clickFooterLink(acceptable-use-policy, 0);
          cy.get('[class="Text-sc-5o8owa-0 sc-d8f5e61f-1 gkWopw"]').contains('ACCEPTABLE USE POLICY');
        })

        it('Should test bottom company menu Website Terms And Conditions Tab', () => {
          TelnyxFooter.clickFooterLink(terms-and-conditions, 0);
          cy.get('[class="Text-sc-5o8owa-0 sc-d8f5e61f-1 gkWopw"]').contains('Terms and Conditions');
        })
      })

      describe('Redmine website SignUp page', () => {
        it('Should test bottom mission control menu Sign Up', () => {
          TelnyxFooter.clickFooterLink(sign-up, 4);
          cy.get('[class="Text-sc-5o8owa-0 sc-1e9319a3-4 gkWopw gjiitA"]').contains('Create a free account');
        })

        it('Should negative test Sign Up function with empty inputs', () => {
          TelnyxFooter.clickFooterLink(sign-up, 4);
          TelnyxSignUpPage.pressCreateAccountButton();
          cy.get('#email_error').should('be.visible');
          cy.get('#full_name_error').should('be.visible');
        })

        it('Should negative test Sign Up function with correct inputs but without password', () => {
          TelnyxFooter.clickFooterLink(sign-up, 4);
          TelnyxSignUpPage.inputCorrectEmailData();
          TelnyxSignUpPage.inputNameData();
          TelnyxSignUpPage.pressCreateAccountButton();
          cy.get('#password_requirements').should('be.visible');
        })

        it('Should negative test Sign Up function with incorrect email input data', () => {
          TelnyxFooter.clickFooterLink(sign-up, 4);
          TelnyxSignUpPage.inputIncorrectEmailData()
          TelnyxSignUpPage.inputNameData();
          TelnyxSignUpPage.pressCreateAccountButton();
          cy.get('#email_error').should('be.visible');
          cy.get('#email_error').contains('enter a valid email address.')
        })
      })

      describe('Telnyx website Talk to an Expert page', () => {
        it('Should negative test Talk to an expert page function with empty data', () => {
        TelnyxPage.clickTalkToAnExpertButton();
        TelnyxContactUsPage.submitContactReasons();
        cy.url().should('eq', 'https://telnyx.com/contact-us');
        })
      })

      describe('Telnyx middle page buttons', () => {
        it('Should test Messaging API button', () => {
          TelnyxPage.scrollMidPageButtonIntoView(0)
          TelnyxPage.clickMidPageButton(0)
          cy.get('[class="sc-31ce2512-5 locIEM"] span').contains('SMS API');
       })

        it('Should test Video API button', () => {
          TelnyxPage.scrollMidPageButtonIntoView(1)
          TelnyxPage.clickMidPageButton(1)
          cy.get('[class="sc-31ce2512-5 locIEM"] span').contains('Build an integrated video solution');
       })

        it('Should test Wireless button', () => {
          TelnyxPage.scrollMidPageButtonIntoView(2)
          TelnyxPage.clickMidPageButton(2)
          cy.get('[class="sc-31ce2512-5 locIEM"] span').contains('IoT SIM Cards');
      })

        it('Should test Voice API button', () => {
          TelnyxPage.scrollMidPageButtonIntoView(3)
          TelnyxPage.clickMidPageButton(3)
          cy.get('[class="sc-31ce2512-5 locIEM"] span').contains('Voice API');
      })

        it('Should test Elastic SIP Trunk button', () => {
          TelnyxPage.scrollMidPageButtonIntoView(4)
          TelnyxPage.clickMidPageButton(4);
          cy.get('[class="sc-31ce2512-5 locIEM"] strong').contains('SIP Trunks for ');
      })

        it('Should test Storage button', () => {
          TelnyxPage.scrollMidPageButtonIntoView(5)
          TelnyxPage.clickMidPageButton(5)
          cy.get('[class="sc-31ce2512-5 locIEM"] span').contains('Better cloud storage,');
      })
      })
})