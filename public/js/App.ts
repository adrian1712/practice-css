namespace App {
    let app = angular.module ('App', ['ui-router']);

    app.config ([
        '$stateProvider',
        ($stateProvider) => {
            $stateProvider
            .state ('home', {
                url: "/",
                template: 'Home Page',
                controller: App.HomeController
            })
        }
    ])
}
