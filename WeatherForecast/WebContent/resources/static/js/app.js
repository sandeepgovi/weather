var weatherApp = angular.module('weatherApp',['ngRoute','ngResource']);


//defining the mappings 
weatherApp.config(function($routeProvider){
    
    $routeProvider
    .when('/app',{
          
          templateUrl:'resources/static/pages/forecast.htm',
          controller:'forecastController'
        
          })
    .when('/weather',{
          
          templateUrl:'resources/static/pages/weather.htm',
          controller:'weatherController'
          
          })
    .when('/weather/:days',{
        
        templateUrl:'resources/static/pages/weather.htm',
        controller:'weatherController'
    
    });
    
    
});

//defining the service
weatherApp.service('weatherService',function(){
    
    
   this.city ='Indianapolis'; 
    this.days=2;
    
});

//defining the controllers
weatherApp.controller('forecastController',['$scope','weatherService',function($scope,weatherService){
    
    
    $scope.city = weatherService.city;
    $scope.days=weatherService.days;
    $scope.$watch('city',function(){
        
        weatherService.city = $scope.city;
        
    });
    
    $scope.$watch('days',function(){

        weatherService.days = $scope.days;

    });
    
 
}]);

weatherApp.controller('weatherController',['$scope','weatherService','$resource','$filter',function($scope,weatherService,$resource,$filter){
    
    $scope.city = weatherService.city;
    $scope.days=weatherService.days;
    
    $scope.$watch('city',function(){
        
        weatherService.city = $scope.city;
        
    });
    
    $scope.$watch('days',function(){

        weatherService.days = $scope.days;

    });
       
   $scope.weatherAPI= $resource('http://api.openweathermap.org/data/2.5/forecast/daily',
              
        {                                                                                                  
          callback:'JSON_CALLBACK'   
        },
        
        {    
          get:{

                method:'JSONP'         
            }      
        }             
    );
    
    $scope.weatherResult = $scope.weatherAPI.get(
    
        {
            q:$scope.city,
            cnt:$scope.days,
            appid:'ffeae1bb93b7f5fb5845030b9bd4756f'
            
        }
    );
    
   
    $scope.convertToFahrenheit = function(degK) {
  
        return Math.round((1.8 * (degK - 273)) + 32);
   
    } ;
    
     $scope.convertToDate = function(dt) { 
      
        return new Date(dt * 1000);     
        
    };
       
}]);

//directives
weatherApp.directive('weatherDirective',function(){
    
    
    return {
        
        restrict: 'E' ,
        templateUrl:'resources/static/directives/weatherDirective.htm' ,
        replace:true,
        scope: {
         
         weatherObj:"=",
         convertTemp: "&",
         convertDate:"&",
         dateFormat:"@"
        
         }
  
    }
    
});