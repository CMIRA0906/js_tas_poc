
describe("www.epam.com test suite",()=>{
   
        it('should open www.epam.com and verify title and URL',async ()=>{
            const expectedTitle = "EPAM | Software Engineering & Product Development Services";
            const expectedUrl = 'https://www.epam.com/';

            await browser.url('/');

            await browser.maximizeWindow();

            await expect(browser).toHaveTitle(expectedTitle);

            await expect(browser).toHaveUrl(expectedUrl);
        }),
        it('should open the hamburger menu and verify the number of menu options',async ()=>{
            
            const expectedMenuOptionsCount = 5;

            const hamburgerMenuButton = await $('.hamburger-menu__button');

            await hamburgerMenuButton.safeClick();

            const hamburgerMenuOptions = await $$('.hamburger-menu__item.item--collapsed');
            
            await expect(hamburgerMenuOptions).toBeElementsArrayOfSize(expectedMenuOptionsCount);    
        }),
        it('should open the CONTACT US information',async ()=>{

            const contactUSLink = await $('//div/a[@data-gtm-category="header-contact-cta"]');

            const contactUsLabel = await $('//span[text()="Contact Us"]');

            await contactUSLink.safeClick();

            await expect(contactUsLabel).toBeDisplayed();

        }),
        it("should list the Epam's services",async ()=>{

            const servicesLink = await $('span.top-navigation__item-text a[href="/services"]');

            await servicesLink.click();


            const expectedServices = [
                'STRATEGY',
                'ENGINEERING',
                'Cloud',
                'CYBERSECURITY',
                'Data & Analytics',
                'CX+',
                'Artificial Intelligence'];

            const displayedServices = await $$('ul[class="buttons-list"] li');
         
            await expect(displayedServices).toBeElementsArrayOfSize(expectedServices.length-1);//I want this to fail

            await expect(displayedServices).toHaveText(expectedServices);       

        }),
        it('should accept all Cookies Policy', async ()=>{

            const acceptAllButton = await $('div button#onetrust-accept-btn-handler');

            await acceptAllButton.safeClick();

            await acceptAllButton.waitForClickable({ reverse: true });
                   
        }),
        it('should delete all Cookies Policy', async ()=>{

            const acceptAllButton = await $('div button#onetrust-accept-btn-handler');
               
            await browser.deleteCookies();
            
            await browser.back();

            await browser.waitUntil(async ()=>{
                const isEnabled = await acceptAllButton.isEnabled();
                const isVisible = await acceptAllButton.isDisplayed();
                const isClickable = await acceptAllButton.isClickable();
                return isVisible && isEnabled && isClickable;
            },{
                timeout: 10000,
                timeoutMsg: 'The button was not clickable after 10 seconds'
            });

            const cookiePolicyLink = await $(' a.ot-cookie-policy-link')

            await cookiePolicyLink.moveTo();

            const cookiesSettingsLink = await $('div button#onetrust-pc-btn-handler');

            await expect(cookiesSettingsLink).toBeDisplayed();
            
        
        });
        
           

});