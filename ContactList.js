angularApp.component('contactList', {
  templateUrl: 'ContactList.html',
  //template:"<div>Contact id from view {{$ctrl.foo}}</div>",
  bindings: {
    contacts: '='
  },
controller:"AllContactController"
});
