describe("Visit website", () => {
    it("should open website", () => {
        cy.visit('localhost:3000')
            .get('.App')
            .should('be.visible')
    })
    it("should contain the labelled button to add jobs", () => {
        cy.visit('localhost:3000')
            .get('.job-item-form-btn')
            .should('be.visible')
            .contains('Add a job item')
    })
    it("should contain a job list", () => {
        cy.visit('localhost:3000')
            .get('.job-list')
            .should('be.visible')
    })
    // add 'no data' or job list children visible
})

describe("Add a job item", () => {
    it("should show a job item form after user opening it", () => {
        cy.visit('localhost:3000')
            .get('.job-item-form-btn')
            .click()
            .get('.job-item-form')
            .should('be.visible')
    })
})