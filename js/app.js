var myapp = angular.module('sample', []);

myapp.controller('CtrlOne', ['$scope', function($scope) {
    console.log('Hello');

    $scope.add = function() {
        console.log('add');
        $scope.result = $scope.num1 + $scope.num2;
    };

    $scope.sub = function() {
        $scope.result = $scope.num1 - $scope.num2;
    };

    $scope.div = function() {
        $scope.result = $scope.num1 / $scope.num2;
    };

    $scope.mul = function() {
        $scope.result = $scope.num1 * $scope.num2;
    };
}]);