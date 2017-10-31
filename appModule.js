var demoApp = angular.module('demoApp', ['ngRoute']);
var controllers = {};

demoApp.factory('simpleFactory', () => {
  var names = [
    {name: 'Jimmy', city: 'Toronto'}, {name: 'Aliya', city: 'Richmond Hill'}
  ];

  var factory = {};
  factory.getCustomers = function(){
    return names;
  };
  return factory;
});

demoApp.config(($routeProvider)=>{
  $routeProvider
    .when('/about',{
      controller: 'SimpleController',
      templateUrl: 'about.html'
    })
});

demoApp.controller('SimpleController', function($scope, simpleFactory) {
  $scope.names=[];
  init();
  function init(){
    $scope.names=simpleFactory.getCustomers();
  }
  $scope.addCustomer = function(){
    console.log($scope.newCustomer.name);
    $scope.names.push(
      {name: $scope.newCustomer.name, city: $scope.newCustomer.city}
    );
  }
});
