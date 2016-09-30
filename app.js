'use strict';

// Declare app level module which depends on views, and components
var module = angular.module('Console', [
    'ngRoute',
    'xiaoqv',
    'yezhu',
    'company',
    'baoxiu'
]);

//配置路由
module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/xiaoqv'});
}]);

//控制器
module.controller('navController', ['$scope', '$location', function ($scope, $location) {

}]);
