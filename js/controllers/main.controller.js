(function () {
    'use strict';

    angular.module('app_name')
        .controller('AlumnController', alumnController);

    function alumnController($scope, $localStorage,
    $sessionStorage, $http) {
        $scope.alumns = [];
        $scope.$storage = $localStorage;
        
        $scope.addAlumn = addAlumn;
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

        function resetForm() {
            $scope.newAlumn = {};
        }

        
    }

    //$scope.newUser=amgular.copy(user);
})();