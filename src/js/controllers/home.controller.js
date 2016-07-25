function HomeController (ContactService, $http, SERVER, $state) {

  let vm = this;

  init ();

  function init () {
    ContactService.readContacts().then( res => {
      vm.contacts = res.data;
    });
  }

  vm.deleteContact = (id) => {
    console.log(id);
  $http.delete(SERVER.URL + id).then((res) => {
    $state.go('root.home');
  });
}

}

HomeController.$inject = ['ContactService', '$http', 'SERVER', '$state'];
export { HomeController };
