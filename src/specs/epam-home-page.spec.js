const HomePage =  require('../pages/home.page');
const logger = require('../config/logger');

const homePage = new HomePage();

describe("www.epam.com test suite",()=>{
   
        it('should open www.epam.com and verify title and URL',async ()=>{

            const expectedTitle = "EPAM | Software Engineering & Product Development Services";

            const expectedUrl = 'https://www.epam.com/';

            await homePage.open();

            await browser.maximizeWindow();

            logger.info('This is the webpage title '+browser.getTitle());

            await expect(browser).toHaveTitle(expectedTitle);

            await expect(browser).toHaveUrl(expectedUrl);
        }),

        it('should open the hamburger menu and verify the number of menu options',async ()=>{
            
            const expectedMenuOptionsCount = 5;

            await homePage.hamburgerMenuButton.safeClick();
            
            await expect(homePage.hamburgerMenuOptions()).toBeElementsArrayOfSize(expectedMenuOptionsCount);    
        }),

        it('should open the CONTACT US information',async ()=>{

            await homePage.contactUSLink.safeClick();

            await expect(homePage.contactUsLabel()).toBeDisplayed();

        }),

        it("should list the Epam's services",async ()=>{

            await homePage.servicesLink.click();

            const expectedServices = [
                'STRATEGY',
                'ENGINEERING',
                'CLOUD',
                'CYBERSECURITY',
                'DATA & ANALYTICS',
                'CX+',
                'ARTIFICIAL INTELLIGENCE'];
         
            await expect(homePage.displayedServices).toBeElementsArrayOfSize(expectedServices.length-1);//I want this to fail

        }),

        it('should accept all Cookies Policy', async ()=>{

            await homePage.acceptAllButton.safeClick();

            await homePage.acceptAllButton.waitForClickable({ reverse: true });
                   
        }),

        it('should delete all Cookies Policy', async ()=>{
               
            await browser.deleteCookies();
            
            await browser.back();

            await browser.waitUntil(async ()=>{
                const isEnabled = await homePage.acceptAllButton.isEnabled();
                const isVisible = await homePage.acceptAllButton.isDisplayed();
                const isClickable = await homePage.acceptAllButton.isClickable();
                return isVisible && isEnabled && isClickable;
            },{
                timeout: 10000,
                timeoutMsg: 'The button was not clickable after 10 seconds'
            });

            await homePage.cookiePolicyLink.moveTo();

            await expect(homePage.cookiesSettingsLink).toBeDisplayed();
            
        
        });
        
           

});