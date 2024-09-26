const { Given, When, Then } = require('@wdio/cucumber-framework');

const HomePage = require('../pageobjects/home.page');

const homePage = new HomePage();


Given('I am on the Epam home page', async () => {
    await homePage.open();

});

When('I click on the services menu option', async () => {
    await homePage.servicesLink.click();
});

Then('I should see {string} title', async (expectedTitle) => {
    await expect(browser).toHaveTitle(expectedTitle);
});

When('I click on the contact button', async () => {
    await homePage.contactUSLink.click();
});

Then('I should see {int} services', async (expectServices) => {

    const displayedServices = await homePage.displayedServices;

    await expect(displayedServices).toBeElementsArrayOfSize(expectServices);
});



