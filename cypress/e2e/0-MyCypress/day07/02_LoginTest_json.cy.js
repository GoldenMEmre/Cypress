///<reference types="Cypress" />
/*
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
Hocanın yukarıdaki kodları çalışmadı. ChatCPT'nin aşağıdaki kodları çalıştı. Yukarıdaki sorun fixture'daki url'e
ulaşılamaması. Bunun sebebi de data'yı aynı isimle yazıp this ile çağırması. 
*/

describe('Json ile Login Testi', () => {
    let data; // Define data outside before hook
  
    before(function () {
      cy.fixture('qualitydemy').then(function (fixtureData) {
        data = fixtureData; // Assign fixtureData to the data variable
      });
    });
  
    it('Login testi', () => {
      cy.visit(data.url);
      cy.contains('log in', { matchCase: false }).click();
    });
  });
  