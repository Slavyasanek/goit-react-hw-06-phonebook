import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Form, Input, Label, Button } from './ContactForm.styled';
import PropTypes from 'prop-types';

export const ContactForm = ({saveContact}) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const nameInputId = nanoid();
    const telInputId = nanoid();

    const handleChange = ({ target }) => {
        if (target.name === 'name') {
            setName(target.value);
        } else if (target.name === 'number') {
            setNumber(target.value);
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        saveContact({
            name, number, id: nanoid()
        })
        reset();
    }

    const reset = () => {
        setName('');
        setNumber('');
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Label htmlFor={nameInputId}>Name</Label>
            <Input
                type="text"
                id={nameInputId}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                value={name}
                onChange={handleChange}
                required
            />
            <Label htmlFor={telInputId}>Number</Label>
            <Input
                type="tel"
                id={telInputId}
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                value={number}
                onChange={handleChange}
                required
            />
            <Button type='submit'>Add contact</Button>
        </Form>
    );
}

ContactForm.propTypes = {
    saveContact: PropTypes.func.isRequired,
}