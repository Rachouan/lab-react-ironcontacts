import { useState } from 'react'
import { Contact } from './Contact';
import contacts from "../../contacts.json";
import styled from "styled-components";

export const Contacts = () =>{

    const Container = styled.div`
        margin:0 auto;
        width:100%;
        max-width: 768px;
        padding: 0 1rem;
    `;

    const [contactList,setContactList] = useState(contacts.slice(0,5));
    const [sortBy,setSortBy] = useState('');
    const addContact = () => setContactList([contacts[Math.round(Math.random() * contacts.length)],...contactList]);
    const sortedContacts = contactList.sort((a,b) => {
        return sortBy === 'popularity' ? a.popularity - b.popularity : a.name.localeCompare(b.firstname);
    })
    const removeContact = (id) => setContactList(contactList.filter(c => c.id !== id));
    return (
        <Container>
        <h1>IronContacts</h1>
        <button onClick={addContact}>Add Contact</button>
        <button onClick={() => { setSortBy('name')}}>Sort By Name</button>
        <button onClick={() => { setSortBy('popularity')}}>Sort By Popularity</button>
        <table>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Won Oscar</th>
                    <th>Won Emmy</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {sortedContacts.map((contact,i) => <Contact {...contact} key={i} removeContact={() => {removeContact(contact.id)}}/>)}
            </tbody>
        </table>
        </Container>
    )
}