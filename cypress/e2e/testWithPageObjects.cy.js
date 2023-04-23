import { onContactPage } from "../support/page_objects/contactPage.cy";
import { onHomePage } from "../support/page_objects/homePage.cy";
import { navigateTo } from "../support/page_objects/navigationPage.cy";
import { onReservationPage } from "../support/page_objects/reservationPage.cy";

describe('Test with page Objects',()=>{

beforeEach('open website',()=>{
    cy.openHomePage()
})

it('should fill contact form with fail data',()=>{
navigateTo.contactPage()
onContactPage.submitContactFormWithData('message','a','mail','sub')
})

it('should inspect number of image in gallery',()=>{
    navigateTo.homePage()
    onHomePage.inspectNumberOfImage()
})

it('link to varius websites',()=>{
navigateTo.reservationPage()
onReservationPage.linkToPhoneAndBooking()
onReservationPage.linkToFacebookAndInstagram()
})

})