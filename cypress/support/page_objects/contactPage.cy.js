export class ContactPage{

submitContactFormWithData(message,name,email,subject){
    cy.get('#contactForm').then(form=>{ 

        cy.wrap(form).find('#message').type(message);
        cy.wrap(form).find('#name').type(name)
        cy.wrap(form).find('#email').type(email)
        cy.wrap(form).find('#subject').type(subject)
        cy.wrap(form).find('#message').click()
        cy.contains('at least 20 characters').should('be.visible')
        cy.contains('your name must consist of at least 2 characters').should('be.visible')
        cy.contains('Please enter a valid email address.').should('be.visible')
        cy.contains('your subject must consist of at least 4 characters').should('be.visible')
    
    })
}

}
export const onContactPage=new ContactPage()