function ContactService ($http, SERVER) {

  this.createContact = createContact;
  this.readContact   = readContact;
  this.readContacts  = readContacts;
  this.updateContact = updateContact;
  this.deleteContact = deleteContact;


  function createContact (contact) {
    return $http.post(SERVER.URL, contact);
  }

  function readContact (id) {
    return $http.get(SERVER.URL + id);
  }

  function readContacts () {
    return $http.get(SERVER.URL);
  }

  function updateContact (contact) {
    return $http.put(SERVER.URL + contact._id, contact);
  }

  function deleteContact (id) {
    return $http.delete(SERVER.URL + id);
  }

}

ContactService.$inject = ['$http', 'SERVER'];
export { ContactService };
