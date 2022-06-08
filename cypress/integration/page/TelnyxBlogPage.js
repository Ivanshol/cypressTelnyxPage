class TelnyxBlogPage{
    verifyBlogPage(){
        cy.get('[class="Text-sc-5o8owa-0 sc-23cf8fb7-2 clNvhv iUbuxV"]').contains('Blog');
    }
}

export default new TelnyxBlogPage()