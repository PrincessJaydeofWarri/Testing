describe('Use mortgage calculator', function(){

  function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

  it('visit URL', function(){

    cy.visit('https://www.developherj.com/')


  })
  it('click on Work icon', function(){
    cy.get('#calculator').click();
    //work click on this

})
it('Click on Property Price', function(){

  cy.get('#propertyPrice').click()
  cy.get('#propertyPrice').type('50000');

  cy.get('#deposit').click()
  cy.get('#deposit').type('50000');

  cy.get('#repayment').click()
  cy.get('#repayment').type('25');

  cy.get('#interest').click()
  cy.get('#interest').type('2.4');



})
  it('Calculate Property Price', function(){
    cy.get('#calculate').click()
  })
})
