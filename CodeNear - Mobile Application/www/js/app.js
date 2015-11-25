// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('hightrax', ['ionic','ui.router'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
  $stateProvider
  .state('welcome',{
    url:'/',
    templateUrl:'templates/welcome.html'
  })
  .state('account',{
    url:'/account',
    templateUrl:'templates/account.html'
  })
  $ionicConfigProvider.tabs.position("top");
  $urlRouterProvider.otherwise("/");
})
.controller('mainApp',function($scope,$ionicSideMenuDelegate){
     $scope.title='CodeNear';
})
.controller('rightMenu',function($scope,$ionicSideMenuDelegate){
     $scope.title='Personal Account';
})
.controller('account',function($scope,$ionicHistory){
    $scope.goBack = function($scope) {
      $ionicHistory.goBack();
    };
    $scope.title="Account";
})
.controller('loginFormController',function($scope,$ionicHistory){
    $scope.goBack = function($scope) {
      $ionicHistory.goBack();
    };
    $scope.title="Account";
})
.controller('registerFormController',function($scope,$ionicHistory){
    $scope.goBack = function($scope) {
      $ionicHistory.goBack();
    };
    $scope.title="Account";
})

.controller('hightrax', function($scope, $ionicActionSheet) {

  $scope.showActionsheet = function() {

    $ionicActionSheet.show({
      titleText: 'ActionSheet Example',
      buttons: [
        { text: '<i class="icon ion-share"></i> Share' },
        { text: '<i class="icon ion-arrow-move"></i> Move' },
      ],
      destructiveText: 'Delete',
      cancelText: 'Cancel',
      cancel: function() {
        console.log('CANCELLED');
      },
      buttonClicked: function(index) {
        console.log('BUTTON CLICKED', index);
        return true;
      },
      destructiveButtonClicked: function() {
        console.log('DESTRUCT');
        return true;
      }
    });
  };


})



function MyCtrl($scope, $ionicHistory) {

}
