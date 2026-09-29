import TestData from '../../utils/testData'
import UsersApi from '../../services/usersApi'
import LoginPage from '../../pages/LoginPage'
import ProductPage from '../../pages/ProductPage'
import AdminHomePage from '../../pages/AdminHomePage'
import ProductsListPage from '../../pages/ProductsListPage'

describe('Product Registration', () => {

    it('should register a product successfully as admin', () => {
        const admin = TestData.generateAdmin()
        const product = TestData.generateProduct()

        UsersApi.createUser(admin).then((response) => {
            expect(response.status).to.eq(201)

            LoginPage.visit()
            LoginPage.typeEmail(admin.email)
            LoginPage.typePassword(admin.password)
            LoginPage.submit()

            //assertions

            cy.url({ timeout: 10000 }).should('include', '/admin/home')
            cy.contains('Este é seu sistema para administrar seu ecommerce.')
                .should('be.visible')

            AdminHomePage.clickRegisterProduct()
            cy.url().should('include', '/admin/cadastrarprodutos')

            ProductPage.typeName(product.name)
            ProductPage.typePrice(product.price)
            ProductPage.typeDescription(product.description)
            ProductPage.typeQuantity(product.quantity)
            ProductPage.submit()

            cy.url().should('include', '/admin/listarprodutos')

            ProductsListPage.pageTitle()
                .should('be.visible')

            ProductsListPage.productRow(product.name)
                .should('be.visible')
                .within(() => {
                    cy.contains(String(product.price)).should('be.visible')
                    cy.contains(product.description).should('be.visible')
                    cy.contains(String(product.quantity)).should('be.visible')
                })
        })
    })

})