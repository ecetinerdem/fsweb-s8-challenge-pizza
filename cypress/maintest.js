describe('reaching the main page', () => {
    it('finds the page and clicks the button', () => {
      cy.visit('http://localhost:5173/') 
  
      cy.contains('button', 'ACIKTIM').click()
    })
  })