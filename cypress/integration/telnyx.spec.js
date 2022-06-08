/// <reference types="cypress" />

const { should } = require("chai")
import TelnyxPage from './page/TelnyxPage';
import TelnyxAboutUsPage from './page/TelnyxAboutUsPage';
import TelnyxAcceptableUsePolicyPage from './page/TelnyxAcceptableUsePolicyPage';
import TelnyxBlogPage from './page/TelnyxBlogPage';
import TelnyxCareersPage from './page/TelnyxCareersPage';
import TelnyxCellularIoTPage from './page/TelnyxCellularIoTPage';
import TelnyxCookiePolicyPage from './page/TelnyxCookiePolicyPage';
import TelnyxDataAndPrivacyPage from './page/TelnyxDataAndPrivacyPage';
import TelnyxElasticSIPTrunkingPage from './page/TelnyxElasticSIPTrunkingPage';
import TelnyxGlobalNumbersPage from './page/TelnyxGlobalNumbersPage';
import TelnyxNumberLookupPage from './page/TelnyxNumberLookupPage';
import TelnyxPrivacyPolicyPage from './page/TelnyxPrivacyPolicyPage';
import TelnyxProgrammableSMSPage from './page/TelnyxProgrammableSMSPage';
import TelnyxReleaseNotesPage from './page/TelnyxReleaseNotesPage';
import TelnyxReportAbusePage from './page/TelnyxReportAbusePage';
import TelnyxResourceHubPage from './page/TelnyxResourceHubPage';
import TelnyxSecureFaxingPage from './page/TelnyxSecureFaxingPage';
import TelnyxSeeAllProductsPage from './page/TelnyxSeeAllProductsPage';
import TelnyxSignUpPage from './page/TelnyxSignUpPage';
import TelnyxSIPTrunkingPricingPage from './page/TelnyxSIPTrunkingPricingPage';
import TelnyxSMSAPIPricingPage from './page/TelnyxSMSAPIPricingPage';
import TelnyxVerifyAPIPage from './page/TelnyxVerifyAPIPage';
import TelnyxVoiceAPIPage from './page/TelnyxVoiceAPIPage';
import TelnyxWebsiteTermsAndConditionsPage from './page/TelnyxWebsiteTermsAndConditionsPage';
import TelnyxWhatsAppAPIPage from './page/TelnyxWhatsAppAPIPage';
import TelnyxWirelessPricingPage from './page/TelnyxWirelessPricingPage';
import TelnyxVoiceAPIPricingPage from './page/TelnyxVoiceAPIPricingPage';
import TelnyxContactUsPage from './page/TelnyxContactUsPage';
import TelnyxVideoAPIPage from './page/TelnyxVideoAPIPage';
import TelnyxStoragePage from './page/TelnyxStoragePage';

