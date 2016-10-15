angular.module('shop', ['ngAnimate','ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider        
        .state('home', {
            url: '/home',
            templateUrl: 'home.html',
            controller: 'home_Ctrl'
        })
        .state('page_1', {
            url: '/page_1',
            templateUrl: 'page_1.html',
            controller: 'page_1_Ctrl'
        })
        .state('page_2', {
            url: '/page_2',
            templateUrl: 'page_2.html',
            controller: 'page_2_Ctrl'
        })        
        .state('page_3', {
            url: '/page_3',
            templateUrl: 'page_3.html',
            controller: 'page_3_Ctrl'
        });
        
})
.controller('home_Ctrl', function($scope, $timeout, $controller) {
    
})
.controller('page_1_Ctrl', function($scope, $timeout, $controller,$http) {
    $scope.firstName="Manivannan";
    // $controller('home_Ctrl',{$scope:$scope});
    $timeout(function(){
    $http({
        method : "json",
        url : "data.json"
    }).then(function mySucces(response) {
        console.log(response);
        $scope.products = response.data;
    }, function myError(response) {
        console.log(response);
    });   
    })
     
    
})
.controller('page_2_Ctrl', function($scope, $timeout, $controller) {
    $scope.lastName="A";
    $scope.outPutfunction=function(){
        var firstInput=$scope.firstInput==''?0:$scope.firstInput;
        var secondInput=$scope.secondInput==''?0:$scope.secondInput;
        var thirdInput=$scope.thirdInput==''?0:$scope.thirdInput;
        return parseInt(firstInput)+parseInt(secondInput)+parseInt(thirdInput);    
    }
    $controller('page_1_Ctrl',{$scope:$scope});
    
})
.controller('page_3_Ctrl', function($scope, $timeout, $controller, $rootScope) {
    $scope.gender="Male";
    $controller('page_1_Ctrl',{$scope:$scope});
    $controller('page_2_Ctrl',{$scope:$scope});

});