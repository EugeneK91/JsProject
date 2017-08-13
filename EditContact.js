
angularApp.controller('ContactController', function ($scope, $routeParams, ContactService) {

    $scope.contacts = ContactService.list();
    if ($routeParams.id != 'undefine')
        $scope.newcontact = angular.copy(ContactService.get($routeParams.id));
    $scope.searchText = '';
    $scope.saveContact = function () {
        ContactService.save($scope.newcontact);
        $scope.newcontact = {};
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
    $scope.removeList = function () {
        ContactService.removeList();
        $scope.contacts = ContactService.list();
    }
    $scope.saveContact = function () {
        ContactService.save($scope.newcontact);
        $scope.newcontact = {};
    }
})
