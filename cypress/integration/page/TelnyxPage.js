class TelnyxPage{
   

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
    
    scrollMidPageButtonIntoView(index){
        cy.get('[class="sc-3e56386e-5 eVSvvX"]').eq(`${index}`).scrollIntoView();
    }

    clickMidPageButton(index){
        cy.get('[class="sc-3e56386e-5 eVSvvX"]').eq(`${index}`).click();
    }

}

export default new TelnyxPage()