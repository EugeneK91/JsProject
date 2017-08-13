
    var angularApp = angular.module("angularApp", ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/allContacts", {
                templateUrl: "Views/AllContacts.html",
                controller: "AllContactController"
            })
            .when("/favoriteContacts", {
                templateUrl: "Views/FavoriteContacts.html",
                controller: "FavoriteController"
            })
            .when("/editContact/:id", {
                templateUrl: "Views/EditContact.html",
                controller: "ContactController"
            })
            .otherwise({
                redirectTo: "/allContacts"
            });
    });





