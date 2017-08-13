
angularApp.service('ContactService', function () {

        var uid = 1;


        var contacts = [{
            id: 0,
            'firstName': 'Viral',
            'secondName': 'hello@gmail.com',
            'dob': '10/08/2017',
            'phone': '1255544',
            'gender': 'male',
            'relationShip': null,
            'description': 'life is fun',
            'favorite': false,
            'isRemove': false
        }];


        this.save = function (contact) {
            if (contact.id == null) {

                contact.id = uid++;
                contacts.push(contact);
            } else {
                for (i in contacts) {
                    if (contacts[i].id == contact.id) {
                        contacts[i] = contact;
                    }
                }
            }

        }


        this.get = function (id) {
            for (i in contacts) {
                if (contacts[i].id == id) {
                    return contacts[i];
                }
            }

        }

        this.delete = function (id) {
            for (i in contacts) {
                if (contacts[i].id == id) {
                    contacts.splice(i, 1);
                }
            }
        }

        this.list = function () {
            return contacts;
        }

        this.removeList = function () {
            contacts = contacts.filter(function (contact) {
                return !contact.isRemove;
            })
        }
    });

