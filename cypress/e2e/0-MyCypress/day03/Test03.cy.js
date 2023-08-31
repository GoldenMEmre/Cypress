describe('Locate Almada Fonksiyon İşlemi', () => {
    it('', () => {
        cy.visit('http://www.automationexercise.com') 
        
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click() 
        
        //1.yol
        cy.get('.login-form > h2').should('include.text','Login')

        //2.yol
       // cy.get('.login-form > h2').then(textcontrol =>{
        //    expect(textcontrol.text()).to.contains('Login')
       // })
    });
});