context('Telnyx', () => {

    beforeEach(() => {
      cy.visit('https://telnyx.com/');
        //cy.get('[class="sc-5d3a275a-1 sc-5d3a275a-3 sc-5d3a275a-4 sc-5d3a275a-9 cSsJix fqfWHQ eUnEoi itIjRb"]').click(); 

    })
    
  
    describe('Redmine website bottom products menu', () => {

      it('Should test bottom products menu Trunks Tab', () => {
        TelnyxPage.clickBottomMenuTrunksTab();
        TelnyxElasticSIPTrunkingPage.verifySIPTrunkingPage();
      })

      
      xit('Should test bottom products menu Voice API Tab', () => {
        TelnyxPage.clickBottomMenuVoiceAPITab();
        TelnyxVoiceAPIPage.verifyVoiceAPIPage();
      })


      xit('Should test bottom products menu SMS API Tab', () => {
        TelnyxPage.clickBottomMenuProgrammableSMSTab();
        TelnyxProgrammableSMSPage.verifyProgrammableSMSPage();
      })


      xit('Should test bottom products menu WhatsApp API Tab', () => {
        TelnyxPage.clickBottomMenuWhatsAppAPITab();
        TelnyxWhatsAppAPIPage.verifyWhatsAppAPIPage();
      })

      xit('Should test bottom products menu Secure Faxing Tab', () => {
        TelnyxPage.clickBottomMenuSecureFaxingTab();
        TelnyxSecureFaxingPage.verifySecureFaxingPage();
      })

      xit('Should test bottom products menu IoT Tab', () => {
        TelnyxPage.clickBottomMenuCellularIoTTab();
        TelnyxCellularIoTPage.verifyCellularIoTPage();
      })


      xit('Should test bottom products menu Number Lookup Tab', () => {
        TelnyxPage.clickBottomMenuNumberLookupTab();
        TelnyxNumberLookupPage.verifyNumberLookupPage();
      })

      xit('Should test bottom products menu Global Numbers Tab', () => {
        TelnyxPage.clickBottomMenuGlobalNumbersTab();
        TelnyxGlobalNumbersPage.verifyGlobalNumbersPage();
      })

      xit('Should test bottom products menu  Verify API Tab', () => {
        TelnyxPage.clickBottomMenuVerifyAPITab();
        TelnyxVerifyAPIPage.verifyVerifyAPIPage();
      })

      xit('Should test bottom products menu  See All Products Tab', () => {
        TelnyxPage.clickBottomMenuAllProductsTab();
        TelnyxSeeAllProductsPage.verifySeeAllProductsPage();
      })
    })

    describe('Redmine website bottom Resources menu', () => {
  
        xit('Should test bottom products menu  Blog Tab', () => {
          TelnyxPage.clickBottomMenuBlogTab();
          TelnyxBlogPage.verifyBlogPage();
        })

        xit('Should test bottom products menu  Resource Hub Tab', () => {
          TelnyxPage.clickBottomMenuResourceHubTab();
          TelnyxResourceHubPage.verifyResourceHubPage();
        })

        xit('Should test bottom products menu  Release notes Tab', () => {
          TelnyxPage.clickBottomMenuReleaseNotesTab();
          TelnyxReleaseNotesPage.verifyReleaseNotesPage();
        })
      })

      describe('Redmine website bottom Pricing menu', () => {
        
        xit('Should test bottom pricing menu SIP Trunking Pricing Tab', () => {
          TelnyxPage.clickBottomMenuTrunkingPricingTab();
          TelnyxSIPTrunkingPricingPage.verifySIPTrunkingPricingPage();
        })

        
        xit('Should test bottom pricing menu SMS API Pricing Tab', () => {
          TelnyxPage.clickBottomMenuSMSPricingTab();
          TelnyxSMSAPIPricingPage.verifySMSAPIPricingPage();
        })

        
        xit('Should test bottom pricing menu Voice API Pricing Tab', () => {
          TelnyxPage.clickBottomMenuVoiceAPIPricingTab();
          TelnyxVoiceAPIPricingPage.verifyVoiceAPIPricingPage();
        })

        
        xit('Should test bottom pricing menu Wireless Pricing Tab', () => {
          TelnyxPage.clickBottomMenuWirelessPricingTab();
          TelnyxWirelessPricingPage.verifyWirelessPricingPage();
        })

      })

      describe('Redmine website bottom Company menu', () => {
        xit('Should test bottom company menu About Us Tab', () => {
          TelnyxPage.clickBottomMenuAboutUsTab();
          TelnyxAboutUsPage.verifyAboutUsPage();
        })

        xit('Should test bottom company menu Careers Tab', () => {
          TelnyxPage.clickBottomMenuCareersTab();
          TelnyxCareersPage.verifyCareersPage();
        })

        xit('Should test bottom company menu Data And Privacy Tab', () => {
          TelnyxPage.clickBottomMenuDataAndPrivacyTab();
          TelnyxDataAndPrivacyPage.verifyDataAndPrivacyPage();
        })

        xit('Should test bottom company menu Report Abuse Tab', () => {
          TelnyxPage.clickBottomMenuReportAbuseTab();
          TelnyxReportAbusePage.verifyReportAbusePage();
        })

        xit('Should test bottom company menu Privacy Policy Tab', () => {
          TelnyxPage.clickBottomMenuPrivacyPolicyTab();
          TelnyxPrivacyPolicyPage.verifyPrivacyPolicyPage();
        })

        xit('Should test bottom company menu Cookie Policy Tab', () => {
          TelnyxPage.clickBottomMenuCookiePolicyTab();
          TelnyxCookiePolicyPage.verifyCookiePolicyPage();
        })

        xit('Should test bottom company menu Acceptable Use Policy Tab', () => {
          TelnyxPage.clickBottomMenuAcceptableUsePolicyTab();
          TelnyxAcceptableUsePolicyPage.verifyAcceptableUsePolicyPage();
        })

        xit('Should test bottom company menu Website Terms And Conditions Tab', () => {
          TelnyxPage.clickBottomMenuWebsiteTermsTab();
          TelnyxWebsiteTermsAndConditionsPage.verifyWebsiteTermsAndConditionsPage();
        })
      })

      describe('Redmine website SignUp page', () => {
        xit('Should test bottom mission control menu Sign Up', () => {
          TelnyxPage.clickBottomMenuSigntUpTab();
          TelnyxSignUpPage.verifySignUpPage();
        })

        xit('Should negative test Sign Up function with empty inputs', () => {
          TelnyxPage.clickBottomMenuSigntUpTab();
          TelnyxSignUpPage.pressCreateAccountButton();
          TelnyxSignUpPage.verifyEmailErrorIsVisible();;
          TelnyxSignUpPage.verifyNameErrorIsVisible();
        })

        xit('Should negative test Sign Up function with correct inputs but without password', () => {
          TelnyxPage.clickBottomMenuSigntUpTab();
          TelnyxSignUpPage.inputCorrectEmailData();
          TelnyxSignUpPage.inputNameData();
          TelnyxSignUpPage.pressCreateAccountButton();
          TelnyxSignUpPage.verifyPasswordRequirementsAreVisible();
        })

        xit('Should negative test Sign Up function with incorrect email input data', () => {
          TelnyxPage.clickBottomMenuSigntUpTab();
          TelnyxSignUpPage.inputIncorrectEmailData()
          TelnyxSignUpPage.inputNameData();
          TelnyxSignUpPage.pressCreateAccountButton();
          TelnyxSignUpPage.verifyIncorrectEmailDataIsRecognized();
        })
      })

      describe('Telnyx website Talk to an Expert page', () => {
        xit('Should negative test Talk to an expert page function with empty data', () => {
        TelnyxPage.clickTalkToAnExpertButton();
        TelnyxContactUsPage.submitContactReasons();
        TelnyxContactUsPage.verifyPageDidNotChangeWithEmptyInputs();
        })
      })

      describe('Telnyx middle page buttons', () => {
        xit('Should test Messaging API button', () => {
          TelnyxPage.scrollMessagingAPIButtonIntoView();
          TelnyxPage.clickMessagingAPIButtonOnTheMiddleOfThePage();
          TelnyxProgrammableSMSPage.verifyProgrammableSMSPage();
       })

        xit('Should test Video API button', () => {
          TelnyxPage.scrollVideoAPIButtonIntoView()
          TelnyxPage.clickVideoAPIButtonOnTheMiddleOfThePage();
          TelnyxVideoAPIPage.verifyVideoAPIPage();
       })

        xit('Should test Wireless button', () => {
          TelnyxPage.scrollWirelessButtonIntoView();
          TelnyxPage.clickWirelessButtonOnTheMiddleOfThePage();
          TelnyxCellularIoTPage.verifyCellularIoTPage();
      })

        xit('Should test Voice API button', () => {
          TelnyxPage.scrollVoiceAPIButtonIntoView();
          TelnyxPage.clickVoiceAPIButtonOnTheMiddleOfThePage();
          TelnyxVoiceAPIPage.verifyVoiceAPIPage();
      })

        xit('Should test Elastic SIP Trunk button', () => {
          TelnyxPage.scrollElasticSIPTrunkButtonIntoView();
          TelnyxPage.clickElasticSIPTrunkButtonOnTheMiddleOfThePage();
          TelnyxElasticSIPTrunkingPage.verifySIPTrunkingPage();
      })

        xit('Should test Storage button', () => {
          TelnyxPage.scrollStorageButtonIntoView();
          TelnyxPage.clickStorageButtonOnTheMiddleOfThePage();
          TelnyxStoragePage.verifyStoragePage();
      })
      })
})