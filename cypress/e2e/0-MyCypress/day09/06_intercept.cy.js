describe('Intercept', () => {
    
    it('Test', () => {
        cy.visit('https://example.cypress.io/commands/waiting')
       // cy.intercept('GET','https://jsonplaceholder.cypress.io/comments/1')
        cy.intercept('GET','**/comments/**').as('getComment')
        //as --> daha sonra kullanılmak üzere değişken atıyor.
        //Atanan değişkeni @getComment seklinde çağrılıyor
        cy.get('.network-btn').click()
        cy.wait('@getComment').its('response').then(response=>{
            console.log(response)
            assert.equal(response.statusCode,200,'Status Code Controlled')
        })
    });
});