/**
* 模块化之后的helloanguar
*/

var helloangular=angular.module('helloangular',[]);
helloangular.controller('helloNgCtrl',['$scope',function($scope){
    $scope.greeting={               //注入scope
        text:'hello'
    };
}]);
