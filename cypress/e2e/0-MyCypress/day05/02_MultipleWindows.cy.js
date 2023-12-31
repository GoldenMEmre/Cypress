///<reference types="Cypress" />
//1.Yol
describe('MultipleWindows', () => {
    it.skip('Attribute Remove', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.wait(2000)
        cy.get('.example > a').invoke('removeAttr','target').click()
        cy.get('h3').should('have.text','New Window') 

    });
//2.Yol
    it.only('New Url', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.wait(2000)
        cy.get('.example > a').then((element)=>{
            const newUrl=element.prop('href')
            cy.visit(newUrl)
            cy.get('h3').should('have.text','New Window')
        })
        
    });

});