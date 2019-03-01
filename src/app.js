var app = angular.module('app', [
    'ngResource'
]);


app.factory('NasaEndpoint', ['$resource', function ($resource) {
    return $resource('https://api.nasa.gov/planetary/apod');
}]);

app.controller('DayImage', ['$scope', 'NasaEndpoint', function($scope, NasaEndpoint) {
    $scope.msg = 'F12 - Olha o console do navegador.'
    $scope.infoImage = {}
    //request utilizando Resource
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

