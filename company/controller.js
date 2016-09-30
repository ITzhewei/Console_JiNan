/**
 * Created by john on 2016/9/29.
 */
'use strict';

var module = angular.module('company',['ngRoute']);

module.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/yezhu',{
        templateUrl:'company/view.html',
        conteoller:'companyController'
    })
}]);

module.controller('companyController',['$scope',function ($scope) {

}]);
