export class ReservationPage{

    linkToPhoneAndBooking(){
        cy.get('[class="single_finalcial_wrap"]').find('a').then(href=>{
        cy.wrap(href).eq(0).should('have.attr', 'href', 'https://www.booking.com/hotel/rs/brvnare-ala-vrdnik.sr.html')
        cy.wrap(href).eq(1).should('have.attr', 'href', 'mailto:bojandejic190@gmail.com')
        })
      }

    linkToFacebookAndInstagram(){
        cy.get('[class="socail_links"]').find('a').then(href=>{
        cy.wrap(href).eq(0).request(href.prop('href')).its('status').should('eq',200)
        cy.wrap(href).eq(1).request(href.prop('href')).its('status').should('eq',200)
        })
      }
    }
    export const onReservationPage=new ReservationPage()