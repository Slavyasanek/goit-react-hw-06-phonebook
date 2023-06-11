import { FilterInput, FilterWrapper } from './Filter.styled';
import { AiOutlineSearch } from 'react-icons/ai'
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const Filter = ({filterChange, filterValue}) => {
    let filterId = nanoid();

    return (
        <FilterWrapper>
            <label htmlFor={filterId}>Find contacts by name</label>
            <FilterInput
                type="text"
                id={filterId}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder='Searching by name...'
                onChange={filterChange}
                value={filterValue}
            />
            <AiOutlineSearch />
        </FilterWrapper>);
}

Filter.propTypes = {
    filterChange: PropTypes.func.isRequired,
    filterValue: PropTypes.string.isRequired
}