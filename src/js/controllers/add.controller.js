function AddController (ContactService, $state, $scope) {

  let vm = this;

  vm.addContact = addContact;

  function addContact (contact) {

    ContactService.createContact(contact).then( (res) => {
      $state.go('root.home');
    });
  };
}

AddController.$inject = ['ContactService', '$state', '$scope'];
export { AddController };
