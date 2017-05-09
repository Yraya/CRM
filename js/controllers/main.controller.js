(function () {
    'use strict';

    angular.module('app_name')
        .controller('AlumnController', alumnController);

    function alumnController($scope, $localStorage,
    $sessionStorage, $http) {
        $scope.alumns = [];
        $scope.$storage = $localStorage;
        
        $scope.addAlumn = addAlumn;
        //$scope.canAddAlumn = canAddAlumn;
        $scope.resetForm = resetForm;

        function addAlumn() {
            $scope.alumns.push($scope.newAlumn);
            resetForm();
            console.log($localStorage);
        }
        
        function save(){
            $localStorage.alumnsData = $scope.alumns;
        }
        
        function load(){
            $scope.data = $localStorage.alumnsData;
        }
        
        /*
        function addAlumn() {
            checkImageExits().then(function () {
                $scope.alumns.push($scope.newAlumn);
                resetForm();
            });

        }*/

        /*
        function canAddAlumn() {
            if ($scope.newAlumn && $scope.newAlumn.name && $scope.newAlumn.photoUrl && $scope.newAlumn.phone && $scope.newAlumn.description) {
                return true;
            }
            
            return false;
        }
        */

        function resetForm() {
            $scope.newAlumn = {};
        }

        /*
        function checkImageExits() {
            var imageUrl = $scope.newAlumn.photoUrl;
            console.log(imageUrl);
            return $http.get(imageUrl)
                .then(function(response){
                console.log(response);
            })
                .catch(function (response) {
                    $scope.newAlumn.photoUrl = "images/image-not-found.svg";
                });
        }*/
        
        
    }



    //$scope.newUser=amgular.copy(user);
})();