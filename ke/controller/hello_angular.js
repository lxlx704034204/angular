/**
* 模块化之后的helloanguar
*/

var helloangular=angular.module('helloangular',[]);
helloangular.controller('helloNgCtrl',['$scope',function($scope){
    $scope.greeting={                  //scope的依赖注入
        text:'hello'
    };
}]);
