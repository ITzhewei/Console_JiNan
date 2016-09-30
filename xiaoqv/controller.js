/**
 * Created by john on 2016/9/29.
 */
'use strict';
//模块
var module = angular.module('xiaoqv', ['ngRoute']);
//配置路由
module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/xiaoqv', {
        templateUrl: 'xiaoqv/view.html',
        controller: 'xiaoqvController'
    })
}]);

//控制器
module.controller('xiaoqvController', ['$scope', function ($scope) {

}]);
