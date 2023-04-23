
export class navigationPage{

homePage(){
    cy.contains('En').click()
}

contactPage(){
    cy.contains('En').click()
    cy.contains('Contact').click()
}

reservationPage(){
    cy.contains('En').click()
    cy.contains('Reservations').click()
}

}
export const navigateTo=new navigationPage()