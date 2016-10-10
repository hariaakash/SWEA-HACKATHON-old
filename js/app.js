var app = angular.module("ceApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/home.html"
        })
        .when("/home", {
            templateUrl: "templates/home.html"
        })
        .when("/rounds", {
            templateUrl: "templates/rounds.html"
        })
        .when("/rules", {
            templateUrl: "templates/rules.html"
        })
        .when("/contact", {
            templateUrl: "templates/contact.html"
        })
        .when("/prizes", {
            templateUrl: "templates/prizes.html"
        })
        .when("/faq", {
            templateUrl: "templates/faq.html"
        })
        .when("/404", {
            templateUrl: "templates/404.html"
        })
        .otherwise({
            redirectTo: "/404"
        });
});
