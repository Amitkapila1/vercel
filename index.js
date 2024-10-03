require('chromedriver')
 const chromium = require('@sparticuz/chromium')
  const puppeteer = require('puppeteer')
 const swd = require("selenium-webdriver");
const webdriver = require('selenium-webdriver');
const chrome=require('selenium-webdriver/chrome')
const express = require('express');
const fs = require('fs');
const filePath = './src/app/lists/tlid.txt';
var app = express();
const dotenv=require('dotenv')
dotenv.config('/.env')
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const fetch = require('node-fetch');
const { Client } = require('pg');

const { MongoClient } = require('mongodb');
function time(){
const now = new Date();
const hours = now.getHours().toString().padStart(2, "0"); // add leading zero if necessary
const minutes = now.getMinutes().toString().padStart(2, "0"); // add leading zero if necessary
const time = `${hours}:${minutes}`;
function ttvolbreak(){
  ttvolbreakout()
}
function trendlyneDVM(){
  trendlyneDVM()
}
// console.log(time); // output example: "15:30"
if (time == '09:45'){
  Trendlynecookie()
}
if (time == '11:45'){
  Trendlynecookie()
}
  
  if (time == '03:45'){

   this.timerID = setInterval(ttvolbreak, 120000);
 
   
  }
  if(time == '04:15'){
    clearInterval(this.timerID)
   }

   if (time == '04:16'){

   this.timerID1 = setInterval(ttvolbreak, 900000);
   
   
  }
   if (time == '04:20'){

   this.timerID2 = setInterval(trendlyneDVM, 900000);
   
   
  }
   if (time == '04:25'){

   this.timerID2 = setInterval(trendlyneDVM, 900000);
   
   
  }
  if(time == '10:00'){
    clearInterval(this.timerID1)
   }

} 


setInterval(time, 60000);
// setInterval(Opstracookie, 1800000);

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
    baseURL: process.env.mongoapiurl,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': process.env.mongoapikey,
      Accept: 'application/ejson'
    }
  });
 
  
  // app.get('/mcinsights', function (req, res) {
  //   const start = Date.now();
  //   const obj = [];
    
  //   fs.readFile('./tlid.json', async (err, data) => {
  //     if (err) {
  //       console.log('Error while reading file:', err);
  //       return;
  //     }
  
  //     try {
  //       // Parse the data into an array
  //       const symbols = JSON.parse(data);
  
  //       // Process 100 symbols at a time
  //       for (let i = 0; i < symbols.length; i += 100) {
  //         const symbolBatch = symbols.slice(i, i + 100);
  
  //         const promises = symbolBatch.map(async symbol => {
  //           try {
  //             const response = await fetch(
  //               `https://api.moneycontrol.com//mcapi//v1//extdata//mc-insights?scId=${symbol.mcsymbol}&type=d`,
  //               {
  //                 headers: { Accept: 'application/json' },
  //               }
  //             );
  
  //             if (!response.ok) {
  //               throw new Error(`HTTP error! status: ${response.status}`);
  //             }
  
  //             const data1 = await response.json();
  
  //             console.log(`${symbol.name}`);
  
  //             // Check if data1.data['insightData']['price'][5] exists before pushing to obj array
  //             if (data1.data['insightData']['price'][5]) {
  //               obj.push({
  //                 Name: `${symbol.name}`,
  //                 FnO: data1.data['insightData']['price'][4],
  //                 DealData: data1.data['insightData']['price'][5],
  //               });
  //             }
  //           } catch (error) {
  //             console.log('Error while fetching data:', error);
  //           }
  //         });
  
  //         await Promise.all(promises);
  //       }
  
  //       const timeTaken = Date.now() - start;
  //       console.log(`Total time taken: ${timeTaken} milliseconds`);
  
  //       axiosApiInstance
  //         .post('/updateOne', {
  //           collection: 'mcinsights',
  //           database: 'MC',
  //           dataSource: 'Cluster0',
  //           filter: {},
  //           update: {
  //             $set: {
  //               output: obj,
  //               time: start,
  //             },
  //           },
  //           upsert: true,
  //         })
  //         .then(() => {
  //           console.log('Data updated successfully');
  //         })
  //         .catch((error) => {
  //           console.log('Error while updating data:', error);
  //         });
  //     } catch (error) {
  //       console.log('Error while parsing data:', error);
  //     }
  //   });
  // });
     
  const { Pool } = require('pg');
const pool = new Pool({
  user: process.env.POSTGRESS_DATABASE_USER,
  host: process.env.POSTGRESS_DATABASE_HOST,
  database: process.env.POSTGRESS_DATABASE_DATABASE,
  password: process.env.POSTGRESS_DATABASE_PASSWORD,
  port: 5432,
});
const pool1 = new Pool({
  user: process.env.POSTGRESS_DATABASE_USER1,
  host: process.env.POSTGRESS_DATABASE_HOST1,
  database: process.env.POSTGRESS_DATABASE_DATABASE1,
  password: process.env.POSTGRESS_DATABASE_PASSWORD1,
  port: 5432,
});


// Read the file and store the symbols data
let symbolsData = null;
// fs.readFile('./tlid.json', (err, data) => {
//   if (err) {
//     console.log('Error while reading file:', err);
//     return;
//   }
//   symbolsData = JSON.parse(data);
// });


const batchSize = 100; // Number of symbols to process in each batch

// async function mcinsightspg(req, res) {
//   const start = Date.now();
//   const obj = [];
//   const tableName = 'mcinsights';
//   try {
//       const createTableQuery = `
//       CREATE TABLE IF NOT EXISTS mcinsights (
//         id SERIAL PRIMARY KEY,
//         obj JSONB,
//         time TIMESTAMP
//       )
//     `;
//     await pool.query(createTableQuery);
    
//     // Delete all existing entries in the table
//     const deleteQuery = `DELETE FROM ${tableName}`;
//     await pool.query(deleteQuery);

//     // Create an index on the "FnO" field
//     const createIndexQuery = `
//       CREATE INDEX IF NOT EXISTS fno_idx ON ${tableName} (((obj->>'FnO')))
//     `;
//     await pool.query(createIndexQuery);
//     const data = fs.readFileSync('./tlid.json');
//     const symbols = JSON.parse(data);

//     const processBatch = async (symbolBatch) => {
//       const promises = symbolBatch.map(async (symbol) => {
//         try {
//           const response = await fetch(
//             `https://api.moneycontrol.com//mcapi//v1//extdata//mc-insights?scId=${symbol.mcsymbol}&type=d`,
//             {
//               headers: { Accept: 'application/json' },
//             }
//           );

//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }

//           const data1 = await response.json();

//           console.log(`${symbol.name}`);

//           // Check if data1.data['insightData']['price'][5] exists before pushing to obj array
//           if (data1.data['insightData']['price'][5]) {
//             const entry = {
//               Name: `${symbol.name}`,
//               FnO: data1.data['insightData']['price'][4],
//               DealData: data1.data['insightData']['price'][5],
//             };

//             obj.push(entry);
//           }
//         } catch (error) {
//           console.log('Error while fetching data:', error);
//         }
//       });

//       await Promise.all(promises);
//     };

//     for (let i = 0; i < symbols.length; i += batchSize) {
//       const symbolBatch = symbols.slice(i, i + batchSize);
//       await processBatch(symbolBatch);
//     }

//     const timeTaken = Date.now() - start;
//     console.log(`Total time taken: ${timeTaken} milliseconds`);

//     const insertQuery = `
//       INSERT INTO mcinsights (obj, time)
//       VALUES ($1, $2)
//       ON CONFLICT DO NOTHING
//     `;

//     const objString = JSON.stringify(obj);

//     await pool.query(insertQuery, [objString, new Date(start)]);

//     console.log('Data updated successfully');
//   } catch (error) {
//     console.log('Error while processing data:', error);
//   }
// }
// app.get('/mcinsightspg', async function (req, res) {
//   const start = Date.now();
//   const obj = [];

//   try {
//       const createTableQuery = `
//       CREATE TABLE IF NOT EXISTS mcinsights (
//         id SERIAL PRIMARY KEY,
//         obj JSONB,
//         time TIMESTAMP
//       )
//     `;
//     await pool.query(createTableQuery);
    
//     // Delete all existing entries in the table
//     const deleteQuery = `DELETE FROM ${tableName}`;
//     await pool.query(deleteQuery);

