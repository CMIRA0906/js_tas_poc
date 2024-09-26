const BasePage = require("./base.page");

/**
 * sub page containing specific selectors and methods for the home page
 */
class HomePage extends BasePage {

    constructor(){
        super('/')
    }

     /**
     * overwrite specific options to adapt it to page object
     */

     
    async open(){
        await browser.url('/')
        await await browser.maximizeWindow()
    }

       /**
     * define selectors using getter methods
     */


    get hamburgerMenuButton(){
        return $('.hamburger-menu__button');
    }

    hamburgerMenuOptions(){
        return $$('.hamburger-menu__item.item--collapsed');
    } 
    
    get contactUSLink(){
        return $('//div/a[@data-gtm-category="header-contact-cta"]');
    }

    contactUsLabel(){
        return $('//span[text()="Contact Us"]');
    }

    get servicesLink(){
        return $('span.top-navigation__item-text a[href="/services"]')
    }

    get displayedServices(){
        return $$('ul[class="buttons-list"] > li');
    }

    get acceptAllButton() {
        return $('div button#onetrust-accept-btn-handler');
    }

    get cookiePolicyLink(){
        return $(' a.ot-cookie-policy-link');
    }

    get cookiesSettingsLink() {
        return $('div button#onetrust-pc-btn-handler');   
    }

}

module.exports = HomePage;