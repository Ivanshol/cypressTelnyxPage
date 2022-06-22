class TelnyxSignUpPage{
    verifySignUpPage(){
        cy.get('[class="Text-sc-5o8owa-0 sc-1e9319a3-4 gkWopw gjiitA"]').contains('Create a free account');
    }

    pressCreateAccountButton(){
        cy.get('[class="sc-5d3a275a-1 sc-5d3a275a-3 sc-5d3a275a-4 sc-5d3a275a-7 cSsJix fqfWHQ eUnEoi hBNXWZ"]').click();
    }

    verifyEmailErrorIsVisible(){
        cy.get('#email_error').should('be.visible');
    }

    verifyNameErrorIsVisible(){
        cy.get('#full_name_error').should('be.visible');
    }

    inputIncorrectEmailData(){
        cy.get('#email').type('incorrect');
    }

    verifyIncorrectEmailDataIsRecognized(){
        cy.get('#email_error').should('be.visible');
        cy.get('#email_error').contains('enter a valid email address.')
    }

    inputEmailData(email){
        cy.get('#email').type(email);
    }

    inputNameData(name){
        cy.get('#full_name').type(name);
    }

    verifyPasswordRequirementsAreVisible(){
        cy.get('#password_requirements').should('be.visible');
    }
}

export default new TelnyxSignUpPage()