//     // Create an index on the "FnO" field
//     const createIndexQuery = `
//       CREATE INDEX IF NOT EXISTS fno_idx ON ${tableName} (((obj->>'FnO')))
//     `;
//     await pool.query(createIndexQuery);
//     const data = fs.readFileSync('./tlid.json');
//     const symbols = JSON.parse(data);

//     const processBatch = async (symbolBatch) => {
//       const promises = symbolBatch.map(async (symbol) => {
//         try {
//           const response = await fetch(
//             `https://api.moneycontrol.com//mcapi//v1//extdata//mc-insights?scId=${symbol.mcsymbol}&type=d`,
//             {
//               headers: { Accept: 'application/json' },
//             }
//           );

//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }

//           const data1 = await response.json();

//           console.log(`${symbol.name}`);

//           // Check if data1.data['insightData']['price'][5] exists before pushing to obj array
//           if (data1.data['insightData']['price'][5]) {
//             const entry = {
//               Name: `${symbol.name}`,
//               FnO: data1.data['insightData']['price'][4],
//               DealData: data1.data['insightData']['price'][5],
//             };

//             obj.push(entry);
//           }
//         } catch (error) {
//           console.log('Error while fetching data:', error);
//         }
//       });

//       await Promise.all(promises);
//     };

//     for (let i = 0; i < symbols.length; i += batchSize) {
//       const symbolBatch = symbols.slice(i, i + batchSize);
//       await processBatch(symbolBatch);
//     }

//     const timeTaken = Date.now() - start;
//     console.log(`Total time taken: ${timeTaken} milliseconds`);

//     const insertQuery = `
//       INSERT INTO mcinsights (obj, time)
//       VALUES ($1, $2)
//       ON CONFLICT DO NOTHING
//     `;

//     const objString = JSON.stringify(obj);

//     await pool.query(insertQuery, [objString, new Date(start)]);

//     console.log('Data updated successfully');
//   } catch (error) {
//     console.log('Error while processing data:', error);
//   }
// });


app.get('/api/mcsymbolnamefetcher', async function (req, res) {

  fs.readFile('./symbol.json', async (err, data) => {
    if (err) {
      console.log('Error while reading file:', err);
      return res.status(500).send('File read error');
    }

    try {
      // Parse the data into an array
      const symbols = JSON.parse(data);

      // Process symbols in batches
      const symbolBatches = [];
      for (let i = 0; i < symbols.length; i += 200) {
        symbolBatches.push(symbols.slice(i, i + 200));
      }

      const csvRows = [['symbol', 'name', 'isin', 'sc_fullnm']];  // CSV header

      // Process each symbol batch asynchronously
      for (const symbolBatch of symbolBatches) {
        const promises = symbolBatch.map(async symbol => {
          try {
            const response = await fetch(`https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/${symbol.mcsymbol}`, {
              "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "if-none-match": "F30DADFE47849461912656050BA26686",
                "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "Referer": "https://www.moneycontrol.com/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
              },
              "body": null,
              "method": "GET"
            });

            // Check if the response is ok (status code 200-299)
            if (!response.ok) {
              console.warn(`Error fetching symbol: ${symbol.name}. Status: ${response.status}`);
              return; // Move to the next symbol in case of an error
            }

            const json = await response.json();
            console.log(json)

            // Validate if necessary fields are present
            if (!json.data || !json.data.isinid || !json.data.SC_FULLNM) {
              console.warn(`Invalid JSON for symbol: ${symbol.name}`);
              return; // Move to the next symbol in case of invalid JSON
            }

            // Extract relevant data
            const isin = json.data.isinid;
            const sc_fullnm = json.data.SC_FULLNM;
            const name = symbol.name || '';

            // Push the extracted data into CSV rows
            csvRows.push([symbol.mcsymbol, name, isin, sc_fullnm]);

          } catch (error) {
            console.error(`Error processing symbol: ${symbol.name}. Error:`, error);
            // Move to the next symbol in case of a network or processing error
          }
        });

        // Wait for all promises in the batch to resolve
        await Promise.all(promises);
      }

      // Convert rows into CSV format
      const csvData = csvRows.map(row => row.join(',')).join('\n');

      // Save the CSV data into a file
      const csvFilePath = './outputsymbolname2.csv';
      fs.writeFile(csvFilePath, csvData, err => {
        if (err) {
          console.error('Error while writing CSV file:', err);
          return res.status(500).send('Error writing CSV file');
        }

        console.log('CSV data saved to:', csvFilePath);
        res.send('CSV file created successfully');
      });

    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('An error occurred');
    }
  });
});

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// List of company names
const companies = ['Gujarat Fluorochemicals Limited ',
  'Tube Investments of India ',
  'IDFC First Bank  ',
  'Adani Green Energy Limited ',
  'PI Industries ',
  'Max Healthcare Institute Limited ',
  'Indian Hotels Company ',
  'HDFC Asset Management Company  ',
  'General Insurance Corporation of India ',
  'Astral Limited ',
  'Shree Cements ',
  'The Tata Power Company ',
  'Indian Bank ',
  'Larsen & Toubro ',
  'COFORGE LIMITED ',
  'State Bank of India ',
  'Dixon Technologies ',
  'Jindal Steel & Power ',
  'Star Health & Allied Insurance Company ',
  'L&T Technology Services ',
  'SBI Cards & Payment Services ',
  'Indian Overseas Bank ',
  'Mahindra & Mahindra Financial Services ',
  'Schaeffler India  ',
  'One 97 Communications Paytm ',
  'Jet Airways ',
  'Glenmark Pharma ',
  'Gujarat Heavy Chemicals ',
  'IVRCL ',
  'Aditya Birla Nuvo ',
  'EPL ',
  'ING Vysya Bank ',
  'Aftek ',
  'Garden Silk Mills ',
  'Gitanjali Gems ',
  'Nagarjuna Fertilisers and Chemicals ',
  'Vijaya Bank ',
  'Gammon India ',
  'The Bombay Dyeing Co. ',
  'Punj Lloyd ',
  'LML ',
  'CMC ',
  'Hexaware Technologies ',
  'Opto Circuits India ',
  'Deepak Fertilisers And Petrochemicals Corporation ',
  'Dena Bank ',
  'Allahabad Bank ',
  'Reliance Capital ',
  'Geometric ',
  'Ranbaxy Laboratories ',
  'Ramco System ',
  'McDowell Holdings ',
  'JB Chemicals and Pharmaceuticals ',
  'Central Bank of India ',
  'Andhra Bank ',
  'Cairn India ',
  'Jaypee Infratech ',
  'Tata Steel Long Products ',
  'Rane Engine Valves ',
  'Tamilnadu Petroproducts ',
  'Rico Auto ',
  'Sterling Biotech ',
  'Gujarat Industries Power Co. ',
  'Gujarat Mineral Development Corporation ',
  'Lanco Infratech ',
  'Gujarat State Fertilizers & Chemicals ',
  'GlaxoSmithKline Consumer Healthcare ',
  'Bannariamman Sugars ',
  'Sintex Industries ',
  'Tata Steel BSL Limited  ',
  'Mcleod Russel (India) ',
  'Videocon Industries ',
  'LG Balakrishnan and Brothers ',
  'Syndicate Bank ',
  'Essar Oil ',
  'Reliance MediaWorks ',
  'Oriental Bank of Commerce ',
  'Procter & Gamble Health ',
  'KSB  ',
  'Amtek Auto ',
  'JSW Ispat Special Products ',
  'Smartlink Holdings       ',
  'Amara Raja Energy & Mobility ',
  'Borosil Renewables  ',
  'AstraZeneca Pharma ',
  'KPR Mill ',
  'CCL Products India ',
  'Gujarat Narmada Valley Fert & Chem. ',
  'Aditya Birla Fashion & Retail ',
  'Navin Fluorine International ',
  'Godawari Power & Ispat ',
  'Amber Enterprises India Limited ',
  'Fertilisers and Chemicals Travancore ',
  'Varun Shipping Company ',
  'L&T Finance ',
  'Fortis Healthcare  ',
  'AAVAS Financiers  ',
  'Rashtriya Chemicals and Fertilisers ',
  'Clean Science & Technology ',
  'Jammu and Kashmir Bank ',
  'BSE Limited ',
  'Action Construction Equipment ',
  'Century Plyboards ',
  'J. K. Cement ',
  'Nuvama Wealth Management ',
  'Prince Pipes & Fittings ',
  'Aster DM Healthcare ',
  'Central Depository Services ',
  'Ircon International  ',
  'Housing & Urban Development Corporation ',
  'Bank of Maharashtra ',
  'KEC International ',
  'C. E. Info Systems (MapmyIndia) ',
  'Network 18 Media & Investments ',
  'Garden Reach Shipbuilders & Engineers ',
  'Fine Organics Industries ',
  'SUMITOMO CHEMICAL INDIA LIMITE ',
  'Mrs. Bectors Food Specialities ',
  'Punjab & Sind Bank ',
  'ZF Commercial Vehicle Control Systems India ',
  'Prataap Snacks  ',
  'ADF Foods Industries ',
  'LT Foods ',
  'Shyam Metalics & Energy ',
  'Sasta Sundar Ventures ',
  'Avadh Sugar & Energy ',
  'S H Kelkar & Company ',
  'VIP Industries ',
  'Ingersoll Rand (India) ',
  'Venkys ',
  'Whirlpool of India. ',
  'TATA MOTORS - DVR ',
  'Associated Alcohol and Breweries ',
  'DFM Foods ',
  'Arvind Fashions Limited ',
  'Galaxy Surfactants  ',
  'Syncom Formulations ',
  'Orient Electric Limited ',
  'Chaman Lal Setia Exports ',
  'Hatsun Agro Products ',
  'GM Breweries ',
  'DB Corp ',
  'Authum Investment & Infrastucture ',
  'Federal-Mogul Goetze ',
  'Bhagiradh Chemicals and Industries ',
  'HG Infra Engineering  ',
  'Entertainment Network India ',
  'Go Fashion India ',
  'Balmer Lawrie & Co ',
  'Igarashi Motors ',
  'Fusion Finance ',
  'Confidence Petroleum ',
  'HPL Electric & Power ',
  'Indian Metals & Ferro Alloys ',
  'Good Luck India ',
  'GE T&D India ',
  'IIFL Securities Limited ',
  'IG Petrochemicals ',
  'Equitas Holdings ',
  'Honda India Power Products Limited ',
  'Andhra Paper Limited ',
  'Gandhar Oil Refinery India ',
  'BL Kashyap & Sons ',
  'Ahluwalia Contracts India ',
  'Barbeque Nation Hospitality ',
  'Dredging Corporation India ',
  'Hi-Tech Pipes  ',
  'Greenpanel Industries Limited ',
  'Garware Hi-Tech Films ',
  'JTEKT India  ',
  'Jayant Agro-Organics ',
  'National Fertilizers ',
  'Nahar Poly Films ',
  'Rane Madras ',
  'Nalwa Sons Investment ',
  'Patel Engineering Company ',
  'Punjab Chemicals & Crop Protection ',
  'Paisalo Digital  ',
  'S P Apparels ',
  'Sandhar Technologies ',
  'Shree Digvijay Cement Company ',
  'Shree Pushkar Chemicals and Fertilisers ',
  'Shreyas Shipping ',
  'Sadhana Nitrochem ',
  'Kingfa Science & Technology ',
  'Pix Transmissions ',
  'SJS Enterprises ',
  'Mangalore Chemicals and Fertilisers ',
  'S Chand and Company Limited ',
  'Jubilant Industries  ',
  'Jindal Drilling Industries ',
  'Kolte-Patil Developers ',
  'ORIENTAL AROMATICS  ',
  'Johnson Controls -Hitachi Air Conditioning India ',
  'Thangamayil Jewellery  ',
  'Sree Rayalaseema Hi Strength Hyp ',
  'Akums Drugs & Pharmaceuticals ',
  'Techno Electric & Engineering Company ',
  'TV Today Network ',
  'Texmaco Infrastructure & Holdings ',
  'Srikalahasthi Pipes ',
  'Mindtree ',
  'Sundaram-Clayton ',
  'Vindhya Telelink ',
  'INOX Leisure ',
  'LE Travenues Technology (IXIGO) ',
  'D. P. Abhushan ',
  'Tourism Finance Corp of India ',
  'TeamLease Services ',
  'J G Chemicals ',
  'Taj GVK Hotels & Resorts ',
  'Wendt (India) ',
  'Allied Blenders & Distillers ',
  'Vinyl Chemicals (India) ',
  'Vraj Iron & Steel ',
  'Shree Tirupati Balajee Agro Trading Company ',
  'Ecos India Mobility & Hospitality ',
  'Spencer Retail ',
  'EPack Durables ',
  'Ujjivan Financial Services  ',
  'Harrisons Malyalam ',
  'HT Media ',
  'Birla Tyres ',
  'GVK Power & Infrastructure ',
  'ISMT ',
  'Gujarat Sidhee Cement ',
  'Indostar Capital Finance  ']
