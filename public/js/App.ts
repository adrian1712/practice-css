namespace App {
    let app = angular.module ('App', ['ui.router']);

    app.config ([
        '$stateProvider',
        ($stateProvider) => {
            $stateProvider
            .state ('home',{
                url: "/",
                templateUrl:'templates/home.html',
                controller: App.HomeController,
                controllerAs: 'homeController'
            })
            .state ('front-page', {
                url: '/front-page',
                templateUrl: 'templates/front-page.html',
                controller: App.FrontPageController,
                controllerAs: 'frontPageController'
            })
            .state ('products', {
                url: '/products',
                templateUrl: 'templates/products.html',
                controller: App.ProductsController,
                controllerAs: 'productsController'
            })
        }
    ])
}
