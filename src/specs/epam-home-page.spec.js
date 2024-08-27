
describe("www.epam.com test suite",()=>{
    
        it('should open www.epam.com',async ()=>{
            const expectedTitle = "EPAM | Software Engineering & Product Development Services";

            await browser.url('/');
            await browser.maximizeWindow();
            console.log(await browser.getTitle());

            await expect(browser).toHaveTitle(expectedTitle);
            await expect(browser).toHaveUrl('https://www.epam.com/');
        }),
        it('should open the hamburger menu and count the menu options',async ()=>{
            const expectedMenuOptions = 5;

            await $('.hamburger-menu__button').click();
            const hamburgerMenuOptions = await $$('.hamburger-menu__item.item--collapsed');
            
            await expect(hamburgerMenuOptions).toBeElementsArrayOfSize(expectedMenuOptions);    
        }),
        it('should open the CONTACT US information',async ()=>{
            const contactUSLink = await $('//div/a[@data-gtm-category="header-contact-cta"]');
            const contactUsLabel = await $('//span[text()="Contact Us"]');

            await contactUSLink.click();

            await expect(contactUsLabel).toBeDisplayed();

        }),
        it("should list the Epam's services",async ()=>{

            const servicesLink = await $('span.top-navigation__item-text a[href="/services"]');
            const servicesList = await $$('ul[class="buttons-list"] li');

            servicesLink.click();
            const expectedServices = [
                'STRATEGY',
                'ENGINEERING',
                'Cloud',
                'CYBERSECURITY',
                'Data & Analytics',
                'CX+',
                'Artificial Intelligence'];
         
            await expect(servicesList).toBeElementsArrayOfSize(expectedServices.length);
            await expect(servicesList).toHaveText(expectedServices);       

        });

});