// // Function to fetch data for each company
// const fetchCompanyData = async (company) => {
//   const url = `https://www.marketsmojo.com/common_services/searchScrips?section=stock&domain=mm&SearchPhrase=${encodeURIComponent(company)}&u=W29iamVjdCBPYmplY3Rd`;
//   try {
//       const response = await axios.get(url);
//       console.log(`Data for ${company}:`, response.data);
//       return response.data;  // Return the data to be used in response
//   } catch (error) {
//       console.error(`Error fetching data for ${company}:`, error);
//       return null;  // Return null in case of an error
//   }
// };

// // Route to fetch symbol details for all companies
// app.get('/api/mmsymboldetails', async (req, res) => {
//   const results = [];

//   // Iterate through the list of companies and fetch data for each
//   for (const company of companies) {
//       const data = await fetchCompanyData(company);
//       if (data) {
//           results.push({ company, data });
//       }
//   }

//   // Send the collected data as a JSON response
//   res.json(results);
// });
const csvWriter = createCsvWriter({
    path: 'company_data.csv',
    header: [
        { id: 'Symbol', title: 'Symbol' },
        { id: 'Id', title: 'Id' },
    ]
});

// Function to fetch data for each company
const fetchCompanyData = async (company) => {
    const url = `https://www.marketsmojo.com/common_services/searchScrips?section=stock&domain=mm&SearchPhrase=${encodeURIComponent(company)}&u=W29iamVjdCBPYmplY3Rd`;
    try {
        const response = await axios.get(url);
        const dataArray = response.data;
        
        if (dataArray.length > 0) {
            // Picking the first object as an example (you can change logic as needed)
            const firstResult = dataArray[0]; 
            const symbol = firstResult.Symbol || 'N/A';
            const Id = firstResult.Id || 'N/A';
            console.log(firstResult)
            console.log(`Data for ${company}: Symbol - ${symbol}, Id - ${Id}`);

            return { Symbol: symbol, Id: Id };
        } else {
            console.error(`No data found for ${company}`);
            return null;
        }
    
        console.log(`Data for ${company}:`,response.data, response.data['ScriptCode']);

        // Assuming the response contains Symbol and ScriptCode (adjust if necessary)
        const Symbol = response.data.Symbol || company;
        const Id = response.data.Id || 'N/A';

        return { Symbol: Symbol, Id: Id };
    } catch (error) {
        console.error(`Error fetching data for ${company}:`, error);
        return null;  // Return null in case of an error
    }
};

// Route to fetch symbol details for all companies and write to CSV
app.get('/api/mmsymboldetails', async (req, res) => {
    const results = [];

    // Iterate through the list of companies and fetch data for each
    for (const company of companies) {
        const data = await fetchCompanyData(company);
        if (data) {
            results.push(data);
        }
    }

    // Write data to CSV
    csvWriter.writeRecords(results)
        .then(() => {
            console.log('CSV file written successfully');
            res.send('CSV file created successfully.');
        })
        .catch((error) => {
            console.error('Error writing to CSV:', error);
            res.status(500).send('Error creating CSV file.');
        });
});



