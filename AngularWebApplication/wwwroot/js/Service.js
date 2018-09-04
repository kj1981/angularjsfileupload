// <reference path="Module.js">

app.service('crudService', function ($http, Upload) {

    var baseUrl = 'http://localhost:50829';

    this.uploadFile = function (file, array) {
       
        return Upload.upload({
            url: baseUrl + "/api/books/file/upload",
            arrayKey: '[]',
            data: { file: file, array: array },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(function (res) {
           
            return res;
        }, function (err) {
            
            throw err;
        });
    };
  
});