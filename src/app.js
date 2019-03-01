var app = angular.module('app', [
    'ngResource'
]);


app.factory('NasaEndpoint', ['$resource', function ($resource) {
    return $resource('https://api.nasa.gov/planetary/apod');
    //?api_key=VjbpRJjd5ef35ycZ13AoZ1k9m21Qangu8ogjxcBX
}]);


app.controller('DayImage', ['$scope', 'NasaEndpoint', function($scope, NasaEndpoint) {
    $scope.greeting = 'Hello World!';

    $scope.infoImage = {}

    NasaEndpoint.get(
        {
            api_key:'VjbpRJjd5ef35ycZ13AoZ1k9m21Qangu8ogjxcBX'
        },
        {},
        function(response){
            console.log(response);
        },
        function(error){
            console.log(error);
        }

    )
  }]);