app.get('/api/mmsymbolfetcher', async function (req, res) {
  const { Parser } = require('json2csv');
  const baseUrl = 'https://frapi.marketsmojo.com/stocks_Footer/get_stocks?alphabet=';
  let result = [];

  // Iterate through alphabet from 'a' to 'z'
  for (let charCode = 97; charCode <= 122; charCode++) {
    const alphabet = String.fromCharCode(charCode); // Convert char code to alphabet (a-z)
    const url = `${baseUrl}${alphabet}`;

    try {
      const response = await fetch(url);
      const jsonResponse = await response.json();

      // Check if data exists in the response and append it to result
      if (jsonResponse && jsonResponse.data) {
        result = result.concat(jsonResponse.data);
      }
    } catch (error) {
      console.error(`Error fetching data for alphabet ${alphabet}:`, error);
    }
  }

  // Iterate through numbers '1' to '10'
  for (let num = 1; num <= 10; num++) {
    const url = `${baseUrl}${num}`;

    try {
      const response = await fetch(url);
      const jsonResponse = await response.json();

      // Check if data exists in the response and append it to result
      if (jsonResponse && jsonResponse.data) {
        result = result.concat(jsonResponse.data);
      }
    } catch (error) {
      console.error(`Error fetching data for number ${num}:`, error);
    }
  }

  // Map result to desired format (id, company, url)
  const csvData = result.map(item => ({
    id: item.Id,
    company: item.Company,
    url: item.url
  }));

  // Convert JSON to CSV
  const json2csvParser = new Parser({ fields: ['id', 'company', 'url'] });
  const csv = json2csvParser.parse(csvData);

  // Write CSV to file
  fs.writeFile('stocks_data.csv', csv, function (err) {
    if (err) {
      return console.error('Error writing to CSV file:', err);
    }
    console.log('CSV file has been saved.');
  });
});


// const { Parser } = require('json2csv');


//   const baseUrl = 'https://frapi.marketsmojo.com/stocks_Footer/get_stocks?alphabet=';
//   let result = [];

//   // Iterate through alphabet from 'a' to 'z'
//   for (let charCode = 97; charCode <= 122; charCode++) {
//     const alphabet = String.fromCharCode(charCode); // Convert char code to alphabet (a-z)
//     const url = `${baseUrl}${alphabet}`;

//     try {
//       const response = await fetch(url);
//       const jsonResponse = await response.json();

//       // Check if data exists in the response and append it to result
//       if (jsonResponse && jsonResponse.data) {
//         result = result.concat(jsonResponse.data);
//         console.log(result)
//       }
//     } catch (error) {
//       console.error(`Error fetching data for alphabet ${alphabet}:`, error);
//     }
//   }

//   // Map result to desired format (id, company, url)
//   const csvData = result.map(item => ({
//     id: item.Id,
//     company: item.Company,
//     url: item.url
//   }));

//   // Convert JSON to CSV
//   const json2csvParser = new Parser({ fields: ['id', 'company', 'url'] });
//   const csv = json2csvParser.parse(csvData);

//   // Write CSV to file
//   fs.writeFile('stocks_data.csv', csv, function (err) {
//     if (err) {
//       return console.error('Error writing to CSV file:', err);
//     }
//     console.log('CSV file has been saved.');
//   });

