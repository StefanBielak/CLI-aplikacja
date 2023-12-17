const yargs = require('yargs');
const { listContacts, getContactById, removeContact, addContact } = require('./contacts');

const argv = yargs.argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      console.log('Lista kontaktów:');
      listContacts();
      break;

    case 'get':
      console.log('Dane kontaktu:');
      getContactById(id);
      break;

    case 'add':
      console.log('Dodano kontakt:');
      addContact(name, email, phone);
      break;

    case 'remove':
      console.log('Usunięto kontakt:');
      removeContact(id);
      break;

    default:
      console.log('Nieznane polecenie!');
  }
}

invokeAction(argv);