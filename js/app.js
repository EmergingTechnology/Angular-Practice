var myapp = angular.module('sample', []);

myapp.filter('capatalizeOperation', function() {
    return function(input) {
        //TO uppercase the first character
        //return input.charAt(0).toUpperCase() + input.slice(1);

        //TO uppercase the Last character
        var subStr = input.substring(input.length - 1, input.length);
        return input.slice(input.length - 1, input.length) + subStr.toUpperCase();
    }
});

myapp.controller('CtrlOne', ['$scope', function($scope) {
    //  console.log('Hello');

    //console.log($scope.calculation);

    // declaring Array 
    $scope.calculations = [];

    $scope.bNames = [{
        name: 'Add'
    }, {
        name: 'Sub'
    }, {
        name: 'Mul'
    }, {
        name: 'Div'
    }];

    // declaring empty array with elements
    $scope.calculation = {
        num1: '',
        num2: '',
        operation: $scope.bNames[0]
    };

    //$scope.operation = $scope.bNames[0];

    $scope.calculate = function() {

        $scope.calculations.push($scope.calculation);

        console.log($scope.operation);
        if ($scope.calculation.operation.name == "Add") {
            console.log('add');
            $scope.result = +$scope.calculation.num1 + +$scope.calculation.num2;
        } else if ($scope.calculation.operation.name == "Sub") {
            console.log('sub');
            $scope.result = $scope.calculation.num1 - $scope.calculation.num2;
        } else if ($scope.calculation.operation.name == "Mul") {
            console.log('mul');
            $scope.result = $scope.calculation.num1 * $scope.calculation.num2;
        } else if ($scope.calculation.operation.name == "Div") {
            console.log('div');
            $scope.result = $scope.calculation.num1 / $scope.calculation.num2;
        }

        // clearing list and data from UI
        $scope.calculation = {
            num1: '',
            num2: '',
            operation: $scope.bNames[0]
        };
    }
}]);