const express = require('express');
const router = express.Router();
var azure = require('azure-storage');
var fs = require('fs'); 
var tableSvc;

// connect


//Error handeling
const sendError=(err,res)=>{
    response.status = 501;
    response.message = typeof err == 'object' ? err.message:err;
    console.log(response);
    res.status(501).json(response);
};

// Response handeling
let response = {
 status:200,
 data:[],
 message:null
};

// Get markdown
router.get('/markdown', (req,res)=>{
    fs.readdir( 'dist/mjblogg/assets/Markdown/', (error,files)=>{
        if(!error){
            // Latest post first
            files.sort((a,b)=>{
                return parseInt(b) - parseInt(a);
            });
            res.json(files);
        }
    });    

});

// Get comment
router.get('/comment', (req,res)=>{
    tableSvc = azure.createTableService();
    var query = new azure.TableQuery().select("*");
    tableSvc.queryEntities('cmtable',query,null,function(error,result,response){
        if(!error){
            response.data = result.entries;
            res.json(response.data);
        }
        else{
            sendError(error,res);
        }
    })
});

// Post comment
router.post('/postComment', (req,res)=>{
    var entGen = azure.TableUtilities.entityGenerator;
    tableSvc = azure.createTableService();
    console.log(req.body);
    if(req.body.name != '' || req.body.PartitionKey != null){
        var task = {
            PartitionKey: entGen.String(req.body.PartitionKey), // fil
            RowKey: entGen.String(req.body.RowKey),       // text
            Timestamp : entGen.DateTime(req.body.Timestamp),       // nuvarande tid
            Person: entGen.String(req.body.Person)    // person
          };
    }
    tableSvc.insertEntity('cmtable',task, function (error, result, response) {
        if(!error){
          console.log('Successfully added comment to database');
        }
      });
})
module.exports = router;