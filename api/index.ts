require('chromedriver')
require('dotenv').config()
const chromium = require('@sparticuz/chromium')
const puppeteer = require('puppeteer')
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get('/api/trendlynecookie', async function (req, res) {

            
   
    let browser = null
    console.log('spawning chrome headless')
    try {
      const start = Date.now();
      const executablePath = process.env.CHROME_EXECUTABLE_PATH || await chromium.executablePath 
    
      browser = await puppeteer.launch({
             args: chromium.args,
           
         executablePath:executablePath ,
         headless:true,
          ignoreHTTPSErrors: true,
      
      })
     
      const page = await browser.newPage();
      await page.setCacheEnabled(true)
      
      const targetUrl = 'https://trendlyne.com/visitor/loginmodal/'
      await page.goto(targetUrl, {
        waitUntil: ["domcontentloaded"]
      })
     
         await page.type('#id_login', process.env.TRENDLYNE_EMAIL);
         
         await page.type('#id_password', process.env.TRENDLYNE_PASSWORD);
       
          
    const cookie = await page.cookies()
     console.log(cookie)
    for (let val in cookie){
     
        if (cookie[val].name == '.trendlyne'){
          process.env.trnd=cookie[val].value
        
       }}
       for (let val in cookie){
       if (cookie[val].name == 'csrftoken'){
         process.env.csrf=cookie[val].value
      
      }
    }
   
     console.log(process.env.csrf)
     console.log(process.env.trnd)
  
      
        // axiosApiInstance
        //   .post('/updateOne', {
        //     collection: 'cookie',
        //     database: 'Trendlynecookie',
        //     dataSource: 'Cluster0',
        //     filter: {},
        //     update: {
        //       $set: {
        //         "csrf":  process.env.csrf,
        //         "trnd":  process.env.trnd,
        //         "time": start
        //       },
        //     },
        //     upsert: true,
        //   })
        //   .then(() => {
        //     console.log('Trendlyne cookie Data updated successfully');
            
        //   })
        //   .catch((error) => {
        //     console.log('Error while updating data:', error);
           
        //   });
  
      const timeTaken = Date.now() - start;
      console.log(`Total time taken: ${timeTaken} milliseconds`);

    } catch (error) {
      console.log(error);
    
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: error.message }),
      };
    } finally {
      if (browser) {
          await browser.close();
        
      }
    }
   
  });

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;