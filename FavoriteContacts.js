(function() {
    'use strict';
angularApp.controller('FavoriteController', function ($scope, ContactService) {
    $scope.contacts = ContactService.list();

    $scope.favoriteFilter = function (item) {
        if (item.favorite) return true;
        return false;
    }
})
})()