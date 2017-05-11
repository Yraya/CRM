(function () {
    'use strict';

    angular.module('app_name')
        .controller('AlumnController', alumnController);

    function alumnController($scope, $http) {
        $scope.alumns = [];

        $scope.addAlumn = addAlumn;
        $scope.resetForm = resetForm;
        $scope.modify = modify;
        $scope.applyModification = applyModification;
        $scope.deleteAlumn = deleteAlumn;
        $scope.myFilter = myFilter;

        function addAlumn() {
            checkImageExits().then(function () {
                $scope.newAlumn.id = generateID();
                $scope.alumns.push($scope.newAlumn);
                save();
                resetForm();
            });
        }

        function save() {
            localStorage.setItem("alumnsData", JSON.stringify($scope.alumns));
        }

        function load() {
            $scope.alumns = JSON.parse(localStorage.getItem("alumnsData"));
        }

        function modify(alumn) {
            $scope.newAlumn = angular.copy(alumn);
            $scope.modifying = true;
        }

        function applyModification() {
            checkImageExits().then(function () {
                var index = getAlumnPosition($scope.newAlumn.id);
                if (index != -1)
                    $scope.alumns[index] = $scope.newAlumn;
                save();
                resetForm();
            });
        }

        function getAlumnPosition(alumnID) {
            for (var i = 0; i < $scope.alumns.length; i++) {
                if ($scope.alumns[i].id === alumnID) {
                    return i;
                }
            }
            return -1;
        }

        function generateID() {
            return Math.random().toString(36).substr(2, 10);
        }

        function resetForm() {
            $scope.newAlumn = {};
            $scope.modifying = false;
        }

        function deleteAlumn(alumn) {
            if (confirm("Are you sure you want to delete '" + alumn.name + "'?")) {
                var index = getAlumnPosition(alumn.id);
                $scope.alumns.splice(index, 1);
                save();
            }
        }

        function myFilter(alumn) {
            if (alumn[$scope.option].includes($scope.search))
                return true;
            return false;
        }

        function init() {
            if (localStorage.getItem("alumnsData")) {
                load();
            }
            $scope.modifying = false;
        }

        function resetAlumns() {
            $scope.alumns = [];
            localStorage.removeItem()("alumnsData");
        };

        function checkImageExits() {
            var imageUrl = $scope.newAlumn.photoUrl;
            console.log(imageUrl);
            return $http.get(imageUrl)
                .then(
                    function (response) {
                        console.log(response);
                    },
                    function (response) {
                        $scope.newAlumn.photoUrl = "images/image-not-found.svg";
                    });
        }


        init();
    }
})();