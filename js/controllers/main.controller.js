(function () {
    'use strict';

    angular.module('app_name')
        .controller('AlumnController', alumnController);

    function alumnController($scope) {
        $scope.alumns = [];

        $scope.addAlumn = addAlumn;
        $scope.resetForm = resetForm;
        $scope.modify = modify;

        function addAlumn() {
            $scope.alumns.push($scope.newAlumn);
            save();
            resetForm();
        }

        function save() {
            localStorage.setItem("alumnsData", JSON.stringify($scope.alumns));
        }

        function load() {
            $scope.alumns = JSON.parse(localStorage.getItem("alumnsData"));
        }
        

        function resetForm() {
            $scope.newAlumn = {};
        }

        function init() {
            if (localStorage.getItem("alumnsData")) {
                load();
            }
        }

        init();
    }
})();