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
            for (var i = 0; i < list.length; i++) {
                if ($scope.EmployeeList[i].lastname != list[i].lastname) {
                    _list.push(list[i]);
                } else {
                    _list.push({});
                    _sort.push(list[i]);
                }
            }

            /* Fix Empty Slots */
            for (var i = 0; i < _list.length; i++) {
                if (_list[i].firstname == undefined) {
                    _list[i] = _sort.pop();
                }
            }

            /* Repopulate Array */
            for (var i = 0; i < _sort.length; i++) {
                if (_sort[i].lastname != undefined) {
                    if ($scope.EmployeeList[i].lastname == _list[i].lastname) {
                        _list[i] = _list.pop();
                    }
                } 
            }

            /* Last Varification */
            for (var i = 0; i < _list.length; i++) {
                if ($scope.EmployeeList[i].lastname == _list[i].lastname) {
                    console.log('gotta do it again!');
                    $scope.SecretSanta();
                    return
                }
            };
            $scope.SecretSantaList = _list;
        };

        $scope.AddParticipant = function(employee) {
            if (employee[1] != undefined) {
                $scope.EmployeeList.push({
                    firstname: employee[0],
                    lastname: employee[1]
                });
            }
            $scope.employee = "";
        };

        $scope.LoadDemo = function() {
            $scope.EmployeeList = DemoLoad;
        };
        // $scope.LoadDemo();

    }]);