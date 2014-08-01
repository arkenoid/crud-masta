'use strict';

jhipsterAllApp
    .config(['$routeProvider', '$httpProvider', '$translateProvider', 'USER_ROLES',
        function ($routeProvider, $httpProvider, $translateProvider, USER_ROLES) {
            $routeProvider
                .when('/foo', {
                    templateUrl: 'views/foos.html',
                    controller: 'FooController',
                    resolve:{
                        resolvedFoo: ['Foo', function (Foo) {
                            return Foo.query();
                        }]
                    },
                    access: {
                        authorizedRoles: [USER_ROLES.all]
                    }
                })
        }]);
