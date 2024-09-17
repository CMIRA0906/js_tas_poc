class BasePage {

    constructor(url){
        this.url = url;
    }

    open(){
        return browser.url(this.url);
    }

    
    async getElementColor(element){
        
        const colorProperty = await element.getCSSProperty('color');
        return colorProperty.parsed.hex;
    


    }





}

module.exports = BasePage;