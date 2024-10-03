const { sendRequest } = require("../../helpers/api.helper");

const testData = require("../testdata/postsdata.json")

describe('Api jsonplaceholder.typicode.com Test Suite',()=>{
 
    it('should get the post #1', async()=>{

        const response = await sendRequest('/posts/1');
        
        expect(response.data.userId).to.equal(1);
        expect(response.status).to.equal(200);
        
    });

    it('should create a new post', async()=>{

        const response = await sendRequest('posts',testData,"post");
        
        expect(response.status).to.equal(201);
        expect(response.data).to.include(testData);

    });

    it('should return a list with all resources',async ()=>{

        const response =  await sendRequest('posts')
    
        expect(response.status).to.equal(200)
        expect(response.data).to.be.a("array")
        expect(response.data).to.have.length.above(1);

        response.data.forEach(item => {
            expect(item).to.have.all.keys('userId','id','title','body');
        });
        
    });

    it('should return a resource',async ()=>{

        const response =  await sendRequest('posts/7')
    
        expect(response.status).to.equal(200)
        expect(response.data).to.be.a("object")  
            
    });

    it('should return a list of resources filtered by id',async ()=>{

        const response =  await sendRequest('posts?id=97')
    
        expect(response.status).to.equal(200)
        expect(response.data).to.be.a("array")  
        expect(response.data).to.have.length(1); 
            
    });

    it('should return an empty list',async ()=>{

        const response =  await sendRequest('posts?id=0000')
        
        expect(response.status).to.equal(200)
        expect(response.data).to.be.a("array")  
        expect(response.data).to.have.length(0); 
            
    });

    it('should return a list of resources filtered by userId',async ()=>{

        const response =  await sendRequest('posts?userId=10')
    
        expect(response.status).to.equal(200)
        expect(response.data).to.be.a("array")  
        expect(response.data).to.have.length.above(2);
            
    });

    it('should update a resource',async ()=>{

        const response =  await sendRequest('posts/2',testData,'put')
           
        expect(response.status).to.equal(200)
        expect(response.data).to.be.a("object");
        expect(response.data).to.contain(testData);
     
    });

    it('should delete the especified resource',async ()=>{

        const response = await sendRequest('posts/1','delete')

        expect(response.status).to.equal(200)
        expect(response.data).to.be.a("object");

    })



});