import { Form, Wrap, Label, Input, Button } from './RegisterForm.styled';
import { useState } from 'react';

const RegisterForm = () => {
  // локальні стейти для контрольованих інпутів у формі
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // контрольовані інпути. реагуємо на івент
  // беремо нейм таргет  і світч-кейс оновлюємо значення стейту
  const handleChangeInput = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'email':
        setEmail(e.currentTarget.value);
        break;
      case 'password':
        setPassword(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  // при сабміті форми прівент дефолт
  // ....
  const onSubmitForm = e => {
    e.preventDefault();
    // const newContact = {
    //   id: nanoid(5),
    //   email,
    //   password,
    // };
    // if (checkNewNameRepeate(name)) {
    //   alert(`${name} is already in contacts!`);
    // } else {
    //   dispatch(addContact(newContact));
    //   setName('');
    //   setPhone('');
    // }
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <h2>Registration</h2>
      <Wrap>
        <Label>
          Name:
          <Input
            type="name"
            name="name"
            required
            value={name}
            onChange={handleChangeInput}
          />
        </Label>
        <Label>
          Email:
          <Input
            type="email"
            name="email"
            required
            value={email}
            onChange={handleChangeInput}
          />
        </Label>
        <Label>
          Password:
          <Input
            type="password"
            name="password"
            required
            value={password}
            onChange={handleChangeInput}
          />
        </Label>
      </Wrap>
      <Button type="submit">Registration</Button>
    </Form>
  );
};

export default RegisterForm;
