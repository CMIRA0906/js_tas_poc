
const { Before, After } = require('@wdio/cucumber-framework');

Before({name :'It runs before', tags:'@Regression'},(scenario) =>{

    const scenarioName = scenario.pickle.name;
    console.log('*********************************************');
    console.log(`**Starting scenario ${scenarioName}**`);
    console.log('*********************************************');

});

After({name :'It runs after', tags:'@Regression'},(scenario) =>{

    const scenarioName = scenario.pickle.name;
    console.log('*********************************************');
    console.log(`**Finishing scenario ${scenarioName}**`);
    console.log('*********************************************');


});

