angularApp.controller('AllContactController', function ($scope, ContactService) {

    $scope.contacts =ContactService.list() ;
    $scope.searchText = '';


    $scope.delete = function (id) {

        ContactService.delete(id);
        if ($scope.newcontact.id == id) $scope.newcontact = {};
    }


    $scope.edit = function (id) {
        $scope.newcontact = angular.copy(ContactService.get(id));
    }
    $scope.removeList = function () {
        ContactService.removeList();

    $scope.contacts = ContactService.list();

    }

    $scope.search = function (item) {
        if ($scope.searchText == undefined || $scope.searchText.length < 2) {
            return true;
        }
        else {
            if (item.firstName.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
                return true;
            }
        }
        return false;
    }
})