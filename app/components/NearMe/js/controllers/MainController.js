/**
 * Created by melc on 6/12/17.
 */
app.controller("MainController", [ '$scope', 'places', function($scope, places) {
        $scope.mapCenter = {
            lat: 40.741934,
            lng: -74.004897,
            zoom: 17
        };

        /* store data from wiki to geodata, pass geodata to geodataToMarkers
           function in helpers.js  */
        places.success(function(data) {
            $scope.geodata = data;
            $scope.mapMarkers = geodataToMarkers($scope.geodata);
        });

        /*
        $scope.mapMarkers =
            [
                {
                    lat: 40.741389,
                    lng: -74.003056,
                    message: "111 Eighth Avenue"},
                {
                    lat: 40.7425,
                    lng: -74.006111,
                    message: "Chelsea Market"
                }
            ];*/

}]);