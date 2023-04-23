export class homePage{

inspectNumberOfImage(){
    cy.get('[alt="brvnareAlaVrdnik5"]').click()
    cy.get('.mfp-counter').should('contain','1 of 8')
    cy.get('[class="mfp-arrow mfp-arrow-right mfp-prevent-close"]').click()
    cy.get('.mfp-counter').should('contain','2 of 8')
}

}
export const onHomePage =new homePage()