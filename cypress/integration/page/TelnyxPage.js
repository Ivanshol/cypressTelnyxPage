class TelnyxPage{
    clickBottomMenuTrunksTab(){
        cy.get('[class="sc-6c41f57a-0 gvobTR"]').eq(0).scrollIntoView().click();
    }

    clickBottomMenuVoiceAPITab(){
        cy.get('[class="sc-6c41f57a-0 gvobTR"]').eq(1).scrollIntoView().click();
    }

    clickBottomMenuProgrammableSMSTab(){
        cy.get('[class="sc-6c41f57a-0 gvobTR"]').eq(2).scrollIntoView().click();
    }

    clickBottomMenuWhatsAppAPITab(){
        cy.get('[class="sc-6c41f57a-0 gvobTR"]').eq(3).scrollIntoView().click();
    }

    clickBottomMenuSecureFaxingTab(){
        cy.get('[class="sc-6c41f57a-0 gvobTR"]').eq(4).scrollIntoView().click();
    }

    clickBottomMenuCellularIoTTab(){
        cy.get('[class="sc-6c41f57a-0 gvobTR"]').eq(5).scrollIntoView().click();
    }

    clickBottomMenuNumberLookupTab(){
        cy.get('[class="sc-6c41f57a-0 gvobTR"]').eq(6).scrollIntoView().click();
    }

    clickBottomMenuGlobalNumbersTab(){
        cy.get('[class="sc-6c41f57a-0 gvobTR"]').eq(7).scrollIntoView().click();
    }

    clickBottomMenuVerifyAPITab(){
        cy.get('[class="sc-6c41f57a-0 gvobTR"]').eq(8).scrollIntoView().click();
    }

    clickBottomMenuAllProductsTab(){
        cy.get('[class="sc-6c41f57a-0 gvobTR"]').eq(9).scrollIntoView().click();
    }

    clickBottomMenuBlogTab(){
        cy.get('[class="sc-6c41f57a-0 gvobTR"]').eq(11).scrollIntoView().click();
    }

    clickBottomMenuResourceHubTab(){
        cy.get('[class="sc-6c41f57a-0 gvobTR"]').eq(12).scrollIntoView().click();
    }

    clickBottomMenuReleaseNotesTab(){
        cy.get('[class="sc-6c41f57a-0 gvobTR"]').eq(13).scrollIntoView().click();
    }

    clickBottomMenuTrunkingPricingTab(){
        cy.get('[class="sc-6c41f57a-0 gvobTR"]').eq(14).scrollIntoView().click();
    }

    clickBottomMenuSMSPricingTab(){
        cy.get('[class="sc-6c41f57a-0 gvobTR"]').eq(15).scrollIntoView().click();
    }

    clickBottomMenuVoiceAPIPricingTab(){
        cy.get('[class="sc-6c41f57a-0 gvobTR"]').eq(16).scrollIntoView().click();
    }

    clickBottomMenuWirelessPricingTab(){
        cy.get('[class="sc-6c41f57a-0 gvobTR"]').eq(17).scrollIntoView().click();
    }

    clickBottomMenuAboutUsTab(){
        cy.get('[class="sc-6c41f57a-0 gvobTR"]').eq(18).scrollIntoView().click();
    }

    clickBottomMenuCareersTab(){
        cy.get('[class="sc-6c41f57a-0 gvobTR"]').eq(19).scrollIntoView().click();
    }

    clickBottomMenuDataAndPrivacyTab(){
        cy.get('[class="sc-6c41f57a-0 gvobTR"]').eq(20).scrollIntoView().click();
    }

    clickBottomMenuReportAbuseTab(){
        cy.get('[class="sc-6c41f57a-0 gvobTR"]').eq(22).scrollIntoView().click();
    }

    clickBottomMenuPrivacyPolicyTab(){
        cy.get('[class="sc-6c41f57a-0 gvobTR"]').eq(23).scrollIntoView().click();
    }

    clickBottomMenuCookiePolicyTab(){
        cy.get('[class="sc-6c41f57a-0 gvobTR"]').eq(24).scrollIntoView().click();
    }

    clickBottomMenuAcceptableUsePolicyTab(){
        cy.get('[class="sc-6c41f57a-0 gvobTR"]').eq(25).scrollIntoView().click();
    }

    clickBottomMenuWebsiteTermsTab(){
        cy.get('[class="sc-6c41f57a-0 gvobTR"]').eq(26).scrollIntoView().click();
    }

    clickBottomMenuSigntUpTab(){
        cy.get('[class="sc-6c41f57a-0 gvobTR"]').eq(28).scrollIntoView().click();
    }

    clickTalkToAnExpertButton(){
        cy.get('[href="/contact-us"]').eq(0).click();
    }

    typeIntoEmailField(){
        cy.get('[type="email"]').type('sssss');
    }

    clickTryForFreeButton(){
        cy.get('[class="sc-5d3a275a-2 krPznm"]').click();
    }

    verifyThatPageDidNotChangeBecauseOfIncorrectEmail(){
        cy.url().should('eq', 'https://telnyx.com/');
    }
    
    scrollMessagingAPIButtonIntoView(){
        cy.get('[class="sc-3e56386e-5 eVSvvX"]').eq(0).click();
    }

    scrollVideoAPIButtonIntoView(){
        cy.get('[class="sc-3e56386e-5 eVSvvX"]').eq(1).click();
    }

    scrollWirelessButtonIntoView(){
        cy.get('[class="sc-3e56386e-5 eVSvvX"]').eq(2).click();
    }

    scrollVoiceAPIButtonIntoView(){
        cy.get('[class="sc-3e56386e-5 eVSvvX"]').eq(3).click();
    }

    scrollElasticSIPTrunkButtonIntoView(){
        cy.get('[class="sc-3e56386e-5 eVSvvX"]').eq(4).click();
    }

    scrollStorageButtonIntoView(){
        cy.get('[class="sc-3e56386e-5 eVSvvX"]').eq(5).click();
    }

    clickMessagingAPIButtonOnTheMiddleOfThePage(){
        cy.get('[class="sc-3e56386e-5 eVSvvX"]').eq(0).click();
    }

    clickVideoAPIButtonOnTheMiddleOfThePage(){
        cy.get('[class="sc-3e56386e-5 eVSvvX"]').eq(1).click();
    }

    clickWirelessButtonOnTheMiddleOfThePage(){
        cy.get('[class="sc-3e56386e-5 eVSvvX"]').eq(2).click();
    }

    clickVoiceAPIButtonOnTheMiddleOfThePage(){
        cy.get('[class="sc-3e56386e-5 eVSvvX"]').eq(3).click();
    }

    clickElasticSIPTrunkButtonOnTheMiddleOfThePage(){
        cy.get('[class="sc-3e56386e-5 eVSvvX"]').eq(4).click();
    }

    clickStorageButtonOnTheMiddleOfThePage(){
        cy.get('[class="sc-3e56386e-5 eVSvvX"]').eq(5).click();
    }
}

export default new TelnyxPage()