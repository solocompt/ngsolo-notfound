(function () {
    'use strict';

    angular
        .module('ngsolo-notfound')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $state) {
        $rootScope.notfoundStateChangeError = $rootScope.$on('$stateChangeError', function (e) {
            $state.go('ngsolo-notfound');
        });
    }

})();
