var app = angular.module('myApp', []);
app.controller('myController', ['$scope', function ($scope) {
    $scope.list = [
        {'id': 101},
        {'id': 102},
        {'id': 103},
        {'id': 104},
        {'id': 105},
        {'id': 106},
        {'id': 107}
    ];
    $scope.checked = [];
    $scope.selectAll = function () {
        if ($scope.select_all) {
            $scope.checked = [];
            angular.forEach($scope.list, function (i) {
                i.checked = true;
                $scope.checked.push(i.id);
            })
        } else {
            angular.forEach($scope.list, function (i) {
                i.checked = false;
                $scope.checked = [];
            })
        }
        console.log($scope.checked);
    };
    $scope.selectOne = function () {
        angular.forEach($scope.list, function (i) {
            var index = $scope.checked.indexOf(i.id);
            if (i.checked && index === -1) {
                $scope.checked.push(i.id);
            } else if (!i.checked && index !== -1) {
                $scope.checked.splice(index, 1);
            }
        });

        if ($scope.list.length === $scope.checked.length) {
            $scope.select_all = true;
        } else {
            $scope.select_all = false;
        }
        console.log($scope.checked);
    }
}]);