// });




    
  app.get('/ttvolnmcinsight', async function (req, res) {

    ttvolbreakoutpg();
    mcinsightspg();
    // trendlyneDVMpg();
  });
  // app.use('/',(req,res) => {res.json({message:"Hi Amit!!!!"})})
  app.use('/api/trendlynecookie', async function (req, res) {

            
   
    let browser = null
    console.log('spawning chrome headless')
    try {
      const start = Date.now();
      const executablePath =  await chromium.executablePath()
    
      browser = await puppeteer.launch({
        args: chromium.args,
      
    executablePath:executablePath ,
    headless:true,
     ignoreHTTPSErrors: true,
 
 })

 page = await browser.newPage();
 await page.setCacheEnabled(true)
 
 const targetUrl = 'https://trendlyne.com/visitor/loginmodal/'
 await page.goto(targetUrl, {
   waitUntil: ["domcontentloaded"]
 })

    await page.type('#id_login', process.env.TRENDLYNE_EMAIL);
    
    await page.type('#id_password', process.env.TRENDLYNE_PASSWORD);
  
     
cookie = await page.cookies()
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

 
   axiosApiInstance
     .post('/updateOne', {
       collection: 'cookie',
       database: 'Trendlynecookie',
       dataSource: 'Cluster0',
       filter: {},
       update: {
         $set: {
           "csrf":  process.env.csrf,
           "trnd":  process.env.trnd,
           "time": start
         },
       },
       upsert: true,
     })
     .then(() => {
       console.log('Trendlyne cookie Data updated successfully');
       
     })
     .catch((error) => {
       console.log('Error while updating data:', error);
      
     });

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
  

// app.get('/trendlynecookiepg', async function (req, res) {
 
    
   
//     let browser = null
//     console.log('spawning chrome headless')
//     try {
//       const start = Date.now();
//       const executablePath = await chromium.executablePath() 
    
//       browser = await chromium.puppeteer.launch({
//              args: [chromium.args, '--no-sandbox', '--disable-setuid-sandbox'],
           
//          executablePath:executablePath ,
//          headless: chromium.headless,
//           ignoreHTTPSErrors: true,
      
//       })
     
//       page = await browser.newPage();
//       await page.setCacheEnabled(true)
      
//       const targetUrl = 'https://trendlyne.com/visitor/loginmodal/'
//       await page.goto(targetUrl, {
//         waitUntil: ["domcontentloaded"]
//       })
     
//          await page.type('#id_login', process.env.TRENDLYNE_EMAIL);
         
//          await page.type('#id_password', process.env.TRENDLYNE_PASSWORD);
       
          
//     cookie = await page.cookies()
     
//     for (let val in cookie){
     
//         if (cookie[val].name == '.trendlyne'){
//           process.env.trnd=cookie[val].value
        
//        }}
//        console.log( process.env.trnd)
//        for (let val in cookie){
//        if (cookie[val].name == 'csrftoken'){
//          process.env.csrf=cookie[val].value
      
//       }
//     }
//     console.log( process.env.csrf)

//     const createTableQuery = `
//       CREATE TABLE IF NOT EXISTS cookie (
//         id SERIAL PRIMARY KEY,
//         csrf VARCHAR(255),
//         trnd VARCHAR(255),
//         time TIMESTAMP
//       )
//     `;

//     try {
//       await pool.query(createTableQuery);
//       console.log('Table created successfully or already exists on DB1');

//       const deleteQuery = `
//       DELETE FROM cookie`;
//       const updateQuery = `
      
//       INSERT INTO cookie (csrf, trnd, time)
//       VALUES ($1, $2, to_timestamp($3 / 1000.0))
//       RETURNING *
//     `;
//       const values = [process.env.csrf, process.env.trnd, start];

//       try {
//         await pool.query(deleteQuery);
//         await pool.query(updateQuery, values);
//         console.log('Trendlyne cookie Data updated successfully');
//       } catch (error) {
//         console.log('Error while updating data:', error);
//       }
//        const createIndexQuery = `
//         CREATE INDEX IF NOT EXISTS csrf_idx ON cookie (csrf)
//       `;
//       try {
//         await pool.query(createIndexQuery);
//         console.log('Index created successfully or already exists on DB1');
//       } catch (error) {
//         console.log('Error creating index:', error);
//       }

//     } catch (error) {
//       console.log('Error creating table:', error);
//       return {
//         statusCode: 500,
//         body: JSON.stringify({ msg: error.message }),
//       };
//     }

//     // Insert into pooli Database
//     try {
//       await pool1.query(createTableQuery);
//       console.log('Table created successfully or already exists on DB2');

//       const deleteQuery = `
//       DELETE FROM cookie`;
//       const updateQuery = `
      
//       INSERT INTO cookie (csrf, trnd, time)
//       VALUES ($1, $2, to_timestamp($3 / 1000.0))
//       RETURNING *
//     `;
//       const values = [process.env.csrf, process.env.trnd, start];

//       try {
//         await pool1.query(deleteQuery);
//         await pool1.query(updateQuery, values);
//         console.log('Trendlyne cookie Data updated successfully on DB2');
//       } catch (error) {
//         console.log('Error while updating data:', error);
//       }
//        const createIndexQuery = `
//         CREATE INDEX IF NOT EXISTS csrf_idx ON cookie (csrf)
//       `;
//       try {
//         await pool1.query(createIndexQuery);
//         console.log('Index created successfully or already exists on DB2');
//       } catch (error) {
//         console.log('Error creating index:', error);
//       }

//       const timeTaken = Date.now() - start;
//       console.log(`Total time taken: ${timeTaken} milliseconds`);
//     } catch (error) {
//       console.log('Error creating table:', error);
//       return {
//         statusCode: 500,
//         body: JSON.stringify({ msg: error.message }),
//       };
//     }
//   } catch (error) {
//     console.log(error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ msg: error.message }),
//     };
//   } finally {
//     if (browser) {
//        await browser.close();
//     }
//   }
// });
// async function trendlynecookiepg (req, res) {
 
    
   
//   let browser = null
//   console.log('spawning chrome headless')
//   try {
//     const start = Date.now();
//     console.log(start)
//     const executablePath = process.env.CHROME_EXECUTABLE_PATH || await chromium.executablePath() 
  
//     browser = await puppeteer.launch({
//            args: chromium.args,
         
//        executablePath:executablePath ,
//        headless:true,
//         ignoreHTTPSErrors: true,
    
//     })
   
//     page = await browser.newPage();
//     await page.setCacheEnabled(true)
    
//     const targetUrl = 'https://trendlyne.com/visitor/loginmodal/'
//     await page.goto(targetUrl, {
//       waitUntil: ["domcontentloaded"]
//     })
   
//        await page.type('#id_login', process.env.TRENDLYNE_EMAIL);
       
//        await page.type('#id_password', process.env.TRENDLYNE_PASSWORD);
     
        
//   cookie = await page.cookies()
   
//   for (let val in cookie){
   
//       if (cookie[val].name == '.trendlyne'){
//         process.env.trnd=cookie[val].value
      
//      }}
//      console.log( process.env.trnd)
//      for (let val in cookie){
//      if (cookie[val].name == 'csrftoken'){
//        process.env.csrf=cookie[val].value
    
//     }
//   }
//   console.log( process.env.csrf)

//   // const createTableQuery = `
//   //   CREATE TABLE IF NOT EXISTS cookie (
//   //     id SERIAL PRIMARY KEY,
//   //     csrf VARCHAR(255),
//   //     trnd VARCHAR(255),
//   //     time TIMESTAMP
//   //   )
//   // `;

//   try {
//     await pool.query(createTableQuery);
//     console.log('Table created successfully or already exists on DB1');

//   //   const deleteQuery = `
//   //   DELETE FROM cookie`;
//   //   const updateQuery = `
    
//   //   INSERT INTO cookie (csrf, trnd, time)
//   //   VALUES ($1, $2, to_timestamp($3 / 1000.0))
//   //   RETURNING *
//   // `;
//     const values = [process.env.csrf, process.env.trnd, start];

//     try {
//       // await pool.query(deleteQuery);
//       // await pool.query(updateQuery, values);
//       console.log('Trendlyne cookie Data updated successfully');
//     } catch (error) {
//       console.log('Error while updating data:', error);
//     }
//     //  const createIndexQuery = `
//     //   CREATE INDEX IF NOT EXISTS csrf_idx ON cookie (csrf)
//     // `;
//     try {
//       // await pool.query(createIndexQuery);
//       console.log('Index created successfully or already exists on DB1');
//     } catch (error) {
//       console.log('Error creating index:', error);
//     }

//   } catch (error) {
//     // console.log('Error creating table:', error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ msg: error.message }),
//     };
//   }

//   // Insert into pooli Database
//   try {
//     // await pool1.query(createTableQuery);
//     // console.log('Table created successfully or already exists on DB2');

//   //   const deleteQuery = `
//   //   DELETE FROM cookie`;
//   //   const updateQuery = `
    
//   //   INSERT INTO cookie (csrf, trnd, time)
//   //   VALUES ($1, $2, to_timestamp($3 / 1000.0))
//   //   RETURNING *
//   // `;
//     // const values = [process.env.csrf, process.env.trnd, start];

//     try {
//       // await pool1.query(deleteQuery);
//       // await pool1.query(updateQuery, values);
//       // console.log('Trendlyne cookie Data updated successfully on DB2');
//     } catch (error) {
//       console.log('Error while updating data:', error);
//     }
//     //  const createIndexQuery = `
//     //   CREATE INDEX IF NOT EXISTS csrf_idx ON cookie (csrf)
//     // `;
//     try {
//       // await pool1.query(createIndexQuery);
//       // console.log('Index created successfully or already exists on DB2');
//     } catch (error) {
//       console.log('Error creating index:', error);
//     }

//     const timeTaken = Date.now() - start;
//     console.log(`Total time taken: ${timeTaken} milliseconds`);
//   } catch (error) {
//     console.log('Error creating table:', error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ msg: error.message }),
//     };
//   }
// } catch (error) {
//   console.log(error);
//   return {
//     statusCode: 500,
//     body: JSON.stringify({ msg: error.message }),
//   };
// } finally {
//   if (browser) {
//     await browser.close();
//   }
// }
// }
  
//   async function mcinsight (req, res) {
//     const start = Date.now();
//     const obj = [];
  
//     fs.readFile('./tlid.json', async (err, data) => {
//       if (err) {
//         console.log('Error while reading file:', err);
      
//         return;
//       }
  
//       try {
//         // Parse the data into an array
//         const symbols = JSON.parse(data);
  
//         // Process 100 symbols at a time
//         for (let i = 0; i < symbols.length; i += 100) {
//           const symbolBatch = symbols.slice(i, i + 100);
  
//           const promises = symbolBatch.map(async symbol => {
//             try {
//               const response = await fetch(
//                 `https://api.moneycontrol.com//mcapi//v1//extdata//mc-insights?scId=${symbol.mcsymbol}&type=d`,
//                 {
//                   headers: { Accept: 'application/json' },
//                 }
//               );
  
//               if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//               }
  
//               const data1 = await response.json();
              
//               console.log(`${symbol.name}`);
  
//               obj.push({
//                 Name: `${symbol.name}`,
//                 FnO: data1.data['insightData']['price'][4],
//                 DealData: data1.data['insightData']['price'][5],
               
//               });
//             } catch (error) {
//               console.log('Error while fetching data:', error);
//             }
//           });
  
//           await Promise.all(promises);
//         }
  
//         const timeTaken = Date.now() - start;
//         console.log(`Total time taken: ${timeTaken} milliseconds`);
  
//         axiosApiInstance
//           .post('/updateOne', {
//             collection: 'mcinsights',
//             database: 'MC',
//             dataSource: 'Cluster0',
//             filter: {},
//             update: {
//               $set: {
//                 output: obj,
//                 time: start,
//               },
//             },
//             upsert: true,
//           })
//           .then(() => {
//             console.log('Data updated successfully');
            
//           })
//           .catch((error) => {
//             console.log('Error while updating data:', error);
           
//           });
//       } catch (error) {
//         console.log('Error while parsing data:', error);
      
//       }
//     });
//   };

    async function Trendlynecookie(req, res) {
   
    let browser = null
    console.log('spawning chrome headless')
    try {
      const start = Date.now();
      const executablePath = process.env.CHROME_EXECUTABLE_PATH || await chromium.executablePath() 
    
      browser = await puppeteer.launch({
             args: chromium.args,
           
         executablePath:executablePath ,
         headless:true,
          ignoreHTTPSErrors: true,
      
      })
     
      page = await browser.newPage();
      await page.setCacheEnabled(true)
      
      const targetUrl = 'https://trendlyne.com/visitor/loginmodal/'
      await page.goto(targetUrl, {
        waitUntil: ["domcontentloaded"]
      })
     
         await page.keyboard.type('#id_login', process.env.TRENDLYNE_EMAIL);
         
         await page.keyboard.type('#id_password', process.env.TRENDLYNE_PASSWORD);
       
          
    cookie = await page.cookies()
 
    for (let val in cookie){
     
        if (cookie[val].name == '.trendlyne'){
          process.env.trnd=cookie[val].value
        
       }}
       for (let val in cookie){
       if (cookie[val].name == 'csrftoken'){
         process.env.csrf=cookie[val].value
      
      }
    }
   
     
  
      
        axiosApiInstance
          .post('/updateOne', {
            collection: 'cookie',
            database: 'Trendlynecookie',
            dataSource: 'Cluster0',
            filter: {},
            update: {
              $set: {
                "csrf":  process.env.csrf,
                "trnd":  process.env.trnd,
                "time": start
              },
            },
            upsert: true,
          })
          .then(() => {
            console.log('Trendlyne cookie Data updated successfully');
           
          })
          .catch((error) => {
            console.log('Error while updating data:', error);
           
          });
  
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
          // await browser.close();
      
      }
    }
   
  };
 
  
  app.get('/Opstracookie', async function (req, res) {
   
    let browser = null
    console.log('spawning chrome headless')
    try {
      const start = Date.now();
      const executablePath = process.env.CHROME_EXECUTABLE_PATH || await chromium.executablePath() 
    
      browser = await puppeteer.launch({
             args: chromium.args,
           
         executablePath:executablePath ,
         headless:true,
          ignoreHTTPSErrors: true,
      
      })
     
      page = await browser.newPage();
      await page.setCacheEnabled(true)
      
      const targetUrl = "https://opstra.definedge.com/ssologin"
      await page.goto(targetUrl, {
        waitUntil: ["domcontentloaded"]
      })
     
         await page.keyboard.type('#username', process.env.TRENDLYNE_EMAIL);
         
         await page.keyboard.type('#password', process.env.OPSTRA_PASSWORD);
       
          
    cookie = await page.cookies()
 
    for (let val in cookie){
     
        if (cookie[val].name == 'JSESSIONID'){
          process.env.jsessionid=cookie[val].value
        
       }
       if (cookie[val].name == 'DSESSIONID'){
        process.env.dsessionid=cookie[val].value
      
     }} 
 
   
     
  
      
      axiosApiInstance
      .post('/updateOne', {
        collection: 'cookie',
        database: 'Opstracookie',
        dataSource: 'Cluster0',
        filter: {},
        update: {
          $set: {
            
            "jsessionid":  process.env.jsessionid,
            "time": start
          },
        },
        upsert: true,
      })
      .then(() => {
        console.log('Opstra cookie Data updated successfully');
       
      })
      .catch((error) => {
        console.log('Error while updating data:', error);
       
      });

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
  
 
  //*This is ET now Stock Data Details used in Share component using parallel api run
  app.get('/etsharetoday', function (req, res) {

    let eqsymbol = req.query.eqsymbol
  
    var url6 = 'https://ettechcharts.indiatimes.com/ETLiveFeedChartRead/livefeeddata?scripcode=' + eqsymbol + 'EQ&exchangeid=50&datatype=intraday&filtertype=1MIN&tagId=10648&firstreceivedataid=&lastreceivedataid=&directions=all&scripcodetype=company'
    request(url6, function (error, response, html) {
      if (!error) {
        res.json(JSON.parse(response.body))
      }
    })
  })
 

  // app.get('/trendlyneDVMpg', async function (req, res) {
  //   const start = Date.now();
  //   const obj = [];
  
  //   try {
        
      
  //        const createTableQuery = `
  //       CREATE TABLE IF NOT EXISTS DVM (
  //         id SERIAL PRIMARY KEY,
  //         obj JSONB,
  //         time TIMESTAMP
  //       )
  //     `;
  //     await pool1.query(createTableQuery);
  //   const deleteQuery = `DELETE FROM DVM`;
  //     await pool1.query(deleteQuery);
  
  //     // Create an index on the "volBreakout" field
  //     const createIndexQuery = `
  //       CREATE INDEX IF NOT EXISTS DurabilityScore_idx ON DVM (((obj->>'DurabilityScore')::numeric))
  //     `;
  //     await pool1.query(createIndexQuery);
  //     const data = fs.readFileSync('./tlid.json');
  //     const symbols = JSON.parse(data);
  
  //     for (let i = 0; i < symbols.length; i += 100) {
  //       const symbolBatch = symbols.slice(i, i + 100);
  
  //       const promises = symbolBatch.map(async (symbol) => {
  //         try {
  //           const response = await fetch(
  //             `https://trendlyne.com/mapp/v1/stock/chart-data/${symbol.tlid}/SMA/?format=json`,
  //             {
  //               headers: { Accept: 'application/json' },
  //             }
  //           );
  
  //           if (!response.ok) {
  //             throw new Error(`HTTP error! status: ${response.status}`);
  //           }
  
  //           const data1 = await response.json();
  //           console.log(`${symbol.name}`);
  
  //           obj.push({
  //             Name: `${symbol.name}`,
  //             DurabilityScore: data1.body['stockData'][6],
  //             DurabilityColor: data1.body['stockData'][9],
  //             VolatilityScore: data1.body['stockData'][7],
  //             VolatilityColor: data1.body['stockData'][10],
  //             MomentumScore: data1.body['stockData'][8],
  //             MomentumColor: data1.body['stockData'][11],

  //           });
  //         } catch (error) {
  //           console.log('Error while fetching data:', error);
  //         }
  //       });
  
  //       await Promise.all(promises);
  //     }
  
  //     const timeTaken = Date.now() - start;
  //     console.log(`Total time taken: ${timeTaken} milliseconds`);
  
  //     const connectionString = process.env.POSTGRESS_DATABASE_URL1;
  //     const dbName = 'Tickertape';
  //     const tableName = 'DVM';
  
  //     const client = new Client({ connectionString });
  //     await client.connect();
  
  //     const insertQuery = `
  //       INSERT INTO ${tableName} (obj, time)
  //       VALUES ($1, $2)
  //     `;
  
  //     const objString = JSON.stringify(obj);
  
  //     await client.query(insertQuery, [objString, new Date(start)]);
  //     await client.end();
  
  //     console.log('Data updated successfully');
  //     res.send('Data updated successfully');
  //   } catch (error) {
  //     console.log('Error while processing data:', error);
  //     res.status(500).send('Internal server error');
  //   }
  // });
  
  

  // app.get('/trendlyneDVM', function (req, res) {
  //   const start = Date.now();
  //   const obj = [];
  
  //   fs.readFile('./tlid.json', async (err, data) => {
  //     if (err) {
  //       console.log('Error while reading file:', err);
      
  //       return;
  //     }
  
  //     try {
  //       // Parse the data into an array
  //       const start = Date.now();
  //       const symbols = JSON.parse(data);
  
  //       // Process 100 symbols at a time
  //       for (let i = 0; i < symbols.length; i += 100) {
  //         const symbolBatch = symbols.slice(i, i + 100);
  
  //         const promises = symbolBatch.map(async symbol => {
  //           try {
  //             const response = await fetch(
  //               `https://trendlyne.com/mapp/v1/stock/chart-data/${symbol.tlid}/SMA/?format=json`,
  //               {
  //                 headers: { Accept: 'application/json' },
  //               }
  //             );
  
  //             if (!response.ok) {
  //               throw new Error(`HTTP error! status: ${response.status}`);
  //             }
  
  //             const data1 = await response.json();
  //             console.log(`${symbol.name}`);
  
  //             obj.push({
  //               Name: `${symbol.name}`,
  //               DurabilityScore: data1.body['stockData'][6],
  //               DurabilityColor: data1.body['stockData'][9],
  //               VolatilityScore: data1.body['stockData'][7],
  //               VolatilityColor: data1.body['stockData'][10],
  //               MomentumScore: data1.body['stockData'][8],
  //               MomentumColor: data1.body['stockData'][11],

  //             });
  //           } catch (error) {
  //             console.log('Error while fetching data:', error);
  //           }
  //         });
  
  //         await Promise.all(promises);
  //       }
  
  //       const timeTaken = Date.now() - start;
  //       console.log(`Total time taken: ${timeTaken} milliseconds`);
  
  //       axiosApiInstance
  //         .post('/updateOne', {
  //           collection: 'DVM',
  //           database: 'DVM',
  //           dataSource: 'Cluster0',
  //           filter: {},
  //           update: {
  //             $set: {
  //               output: obj,
  //               time: start,
  //             },
  //           },
  //           upsert: true,
  //         })
  //         .then(() => {
  //           console.log('Data updated successfully');
            
  //         })
  //         .catch((error) => {
  //           console.log('Error while updating data:', error);
           
  //         });
  //     } catch (error) {
  //       console.log('Error while parsing data:', error);
      
  //     }
  //   });
  // });




// app.get('/trendlyneDVMread', async function (req, res) {
//   const uri = process.env.MONGODB_ATLAS_CLUSTER_URI; // Ensure this contains the correct URI format
//   const dbName = 'DVM'; // Update with your database name
//   const collectionName = 'DVM'; // Update with your collection name
  
//   try {
//     // Connect to MongoDB
//     const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log('Connected successfully to MongoDB');
    
    
      
//     const db = client.db(dbName);
//     const collection = db.collection(collectionName);

//     // Log initial data to check structure
//     const sampleData = await collection.findOne({});
//     console.log('Sample data from MongoDB:', JSON.stringify(sampleData, null, 2));

//     // Perform the aggregation query to return only matching documents
//     const result = await collection.aggregate([
//       { $unwind: '$obj' },
//       {
//         $match: {
//           'obj.DurabilityScore': { $gt: 55 },
//           'obj.MomentumScore': { $gt: 50 },
//           'obj.VolatilityScore': { $gt: 50 }
//         }
//       },
//       {
//         $project: {
//           Name: '$obj.Name',
//           DurabilityScore: { $toDouble: '$obj.DurabilityScore' },
//           MomentumScore: { $toDouble: '$obj.MomentumScore' },
//           VolatilityScore: { $toDouble: '$obj.VolatilityScore' }
//         }
//       }
//     ]).toArray();

//     if (result.length === 0) {
//       console.log('No matching documents found');
//     } else {
//       console.log('Aggregation query result:', JSON.stringify(result, null, 2));
//     }

//     const timeDoc = await collection.findOne({}, { projection: { time: 1 } });
//     const time = timeDoc ? timeDoc.time : null;

//     console.log('Time:', time);

//     // Close the MongoDB client connection
//     await client.close();

//     // Send the results as a response
//     res.status(200).json({
//       body: result,
//       time: time
//     });
    
//   } catch (err) {
//     console.error('Error executing MongoDB query:', err);

//     // Handle the error response
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

  
// async function trendlyneDVM(req, res) {
 
//     const start = Date.now();
//     const obj = [];
  
//     fs.readFile('./tlid.json', async (err, data) => {
//       if (err) {
//         console.log('Error while reading file:', err);
      
//         return;
//       }
  
//       try {
//         // Parse the data into an array
//         const symbols = JSON.parse(data);
  
//         // Process 100 symbols at a time
//         for (let i = 0; i < symbols.length; i += 100) {
//           const symbolBatch = symbols.slice(i, i + 100);
  
//           const promises = symbolBatch.map(async symbol => {
//             try {
//               const response = await fetch(
//                 `https://trendlyne.com/mapp/v1/stock/chart-data/${symbol.tlid}/SMA/?format=json`,
//                 {
//                   headers: { Accept: 'application/json' },
//                 }
//               );
  
//               if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//               }
  
//               const data1 = await response.json();
//               console.log(`${symbol.name}`);
  
//               obj.push({
//                 Name: `${symbol.name}`,
//                 DurabilityScore: data1.body['stockData'][6],
//                 DurabilityColor: data1.body['stockData'][9],
//                 VolatilityScore: data1.body['stockData'][7],
//                 VolatilityColor: data1.body['stockData'][10],
//                 MomentumScore: data1.body['stockData'][8],
//                 MomentumColor: data1.body['stockData'][11],
//               });
//             } catch (error) {
//               console.log('Error while fetching data:', error);
//             }
//           });
  
//           await Promise.all(promises);
//         }
  
//         const timeTaken = Date.now() - start;
//         console.log(`Total time taken: ${timeTaken} milliseconds`);
  
//         axiosApiInstance
//           .post('/updateOne', {
//             collection: 'DVM',
//             database: 'DVM',
//             dataSource: 'Cluster0',
//             filter: {},
//             update: {
//               $set: {
//                 output: obj,
//                 time: start,
//               },
//             },
//             upsert: true,
//           })
//           .then(() => {
//             console.log('Data updated successfully');
            
//           })
//           .catch((error) => {
//             console.log('Error while updating data:', error);
           
//           });
//       } catch (error) {
//         console.log('Error while parsing data:', error);
      
//       }
//     });
//   };



// URL with placeholder for ind_id
const baseUrl = 'https://appfeeds.moneycontrol.com/jsonapi/market/marketmap&format=json&type=0&ind_id=';

// Function to delay execution for a specified time (2 seconds)
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to fetch data and store the result in a file
app.get('/api/mcsymbolfetchdata', async function fetchData() {
  let results = [];

  for (let ind_id = 1; ind_id <= 100; ind_id++) {
    const url = `${baseUrl}${ind_id}`;
    
    try {
      console.log(`Fetching data for ind_id: ${ind_id}`);
      const response = await fetch(url);
      const data = await response.json();
      
      // Save the fetched data
      results.push({ ind_id, data });

      // Wait for 2 seconds before making the next request
      await delay(2000);
      
    } catch (error) {
      console.error(`Error fetching data for ind_id: ${ind_id}`, error);
    }
  }

  // Save all results in a JSON file
  fs.writeFile('marketmap_data.json', JSON.stringify(results, null, 2), (err) => {
    if (err) {
      console.error('Error writing to file', err);
    } else {
      console.log('Data successfully written to marketmap_data.json');
    }
  });
});

// Start the process
// fetchData();
// app.get('/api/mcsymbolnamefetcher', async function (req, res) {
   
//   fs.readFile('./symbol.json', async (err, data) => {
//     if (err) {
//       console.log('Error while reading file:', err);
//       return;
//     }

//     try {
//       // Parse the data into an array
//       const symbols = JSON.parse(data);

//       // Process 100 symbols at a time
//       const symbolBatches = [];
//       for (let i = 0; i < symbols.length; i += 200) {
//         symbolBatches.push(symbols.slice(i, i + 200));
//       }

//       const results = [];

//       // Process each symbol batch asynchronously
//       for (const symbolBatch of symbolBatches) {
//         const promises = symbolBatch.map(async symbol => {
//           try {
//             const response = await fetch(`https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/${symbol.mcsymbol}`, {
// "headers": {
// "accept": "*/*",
// "accept-language": "en-US,en;q=0.9",
// "if-none-match": "F30DADFE47849461912656050BA26686",
// "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
// "sec-ch-ua-mobile": "?0",
// "sec-ch-ua-platform": "\"Windows\"",
// "sec-fetch-dest": "empty",
// "sec-fetch-mode": "cors",
// "sec-fetch-site": "same-site",
// "Referer": "https://www.moneycontrol.com/",
// "Referrer-Policy": "strict-origin-when-cross-origin"
// },
// "body": null,
// "method": "GET"
// }) 
//             const jsonData = await response.json();
//             const isinid = jsonData.data.isinid;
//             const sc_fullnm = jsonData.data.SC_FULLNM;
//             results.push(isinid,sc_fullnm);
//           } catch (error) {
//             console.error('Error processing symbol:', symbol.name, error);
//           }
//         });

//         await Promise.all(promises);
//       }

//       // Save the results as JSON to a file
//       const outputFilePath = './outputsymbolname.json';
//       fs.writeFile(outputFilePath, JSON.stringify(results, null, 2), err => {
//         if (err) {
//           console.error('Error while writing file:', err);
//           return;
//         }

//         console.log('JSON data saved to:', outputFilePath);
//       });

//       res.send('Processing complete');
//     } catch (error) {
//       console.error('Error:', error);
//       res.status(500).send('An error occurred');
//     }
//   });
// });
//   async function ttvolbreakoutpg(req, res) {
//     const start = Date.now();
//     const obj = [];
//     const tableName = 'Volume';
  
//     try {
        
      
//          const createTableQuery = `
//         CREATE TABLE IF NOT EXISTS Volume (
//           id SERIAL PRIMARY KEY,
//           obj JSONB,
//           time TIMESTAMP
//         )
//       `;
//       await pool.query(createTableQuery);
//     const deleteQuery = `DELETE FROM Volume`;
//       await pool.query(deleteQuery);
  
//       // Create an index on the "volBreakout" field
//       const createIndexQuery = `
//         CREATE INDEX IF NOT EXISTS volBreakout_idx ON Volume (((obj->>'volBreakout')::numeric))
//       `;
//       await pool.query(createIndexQuery);
//       const data = fs.readFileSync('./tlid.json');
//       const symbols = JSON.parse(data);
  
//       for (let i = 0; i < symbols.length; i += 100) {
//         const symbolBatch = symbols.slice(i, i + 100);
  
//         const promises = symbolBatch.map(async (symbol) => {
//           try {
//             const response = await fetch(
//               `https://quotes-api.tickertape.in/quotes?sids=${symbol.ttsymbol}`,
//               {
//                 headers: { Accept: 'application/json' },
//               }
//             );
  
//             if (!response.ok) {
//               throw new Error(`HTTP error! status: ${response.status}`);
//             }
  
//             const data1 = await response.json();
//             console.log(`${symbol.name}`);
//             console.log(data1['data'][0]['sid']);
  
//             obj.push({
//               Name: `${symbol.name}`,
//               sid: data1['data'][0]['sid'],
//               volBreakout: data1['data'][0]['volBreakout'],
//             });
//           } catch (error) {
//             console.log('Error while fetching data:', error);
//           }
//         });
  
//         await Promise.all(promises);
//       }
  
//       const timeTaken = Date.now() - start;
//       console.log(`Total time taken: ${timeTaken} milliseconds`);
  
//       const connectionString = process.env.POSTGRESS_DATABASE_URL;
//       const dbName = 'Tickertape';
//       const tableName = 'Volume';
  
//       const client = new Client({ connectionString });
//       await client.connect();
  
//       const insertQuery = `
//         INSERT INTO ${tableName} (obj, time)
//         VALUES ($1, $2)
//       `;
  
//       const objString = JSON.stringify(obj);
  
//       await client.query(insertQuery, [objString, new Date(start)]);
//       await client.end();
  
//       console.log('Data updated successfully');
//       res.send('Data updated successfully');
//     } catch (error) {
//       console.log('Error while processing data:', error);
//       res.status(500).send('Internal server error');
//     }
//   }
//  app.get('/ttvolbreakoutpg', async function (req, res) {
//   const start = Date.now();
//   const obj = [];

//   try {
      
    
//        const createTableQuery = `
//       CREATE TABLE IF NOT EXISTS Volume (
//         id SERIAL PRIMARY KEY,
//         obj JSONB,
//         time TIMESTAMP
//       )
//     `;
//     await pool.query(createTableQuery);
//   const deleteQuery = `DELETE FROM Volume`;
//     await pool.query(deleteQuery);

//     // Create an index on the "volBreakout" field
//     const createIndexQuery = `
//       CREATE INDEX IF NOT EXISTS volBreakout_idx ON Volume (((obj->>'volBreakout')::numeric))
//     `;
//     await pool.query(createIndexQuery);
//     const data = fs.readFileSync('./tlid.json');
//     const symbols = JSON.parse(data);

//     for (let i = 0; i < symbols.length; i += 100) {
//       const symbolBatch = symbols.slice(i, i + 100);

//       const promises = symbolBatch.map(async (symbol) => {
//         try {
//           const response = await fetch(
//             `https://quotes-api.tickertape.in/quotes?sids=${symbol.ttsymbol}`,
//             {
//               headers: { Accept: 'application/json' },
//             }
//           );

//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }

//           const data1 = await response.json();
//           console.log(`${symbol.name}`);
//           console.log(data1['data'][0]['sid']);

//           obj.push({
//             Name: `${symbol.name}`,
//             sid: data1['data'][0]['sid'],
//             volBreakout: data1['data'][0]['volBreakout'],
//           });
//         } catch (error) {
//           console.log('Error while fetching data:', error);
//         }
//       });

//       await Promise.all(promises);
//     }

//     const timeTaken = Date.now() - start;
//     console.log(`Total time taken: ${timeTaken} milliseconds`);

//     const connectionString = process.env.POSTGRESS_DATABASE_URL;
//     const dbName = 'Tickertape';
//     const tableName = 'Volume';

//     const client = new Client({ connectionString });
//     await client.connect();

//     const insertQuery = `
//       INSERT INTO ${tableName} (obj, time)
//       VALUES ($1, $2)
//     `;

//     const objString = JSON.stringify(obj);

//     await client.query(insertQuery, [objString, new Date(start)]);
//     await client.end();

//     console.log('Data updated successfully');
//     res.send('Data updated successfully');
//   } catch (error) {
//     console.log('Error while processing data:', error);
//     res.status(500).send('Internal server error');
//   }
// });

  // app.get('/ttvolbreakout', function (req, res) {
  //   const start = Date.now();
  //   const obj = [];
  
  //   fs.readFile('./tlid.json', async (err, data) => {
  //     if (err) {
  //       console.log('Error while reading file:', err);
      
  //       return;
  //     }
  
  //     try {
  //       // Parse the data into an array
  //       const symbols = JSON.parse(data);
  
  //       // Process 100 symbols at a time
  //       for (let i = 0; i < symbols.length; i += 100) {
  //         const symbolBatch = symbols.slice(i, i + 100);
  
  //         const promises = symbolBatch.map(async symbol => {
  //           try {
  //             const response = await fetch(
  //               `https://quotes-api.tickertape.in/quotes?sids=${symbol.ttsymbol}`,
  //               {
  //                 headers: { Accept: 'application/json' },
  //               }
  //             );
  
  //             if (!response.ok) {
  //               throw new Error(`HTTP error! status: ${response.status}`);
  //             }
  
  //             const data1 = await response.json();
  //             console.log(`${symbol.name}`);
  //             console.log(data1['data'][0]['sid'])
  
  //             obj.push({
  //               Name: `${symbol.name}`,
  //               sid:data1['data'][0]['sid'],
  //               volBreakout:data1['data'][0]['volBreakout']
  //             });
  //           } catch (error) {
  //             console.log('Error while fetching data:', error);
  //           }
  //         });
  
  //         await Promise.all(promises);
  //       }
  
  //       const timeTaken = Date.now() - start;
  //       console.log(`Total time taken: ${timeTaken} milliseconds`);
  
  //       axiosApiInstance
  //         .post('/updateOne', {
  //           collection: 'Volume',
  //           database: 'Tickertape',
  //           dataSource: 'Cluster0',
  //           filter: {},
  //           update: {
  //             $set: {
  //                obj,
  //               time: start,
  //             },
  //           },
  //           upsert: true,
  //         })
  //         .then(() => {
  //           console.log('Data updated successfully');
            
  //         })
  //         .catch((error) => {
  //           console.log('Error while updating data:', error);
           
  //         });
  //     } catch (error) {
  //       console.log('Error while parsing data:', error);
       
  //     }
  //   });
  // });

  

  // async function ttvolbreakout(req, res) {
  //   const start = Date.now();
  //   const obj = [];
  
  //   fs.readFile('./tlid.json', async (err, data) => {
  //     if (err) {
  //       console.log('Error while reading file:', err);
      
  //       return;
  //     }
  
  //     try {
  //       // Parse the data into an array
  //       const symbols = JSON.parse(data);
  
  //       // Process 100 symbols at a time
  //       for (let i = 0; i < symbols.length; i += 100) {
  //         const symbolBatch = symbols.slice(i, i + 100);
  
  //         const promises = symbolBatch.map(async symbol => {
  //           try {
  //             const response = await fetch(
  //               `https://quotes-api.tickertape.in/quotes?sids=${symbol.ttsymbol}`,
  //               {
  //                 headers: { Accept: 'application/json' },
  //               }
  //             );
  
  //             if (!response.ok) {
  //               throw new Error(`HTTP error! status: ${response.status}`);
  //             }
  
  //             const data1 = await response.json();
  //             console.log(`${symbol.name}`);
  //             console.log(data1['data'][0]['sid'])
  
  //             obj.push({
  //               Name: `${symbol.name}`,
  //               sid:data1['data'][0]['sid'],
  //               volBreakout:data1['data'][0]['volBreakout']
  //             });
  //           } catch (error) {
  //             console.log('Error while fetching data:', error);
  //           }
  //         });
  
  //         await Promise.all(promises);
  //       }
  
  //       const timeTaken = Date.now() - start;
  //       console.log(`Total time taken: ${timeTaken} milliseconds`);
  
  //       axiosApiInstance
  //         .post('/updateOne', {
  //           collection: 'Volume',
  //           database: 'Tickertape',
  //           dataSource: 'Cluster0',
  //           filter: {},
  //           update: {
  //             $set: {
  //                obj,
  //               time: start,
  //             },
  //           },
  //           upsert: true,
  //         })
  //         .then(() => {
  //           console.log('Data updated successfully');
          
  //         })
  //         .catch((error) => {
  //           console.log('Error while updating data:', error);
           
  //         });
  //     } catch (error) {
  //       console.log('Error while parsing data:', error);
        
  //     }
  //   });
  // };
  app.listen(  9000,  () => {
    console.log('Your node is running on port 9000');
  });
  module.exports = app;
