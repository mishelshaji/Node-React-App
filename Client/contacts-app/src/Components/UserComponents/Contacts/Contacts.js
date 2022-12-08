import {React, useState} from 'react';
import {getContacts} from "../../../Services/contactsService";

function Contacts() {

    const [contacts, setContacts] = useState([]);

    const getData = async () => {
        const response = await getContacts('/user/contacts');
        setContacts(response.data);
    }

    getData();

    const getContactRow = (contact) => {
    return (
      <tr>
        <td>{contact.firstName}</td>
        <td>{contact.lastName}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }

  return (
    <div className='container'>
        <h1 className='text-center'>Contacts</h1>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map(getContactRow)} 
            </tbody>
        </table>
    </div>
  )
}

export default Contacts