class TelnyxSignUpPage{
    pressCreateAccountButton(){
        cy.get('body form div div button').eq(1).click();
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