var myapp = angular.module('sample', []);

myapp.controller('CtrlOne', ['$scope', function($scope) {
    console.log('Hello');

    $scope.bNames = [{
        name: 'Add'
    }, {
        name: 'Sub'
    }, {
        name: 'Mul'
    }, {
        name: 'Div'
    }];

    $scope.operation = $scope.bNames[0];

    /* $scope.add = function() {
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
     };*/

    $scope.calculate = function() {
        console.log($scope.operation);
        if ($scope.operation.name == "Add") {
            console.log('add');
            $scope.result = +$scope.num1 + +$scope.num2;
        } else if ($scope.operation.name == "Sub") {
            console.log('sub');
            $scope.result = $scope.num1 - $scope.num2;
        } else if ($scope.operation.name == "Mul") {
            console.log('mul');
            $scope.result = $scope.num1 * $scope.num2;
        } else if ($scope.operation.name == "Div") {
            console.log('div');
            $scope.result = $scope.num1 / $scope.num2;

        }
    }
}]);