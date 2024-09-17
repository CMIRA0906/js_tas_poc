function addCustomCommands(){

    browser.addCommand("safeClick", async function(timeout= 5000){

        await this.waitForDisplayed();
        await this.waitForClickable({ timeout });
        console.log('wait with success');
        await this.highlightWebElement();
        await this.click();
        
    }, true);    

    browser.addCommand("highlightWebElement", async function(duration = 3000) {
        await this.execute(function(el) {
            el.setAttribute('new-style', el.getAttribute('style'));
            el.style.border = '4px solid red';
        });
    },true);


}

module.exports = {addCustomCommands};