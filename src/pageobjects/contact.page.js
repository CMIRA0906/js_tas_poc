const BasePage = require("./base.page");

class ContactFormPage extends BasePage {

    constructor(){
        super('/')
    }

    get firstNameInput(){
        return $('input[name=user_first_name]');
    }
    
    get lastNameInput(){
        return $('input[name=user_last_name]');
    }

    get emailInput(){
        return $('input[name=user_email]');
    }

    get phoneInput(){
        return $('input[name=user_phone]');
    }

    get companyInput(){
        return $('input[name=user_company]');
    }

    get submitButton(){
        return $('button[type=submit]');
    }

    get howHeardAboutUsLabel(){
        return $('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_comment_how_hear_about-label');
    }

    async fillContactForm(user){
        
        await this.firstNameInput.setValue(user.firstname);
        await this.lastNameInput.setValue(user.lastname);
        await this.emailInput.setValue(user.email);
        await this.phoneInput.setValue(user.phone);
        await this.companyInput.setValue(user.company);

    }

    async submitForm(){
        await this.submitButton.waitForClickable();
        await this.submitButton.click();
    }




}
module.exports = ContactFormPage;