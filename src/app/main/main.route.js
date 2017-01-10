(function () {
    'use strict';

    angular
        .module('app.main')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'home',
                config: {
                    templateUrl: 'app/main/views/main.html',
                    controller: 'MainController',
                    controllerAs: 'vm',
                    url: '/'
                }
            },
            {
                state: 'error',
                config: {
                    templateUrl: 'app/main/views/not.existent.html',
                    controller: 'MainController',
                    controllerAs: 'vm',
                    url: '/error'
                }
            }
        ];
    }

})();
