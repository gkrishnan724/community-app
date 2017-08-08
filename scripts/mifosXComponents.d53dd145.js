define(['Q', 'underscore', 'mifosX'], function (Q) {
    var components = {
        models: [
            'models.b45c7349'
        ],
        services: [
            'ResourceFactoryProvider',
            'HttpServiceProvider',
            'AuthenticationService',
            'SessionManager',
            'Paginator',
            'UIConfigService',
            'NotificationResponseHeaderProvider'
        ],
        controllers: [
            'controllers.d4963d17'
        ],
        filters: [
            'filters.34474998'
        ],
        directives: [
            'directives.dffbf193'
        ]
    };

    return function() {
        var defer = Q.defer();
        require(_.reduce(_.keys(components), function (list, group) {
            return list.concat(_.map(components[group], function (name) {
                return group + "/" + name;
            }));
        }, [
            'routes-initialTasks-webstorage-configuration.0a49cf17'
        ]), function(){
            defer.resolve();
        });
        return defer.promise;
    }
});
