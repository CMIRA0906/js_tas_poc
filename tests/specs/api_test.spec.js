const { sendRequest } = require("../../helpers/api.helper");

const testData = require("../testdata/postsdata.json")

describe('Api Test Suite',()=>{
 
    it('Test Get post/1', async()=>{

        const response = await sendRequest('/posts/1');
        
        expect(response.data.userId).to.equal(1);
        expect(response.status).to.equal(200);
        
    });

    it('Test POST posts', async()=>{

        const response = await sendRequest('posts',testData,"post");
        
        expect(response.status).to.equal(201);

    });

});