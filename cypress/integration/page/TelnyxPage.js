class TelnyxPage{
   

    clickTalkToAnExpertButton(){
        cy.get('[href="/contact-us"]').eq(0).click();
    }

    typeIntoEmailField(){
        cy.get('[type="email"]').type('sssss');
    }

    clickTryForFreeButton(){
        cy.get('body form div div button').click();
    }

    verifyThatPageDidNotChangeBecauseOfIncorrectEmail(){
        cy.url().should('eq', 'https://telnyx.com/');
    }

    scrollMidPageButtonIntoView(index){
        cy.get('body div div h3').eq(`${index}`).scrollIntoView();
    }

    clickMidPageButton(index){
        cy.get('body div div h3').eq(`${index}`).click();
    }

}

export default new TelnyxPage()