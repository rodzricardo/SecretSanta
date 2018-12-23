'use strict';

/**
 * @ngdoc function
 * @name secretSantaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the secretSantaApp
 */
angular.module('secretSantaApp')
    .controller('MainCtrl', ['$scope', 'DemoLoad', function($scope, DemoLoad) {
        $scope.SecretSantaList = [];
        $scope.EmployeeList = [];

        $scope.SecretSanta = function() {
            var list = angular.copy($scope.EmployeeList);
            var _list = [];
            var _sort = [];

            /* Randomize Cloned Array */
            for (var i = list.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = list[i];
                list[i] = list[j];
                list[j] = temp;
            }

            /* Assign Secret Santa */
            for (var ii = 0; ii < list.length; ii++) {
                if ($scope.EmployeeList[ii].lastname !== list[ii].lastname) {
                    _list.push(list[ii]);
                } else {
                    _list.push({});
                    _sort.push(list[ii]);
                }
            }

            /* Fix Empty Slots */
            for (var iii = 0; iii < _list.length; iii++) {
                if (_list[iii].firstname === undefined) {
                    _list[iii] = _sort.pop();
                }
            }

            /* Repopulate Array */
            for (var iv = 0; iv < _sort.length; iv++) {
                if (_sort[iv].lastname !== undefined) {
                    if ($scope.EmployeeList[iv].lastname === _list[iv].lastname) {
                        _list[iv] = _list.pop();
                    }
                } 
            }

            /* Last Varification */
            for (var v = 0; v < _list.length; iv++) {
                if ($scope.EmployeeList[v].lastname === _list[v].lastname) {
                    $scope.SecretSanta();
                    return;
                }
            }
            $scope.SecretSantaList = _list;
        };

        $scope.AddParticipant = function(employee) {
            if (employee[1] !== undefined) {
                $scope.EmployeeList.push({
                    firstname: employee[0],
                    lastname: employee[1]
                });
            }
            $scope.employee = '';
        };

        $scope.LoadDemo = function() {
            $scope.EmployeeList = DemoLoad;
        };

    }]);