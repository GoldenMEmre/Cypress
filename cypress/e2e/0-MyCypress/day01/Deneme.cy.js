describe('a', () => {
    it('go base url', () => {
        cy.visit('/')
        
        
    });
    it('go amazon', () => {
        cy.visit('https://www.amazon.com/')  

    });
    it('go base url/about-us', () => {
        cy.visit('/about-us')
        
    });

    it('title assertion', () => {
        cy.visit('/')
        cy.title().should('eq','IT Bootcamp Courses, Online Classes - Wise Quarter Course')
        
    });
});