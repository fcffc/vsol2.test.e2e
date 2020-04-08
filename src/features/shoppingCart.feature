Feature: Add an item to cart

    As an user logged into Amazon Website
    I want to buy a product
    Because It it'll be good for me

    Background: Be logged into the site
        Given I access Amazon Website
        When I click to the login button
        And  I input my "fernanda.ferreira@nuvem.net" "20304050"
        And  I click to login

    Scenario: Adding items to the shopping cart
        When I found an item that I want to buy
        And I select the item
        And I add the item to the shopping cart
        And I add another item, but with diferent color to the shopping cart
        Then should see the information about the items that I've chosen