const fs = require('fs');
const path = require('path');

const contactsPath = path.join(process.cwd(), 'db/contacts.json');

function listContacts() {
  try {
    const data = fs.readFileSync(contactsPath, 'utf-8');
    const contacts = JSON.parse(data);
    console.log('Lista kontaktów:', contacts);
  } catch (error) {
    console.error('Błąd podczas odczytu kontaktów:', error.message);
  }
}

function getContactById(contactId) {
  try {
    const data = fs.readFileSync(contactsPath, 'utf-8');
    const contacts = JSON.parse(data);
    const contact = contacts.find(c => c.id === contactId);
    if (contact) {
      console.log('Dane kontaktu:', contact);
    } else {
      console.log('Nie znaleziono kontaktu o podanym ID.');
    }
  } catch (error) {
    console.error('Błąd podczas odczytu kontaktów:', error.message);
  }
}

function removeContact(contactId) {
  try {
    let data = fs.readFileSync(contactsPath, 'utf-8');
    let contacts = JSON.parse(data);
    contacts = contacts.filter(c => c.id !== contactId);
    fs.writeFileSync(contactsPath, JSON.stringify(contacts, null, 2));
    console.log('Usunięto kontakt o ID:', contactId);
  } catch (error) {
    console.error('Błąd podczas usuwania kontaktu:', error.message);
  }
}

function addContact(name, email, phone) {
  try {
    let data = fs.readFileSync(contactsPath, 'utf-8');
    let contacts = JSON.parse(data);

    const newContact = {
      id: contacts.length + 1,
      name,
      email,
      phone,
    };

    contacts.push(newContact);
    fs.writeFileSync(contactsPath, JSON.stringify(contacts, null, 2));
    console.log('Dodano nowy kontakt:', newContact);
  } catch (error) {
    console.error('Błąd podczas dodawania kontaktu:', error.message);
  }
}

export { listContacts, getContactById, removeContact, addContact };