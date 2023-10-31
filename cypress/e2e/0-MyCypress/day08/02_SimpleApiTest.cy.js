describe('Api Assertion', () => {

    it('Api Assertion1', () => {
        cy.request('https://jsonplaceholder.cypress.io/comments')
        .its('headers').its('date').should('include','Tue, 31 Oct 2023 ')
        
        
    });
    it('Api Assertion 2', () => {
        cy.request({
            url:'https://jsonplaceholder.cypress.io/comments',
            method:'GET'
        }).its('headers').its('date').should('include','Tue, 31 Oct 2023 ')
        
    });
    it('Api Assertion 3', () => {
        cy.request('https://jsonplaceholder.cypress.io/comments')
        .its('status').should('eq',200)
        
    });
});