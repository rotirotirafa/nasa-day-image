var app = angular.module('app', [
    'ngResource'
]);

app.factory('NasaEndpoint', ['$resource', function ($resource) {
    return $resource('https://api.nasa.gov/planetary/apod');
}]);

app.controller('DayImage', ['$scope', 'NasaEndpoint', '$http', function($scope, NasaEndpoint, $http) {
    $scope.nasaImageInfo = {}
    $scope.open = !$scope.open;
    //request utilizando Resource
    NasaEndpoint.get(
        {
            api_key:'VjbpRJjd5ef35ycZ13AoZ1k9m21Qangu8ogjxcBX'
        },
        {},
        function(response){
            $scope.nasaImageInfo = response;
            console.log(response);
        },
        function(error){
            console.log(error);
        }

    );
        //Adicionar funcionalidade de abrir a imagem em grande tamanho
    // $scope.plusImage = function() {
    //     $scope.open = true;
    // }
  }]);

