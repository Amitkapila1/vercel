require('chromedriver');
const express = require('express');
const fs = require('fs');
const filePath = './src/app/lists/tlid.txt';
var app = express();
const swd = require("selenium-webdriver");
const webdriver = require('selenium-webdriver');
const chrome=require('selenium-webdriver/chrome')
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const fetch = require('node-fetch');


const { MongoClient } = require('mongodb');
const client1 = new MongoClient( "mongodb+srv://amit:amit0605@cluster0.mxilo.mongodb.net/?retryWrites=true&w=majority", { useUnifiedTopology: true });
function time(){
const now = new Date();
const hours = now.getHours().toString().padStart(2, "0"); // add leading zero if necessary
const minutes = now.getMinutes().toString().padStart(2, "0"); // add leading zero if necessary
const time = `${hours}:${minutes}`;
console.log(typeof(time))

console.log(time); // output example: "15:30"
if (time == '23:00'){
  trendlynecookie()
}
if (time == '01:05'){
  Opstracookie()
}
}

setInterval(time, 60000);
const bodyParser = require("body-parser");
const request = require('request')
app.use(cors());
app.use(cors({
  origin: '*'
}));

app.use(bodyParser.raw());

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
    next();
  
    
    
  });
  const axiosApiInstance = axios.create({
    baseURL: 'https://data.mongodb-api.com/app/data-cibaq/endpoint/data/v1/action',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'hhsIfhonChu0fJ000k04e1k7nb5bX1CvkIWLw17FRjrzLg7kWihbY7Sy4UUKwoUy ',
      Accept: 'application/ejson'
    }
  });
  app.get('/api/trendlynecookie', async function (req, res) {
    const chromium = require('@sparticuz/chromium')
const puppeteer = require('puppeteer-core')
const axios = require('axios');
    let browser = null
    console.log('spawning chrome headless')
    try {
      // let abc=`C:/\Program Files/\Google/\Chrome/\Application/\chrome.exe`
      const start = Date.now();
      console.log(chromium.executablePath )
      const executablePath =  process.env.CHROME_EXECUTABLE_PATH || await chromium.executablePath 
 
      // setup
      browser = await puppeteer.launch({
             args: chromium.args,
           
        executablePath: executablePath,
         headless:chromium.headless,
          ignoreHTTPSErrors: true,
            // ignoreDefaultArgs: ["--disable-extensions","--single-process"]
      })
 
      // Use page cache when loading page.
      page = await browser.newPage();
      await page.setCacheEnabled(true)
      
      const targetUrl = 'https://trendlyne.com/visitor/loginmodal/'
 
      await page.goto(targetUrl, {
        waitUntil: ["domcontentloaded"]
      })
 
     
         await page.type('#id_login', 'amit.kapila.2009@gmail.com');
         
         await page.type('#id_password','Angular789');
          // process.env.TRENDLYNE_PASSWORD);
       
          
    cookie = await page.cookies()
    // console.log(cookie)
    for (let val in cookie){
     
        if (cookie[val].name == '.trendlyne'){
          process.env.trnd=cookie[val].value
        
       }}
       for (let val in cookie){
       if (cookie[val].name == 'csrftoken'){
         process.env.csrf=cookie[val].value
      
      }
    }
   
      const data = {
        "collection": "cookie",
        "database": "Trendlynecookie",
        "dataSource": "Cluster0",
        "filter":{},
        "update":{$set: {
          "csrf":  process.env.csrf,
          "trnd":  process.env.trnd,
          "time": start
        }},
        "upsert":true
        };
        const config = {
          method: 'post',
          url: 'https://data.mongodb-api.com/app/data-cibaq/endpoint/data/v1/action/updateOne',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': 'hhsIfhonChu0fJ000k04e1k7nb5bX1CvkIWLw17FRjrzLg7kWihbY7Sy4UUKwoUy',
            'Accept': 'application/ejson'
          },
          data,
      };
      const result = await axios(config);
            
      // return response data
  
  // async function trendlynecookie (req, res) {
  //  console.log("Hello!!!")
  //   let options = new chrome.Options();
  //   //Below arguments are critical for Heroku deployment
  //   options.addArguments("--headless");
  //   options.addArguments("--disable-gpu");
  //  options.addArguments("--no-sandbox");
  //  options.setChromeBinaryPath(process.env.CHROME_BINARY_PATH);
  //  let serviceBuilder = new chrome.ServiceBuilder(process.env.CHROME_DRIVER_PATH);
  
  // //  binary_location = "C:\\path\\to\\chrome.exe"
  // //  options.setBinary(".\\src\\assets\\chromedriver.exe");
  // options.addArguments("--disable-dev-shm-usage")
  //   let driver = new webdriver.Builder()
  //     .forBrowser('chrome')
  //     .setChromeOptions(options)
  //     .setChromeService(serviceBuilder)
  //     .build();
 
  //   let tabToOpen = driver.get("https://trendlyne.com/visitor/loginmodal/");
  //   tabToOpen.then(function () {
  //     let findTimeOutP = driver.manage().setTimeouts({ implicit: 5000, });
  //     return findTimeOutP;
  //   }).then(function () {
  //     let promiseUsernameBox = driver.findElement(swd.By.id("id_login"));
  //     return promiseUsernameBox;
  //   }).then(function (usernameBox) {
  //     let promiseFillUsername = usernameBox.sendKeys('amit.kapila.2009@gmail.com');
  //     return promiseFillUsername;
  //   }).then(function () {
  //     console.log("Username entered successfully in Trendlyne");

  //     let promisePasswordBox = driver.findElement(swd.By.id("id_password"));
  //     return promisePasswordBox;
  //   }).then(function (passwordBox) {
      
  //     let promiseFillPassword = passwordBox.sendKeys('Angular789\n');
  //     return promiseFillPassword;
  //   }).then(function () {
  //     console.log("Successfully signed in Trendlyne!");
  //     driver.manage().getCookie('.trendlyne').then(function (cookiestl) {
  //       process.env.trendlynecookietl = cookiestl.value;
  //       console.log(process.env.trendlynecookietl)
  //     });
      
  //     driver.manage().getCookie('csrftoken').then(async function (cookiescsrf) {
  //       process.env.trendlynecookiecsrf = cookiescsrf.value;
  //       console.log(process.env.trendlynecookiecsrf)
  //       await driver.quit(); 
  //       await axiosApiInstance.post('/updateMany', {
  //         collection: 'cookie',
  //         database: 'Trendlynecookie',
  //         dataSource: 'Cluster0',
  //         filter: {},
  //         update: {
  //           $set: {
  //             csrf: process.env.trendlynecookiecsrf,
  //             trnd: process.env.trendlynecookietl
  //           }
  //         },
  //         upsert: true
  //       });
  //       console.log("Inserted Successfully in Trendlyne DB!!!") 
  //     });
      
       
    
             
      
      
  //   }).catch(function (err) { console.log("Error ", err, " occurred!"); });
  //   //    
// };
// callback(null, {
//   statusCode: 200,
//   body: "Inserted"
// });
const timeTaken = Date.now() - start;
console.log(`Total time taken: ${timeTaken} milliseconds`);


} catch (error) {
console.log(error);
// callback(err);
}
});

     

 

  // * To fetch Opstra session Cookies

