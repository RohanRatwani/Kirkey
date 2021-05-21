const { response } = require('express');
const pool = require('../../db')
const queries = require('./queries')


function handleException(request, message, error) {
    var msg = "";
    msg += "Code: " + request.status + "\n";
    msg += "Text: " + request.statusText + "\n";
    if (request.responseJSON != null) {
      msg += "Message: " +
             request.responseJSON.Message + "\n";
    }
    alert(msg);
  }
  


const getauthors = (req,res) => {
    // console.log('getting authors')
    
    pool.query(queries.getauthors, (error,results) => {
        // console.log(response)
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};


const getauthorbyname = (req,res) => {
    
    
    const name = req.params.name;

    try{
        pool.query(queries.getauthorbyname,[name], (error,results) => {
            // console.log(response)
            if (error) {
                handleException(request, message, error);
            };
            // if (res.status != 200) throw res.status
            if ((results.rows).length == 0 || results.rows == undefined) throw res.status(404).json('Status code 404: Author not found')
            res.status(200).json(results.rows);
        });
    }
    catch(error){
        return res.status.json(error)
    }

};

module.exports = {
    getauthors,
    getauthorbyname
}