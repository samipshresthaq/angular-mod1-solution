(function() {
    'use strict';

    angular.module('LunchCheck', [])

    .controller('LunchCheckController', LunchCheckFunction);

    LunchCheckFunction.$inject = ['$scope'];

    function LunchCheckFunction($scope) {
        $scope.lunch = "";
        $scope.message = "";
        $scope.colorClass = "";
        $scope.displayResult = function() {
            var finalResult = checkIfTooMuch($scope.lunch);
            $scope.message = finalResult;
        }

        function checkIfTooMuch(lunches) {

            if (!lunches.trim()) {
                $scope.colorClass = "red";
                return "Please enter the data first!";
            } else {
                $scope.colorClass = "green";
                var seperatedLunches = splitString(lunches, ","),
                totalLunch = stringCount(seperatedLunches);

                if (totalLunch > 3) {
                    return "Too Much!";
                }
                else if (totalLunch > 0 && totalLunch <= 3) {
                    return "Enjoy!";
                }
            }
        }

        function splitString(stringToSplit, separator) {
            var arrayOfStrings = stringToSplit.split(separator);
            return arrayOfStrings;
        }

        function stringCount(stringToCount){
          var stringCount = 0;
          for (var i = 0; i < stringToCount.length; i++) {
            if( stringToCount[i].trim() ){
              stringCount++;
            }
          }
          return stringCount;
        }

    };

})();
