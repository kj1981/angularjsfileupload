// <reference path="Module.js">
// <reference path="Service.js">

app.controller('BookListController', function BookListController($scope, $http, crudService) {
  
    $scope.uploadFile = function (file) {
        $scope.fileUploadError = true;
        if (file == '' || file == undefined) {
            $scope.fileUploadMessage = 'Error: Please select a File to upload.';
            return false;
        }
        else {
     
           $scope.fileUploadError = false;
         
            var myArray = [];
         
                myArray.push({
                    Id: "1",
                    Name: "Steve",
            });

                myArray.push({
                    Id: "2",
                    Name: "Adam",
                });           

                var promise = crudService.uploadFile(file, myArray);
            
         
        }
    }


});