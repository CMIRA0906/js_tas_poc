const NumbersValidator = require("../../app/numbers-validator");
const {describe,beforeEach,afterEach,it} = require("mocha");
const { expect } = require('chai');

describe("number-validator test suite",() =>{

    let validator;
    beforeEach(()=>{
        validator = new NumbersValidator();
    });

    afterEach(()=>{
        validator=null;

    });

    describe("positive tests for isNumberEven function",()=>{
        it("should return true when privided an even number",()=>{
            const validatorResults = validator.isNumberEven(4);
            expect(validatorResults).to.be.equal(true);
    
        });
    });

    describe("negative tests for isNumberEven function",()=>{
        it("should return false when provided an odd number",()=>{
            const validatorResults = validator.isNumberEven(3);
            expect(validatorResults).to.be.equal(false);
        });

        it("slould throw an error when provided not a number value",()=>{
            const input = "two";
            expect(()=>{
                validator.isNumberEven(input);

            }).to.throw(`[${input}] is not of type "Number" it is of type "${typeof input}"`);
        });

    });

    describe("positive tests for getEvenNumbersFromArray function",()=>{
        let numbers = [13,12,15,18,19];

        it("should return an array of numbers",()=>{           
            const result = validator.getEvenNumbersFromArray(numbers);
            expect(result).to.be.an('array');
        });

        it("should return an array with 2 even number",()=>{
            const result = validator.getEvenNumbersFromArray(numbers);
            expect(result).to.have.all.members([12,18]);
        });

    });

    describe("negative tests for getEvenNumbersFromArray function",()=>{

        it("should return an empty array",()=>{
            const result = validator.getEvenNumbersFromArray([3,5,7]);
            expect(result).to.deep.equal([]);
            expect(result).to.be.an("array");
        });

        it('should throw an error if the input is not an array',()=>{
            const input = 'not an array';
            expect(()=>{
                validator.getEvenNumbersFromArray(input)
            }).to.throw(Error, `[${input}] is not an array of "Numbers"`);
        });

        it('should throw an error if the array contains non-number elements',()=> {
            const input =['three',80];
            expect(() => validator.getEvenNumbersFromArray(input))
            .to.throw(Error, `[${input}] is not an array of "Numbers"`);
        });

    });

    describe("positive tests for isAllNumbers function",()=>{

        it("should return true when providing an array of numbers as input",()=>{
            const result = validator.isAllNumbers([1,2,3,4]);
            expect(result).to.be.equal(true);
        });

    });

    describe("negative tests for isAllNumbers function",()=>{

        it("should return false when providing if the array contains non-number elements",()=>{
            const result = validator.isAllNumbers([1,'test',3,4]);
            expect(result).to.be.equal(false);
        });
        
        it("should throw an error if the input is not an array",()=>{
            const input = 'invalid input';
            expect(()=>validator.isAllNumbers(input))
            .to.throw(Error,`[${input}] is not an array`)
        });
    });

    describe("positive tests for isInteger function",()=>{

        it("should return true when providing an integer",()=>{
            const result = validator.isInteger(12555255);
            expect(result).to.be.equal(true);
        });

    });

    describe("negative tests for isInteger function",()=>{

        it("should return false when providing an decimal as input",()=>{
            const result = validator.isInteger(45.5);
            expect(result).to.be.equal(false);
        });

        it("should throw an error when providing a string as input",()=>{
            const input = 'testing';
            expect(()=>validator.isInteger('testing'))
            .to.throw(Error,`[${input}] is not a number`  )
        });


    });


});
