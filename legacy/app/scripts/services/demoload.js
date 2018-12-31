'use strict';

/**
 * @ngdoc service
 * @name secretSantaApp.DemoLoad
 * @description
 * # DemoLoad
 * Service in the secretSantaApp.
 */
angular.module('secretSantaApp')
    .service('DemoLoad', function() {
        return [{
            firstname: 'Luke',
            lastname: 'Skywalker'
        }, {
            firstname: 'Lia',
            lastname: 'Skywalker'
        }, {
            firstname: 'Luke',
            lastname: 'Wilson'
        }, {
            firstname: 'Owen',
            lastname: 'Wilson'
        }, {
            firstname: 'Eddie',
            lastname: 'Murphey'
        }, {
            firstname: 'Charlie',
            lastname: 'Murphey'
        }, {
            firstname: 'Bruce',
            lastname: 'Wayne'
        }];
    });