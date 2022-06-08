class TelnyxWhatsAppAPIPage{
    verifyWhatsAppAPIPage(){
        cy.get('[class="sc-31ce2512-5 locIEM"] span').contains('WhatsApp');
    }
}

export default new TelnyxWhatsAppAPIPage()