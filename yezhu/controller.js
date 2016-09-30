/**
 * Created by john on 2016/9/29.
 */
'use strict';

var module = angular.module('yezhu',['ngRoute']);

module.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/yezhu',{
        templateUrl:'yezhu/view.html',
        conteoller:'yezhuController'
    })
}]);

module.controller('yezhuController',['$scope',function ($scope) {

}]);
