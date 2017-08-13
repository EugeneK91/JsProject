var angularApp = angular.module("angularApp", ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when("/allContacts", {
                    templateUrl: "AllContacts.html",
                    controller:"AllContactController"
                })
                .when("/favoriteContacts", {
                    templateUrl: "FavoriteContacts.html",
                    controller:"FavoriteController"
                })
                .when("/editContact/:id", {
                    templateUrl: "EditContact.html",
                    controller:"ContactController"
                })
                .otherwise({
                    redirectTo: "/allContacts"
                });
        });

        angularApp.controller('AllContactController', function ($scope,ContactService) {
            $scope.contacts = ContactService.list();
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

        angularApp.controller('ContactController', function ($scope, $routeParams,ContactService) {

        $scope.contacts = ContactService.list();
        if($routeParams.id != 'undefine')
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


    angularApp.controller('FavoriteController', function ($scope,ContactService){
       $scope.contacts = ContactService.list();

       $scope.favoriteFilter = function(item){
           if(item.favorite) return true;
           return false;
       }
})