// app.get('/api/opstracookie', async 
app.get('/api/Opstracookie', function (req, res) {
  console.log("hi")
// async function Opstracookie(req, res) {

    let options1 = new chrome.Options();
options1.addArguments("--headless");
options1.addArguments("--disable-gpu");
  options1.addArguments("--no-sandbox");
  options1.setChromeBinaryPath(process.env.CHROME_BINARY_PATH);
   let serviceBuilder1 = new chrome.ServiceBuilder(process.env.CHROME_DRIVER_PATH);
  
  //  binary_location = "C:\\path\\to\\chrome.exe"
  //  options.setBinary(".\\src\\assets\\chromedriver.exe");
  options1.addArguments("--disable-dev-shm-usage")
  let driver1 = new webdriver.Builder()
  .forBrowser('chrome')
    .setChromeOptions(options1)
    .setChromeService(serviceBuilder1)
  .build();
  
 
  let tabToOpen = driver1.get("https://opstra.definedge.com/ssologin"); 
  tabToOpen.then(function () { 
  
          let findTimeOutP =driver1.manage().setTimeouts({implicit: 5000,}); 
          return findTimeOutP; }).then(function () { 
            let promiseUsernameBox = 
            driver1.findElement(swd.By.id("username")); 
          return promiseUsernameBox;}).then(function (usernameBox) { 
  
          let promiseFillUsername = 
              usernameBox.sendKeys('amit.kapila.2009@gmail.com'); 
          return promiseFillUsername; 
  
      }).then(function () { 
        console.log("Username entered successfully in Opstra"); 
        let promisePasswordBox = 
      driver1.findElement(swd.By.id("password")); 
      return promisePasswordBox;}).then(function (passwordBox) { 
          let promiseFillPassword = 
          passwordBox.sendKeys('Angular789\n'); 
          return promiseFillPassword;}).then(function () { 
      console.log("Successfully signed in Opstra!"); 
        
        driver1.manage().getCookie('JSESSIONID').then(async function (cookiesopjsid) {
                process.env.opstracookiejsid = cookiesopjsid.value
                await axiosApiInstance.post('/updateOne', {
                  collection: 'cookie',
                  database: 'Opstracookie',
                  dataSource: 'Cluster0',
                  filter: {},
                  update: {
                    $set: {
                      JSESSIONID: process.env.opstracookiejsid
                    
                    }
                  },
                  upsert: true
                });
         
               await driver1.quit(); 
        })
           }).catch(function (err) { console.log("Error ", err, " occurred!"); });
          //  await driver1.quit();
// };
    
});

 
  //*This is ET now Stock Data Details used in Share component using parallel api run
  app.get('/api/etsharetoday', function (req, res) {

    let eqsymbol = req.query.eqsymbol
  
    var url6 = 'https://ettechcharts.indiatimes.com/ETLiveFeedChartRead/livefeeddata?scripcode=' + eqsymbol + 'EQ&exchangeid=50&datatype=intraday&filtertype=1MIN&tagId=10648&firstreceivedataid=&lastreceivedataid=&directions=all&scripcodetype=company'
    request(url6, function (error, response, html) {
      if (!error) {
        res.json(JSON.parse(response.body))
      }
    })
  })
 

  

  app.get('/api/et', function (req, res) {
    const start = Date.now();
    const obj=[];
    
   
   

   fs.readFile('./src/app/lists/tlid1.json', (err, data) => {
     if (err) throw err;
   
     // Parse the data into an array
     const symbols = JSON.parse(data);
   
  

 
  const promises = symbols.map(async symbol  => {
    console.log(`${symbol.tlid}`)
   
     const response= await fetch(
        `https://trendlyne.com/mapp/v1/stock/chart-data/${symbol.tlid}/SMA/?format=json`,
        {
          headers: { Accept: 'application/json' }
        }
      );
      if (!response.ok) {
        return { statusCode: response.status, body: response.statusText }
      }
      const data1 = await response.json();
     console.log(`${symbol.name}`)
      try{
              obj.push({
       
        Name: `${symbol.name}`,
        DurabilityScore: data1.body['stockData'][6],
        DurabilityColor: data1.body['stockData'][9],
        VolatilityScore: data1.body['stockData'][7],
        VolatilityColor: data1.body['stockData'][10],
        MomentumScore: data1.body['stockData'][8],
        MomentumColor: data1.body['stockData'][11]
      })
      
    
   
  }catch (error){
    console.log('error')
  }
 
   await axiosApiInstance.post('/updateMany', {
    collection: 'DVM',
    database: 'DVM',
    dataSource: 'Cluster0',
    filter: {},
    update: {
      $set: {
        output: obj,
        time: start
      }
    },
    upsert: true
  });
   
    // console.log(obj)
    try {
      await Promise.all(promises)
    } catch (e) {
      console.log(e)
    }
  });
  const timeTaken = Date.now() - start;
  console.log(`Total time taken: ${timeTaken} milliseconds`);

  client1.close()
  })
})



  

  app.use(express.static(__dirname + "/"));
  app.use(express.static(path.join(__dirname, '/dist/amitnginx')))
  app.get("/*", function (req, res) {

    res.sendFile(path.join(__dirname, '/dist/amitnginx/index.html'));
  });
  app.listen( process.env.PORT || 3000, function () {
    console.log('Your node is running on port 3000');
  })
//  }
