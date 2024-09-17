const { faker } = require('@faker-js/faker');

class DataTestGenerator {

    static getTestUser(){

        return{
            firstname: faker.person.firstName(),
            lastname: faker.person.lastName(),
            email: faker.internet.email(),
            phone: faker.phone.number(),
            company: faker.company.name()
        };
    }   


}

module.exports = DataTestGenerator;