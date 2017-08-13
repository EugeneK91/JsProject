angularApp.controller('AllContactController', function AllContactController($scope, ContactService) {
    this.contacts = ContactService.list();
    $scope.contacts = this.contacts;
   // $scope.foo = 'foo';
   
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
this.contacts =$scope.contacts;
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