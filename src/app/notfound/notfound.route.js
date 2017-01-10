(function () {
    'use strict';

    angular
        .module('ngsolo-notfound')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'ngsolo-notfound',
                config: {
                    templateUrl: 'app/notfound/views/notfound.html',
                    controller: 'NotFoundController',
                    controllerAs: 'vm',
                    url: '/notfound'
                }
            }
        ];
    }

})();
