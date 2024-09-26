const { When, Then } = require('@wdio/cucumber-framework');

const ContactFormPage = require('../pageobjects/contact.page');

const    contactFormPage = new ContactFormPage();


When('I fill out the contact form with the following details', async (usersTable) => {

    const users = usersTable.hashes();

    for (const user of users) {
        await contactFormPage.fillContactForm(user);
    }

});

When('I submit the form', async () => {

    await contactFormPage.submitForm();
   

});

Then('the How Heard About Us check is required', async () => {

    const labelColor = await contactFormPage.getElementColor(contactFormPage.howHeardAboutUsLabel);
    console.log(labelColor);

    await expect(labelColor).toBe('#ff4d40');
});



