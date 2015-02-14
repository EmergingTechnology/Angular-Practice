var myapp = angular.module('sample', []);

myapp.controller('CtrlOne', ['$scope', function($scope) {
    console.log('Hello');

    $scope.add = function() {
        console.log('add');
        $scope.result = +$scope.num1 + +$scope.num2;
    };

    $scope.sub = function() {
        console.log('sub');
        $scope.result = $scope.num1 - $scope.num2;
    };

    $scope.div = function() {
        console.log('div');
        $scope.result = $scope.num1 / $scope.num2;
    };

    $scope.mul = function() {
        console.log('mul');
        $scope.result = $scope.num1 * $scope.num2;
    };
}]);