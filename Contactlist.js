angularApp.component('contactList', {
  templateUrl: 'ContactList.html',
  bindings: {
    contacts: '=',
    searchText: '=',

  },
  controller: function VTR() {
    var ctrl = this;
    ctrl.contacts;
     ctrl.search = function (item) {
      if (ctrl.searchText == undefined || ctrl.searchText.length < 2) {
        return true;
      }
      else {
        if (item.firstName.toLowerCase().indexOf(ctrl.searchText.toLowerCase()) != -1) {
          return true;
        }
      }
      return false;
    }
  }
})