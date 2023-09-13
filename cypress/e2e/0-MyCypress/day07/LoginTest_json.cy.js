///<reference types="Cypress" />
describe('Json ile Login Testi ', () => {
        before(function () {
            cy.fixture('qualitydemy').then(function(data){
                this.data=data
            })
            
        });

    it('Login testi', () => {
        cy.visit(this.data.url)
        cy.contains('log in',{matchCase:false}).click()

    });
});