/**
 * Created by john on 2016/9/29.
 */
'use strict';

var module = angular.module('baoxiu',['ngRoute']);

module.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/baoxiu',{
        templateUrl:'baoxiu/view.html',
        conteoller:'baoxiuController'
    })
}]);

module.controller('baoxiuController',['$scope',function ($scope) {

}]);
