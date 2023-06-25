// стилізовані компоненти
import { Ul, Li, Name, Button } from './ContactList.styled';

// бібліотека Dispatch для відправки екшенів на редʼюс і запису в стейт
// бібліотека useSelector для отримання даних з глобального стейту для верстки
import { useDispatch, useSelector } from 'react-redux';

// функція формування екщена для видалення контакту
import { deleteContact } from 'redux/contacts/contactsOperations';

// селектори для стейту стану контактів (завантаження, контакти, помилка)
import {
  selectIsLoading,
  selectError,
  selectContacts,
} from 'redux/contacts/contactsSelectors';

// селектор для фільтра
import { selectFilter } from 'redux/filter/filterSelectors';

// useEffect для оновлення сontacts при їх зміні
import { useEffect } from 'react';

// операція отримання контатків
import { fetchContacts } from 'redux/contacts/contactsOperations';

// операції авторизації
// import authOperations from 'redux/auth/authOperations';

// наш компонент
const ContactList = () => {
  const dispatch = useDispatch();

  // оновлення сontacts при їх зміні
  useEffect(() => {
    // dispatch(authOperations.fetchCurrentUser());
    dispatch(fetchContacts());
  }, [dispatch]);

  // значення стейт завантаження і помилки
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // контакти, фільтр
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  // відфільтровані контакти
  const filteredContacts = contacts.filter(item =>
    item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase().trim())
  );

  // верстка компонента
  // Якщо завантаження - Loading tasks...
  // Якщо помилка з бекенду - повідомлення
  // якщо в масиві хоча б одне значення, то виводимо
  return (
    <>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}

      {filteredContacts.length > 0 && (
        <Ul>
          {filteredContacts.map(item => {
            return (
              <Li key={item.id}>
                <Name>{item.name}: </Name> <p>{item.number}</p>
                <Button
                  type="button"
                  onClick={() => dispatch(deleteContact(item.id))}
                >
                  Delete
                </Button>
              </Li>
            );
          })}
        </Ul>
      )}
    </>
  );
};

export default ContactList;
