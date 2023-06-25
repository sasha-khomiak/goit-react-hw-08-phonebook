import { useDispatch } from 'react-redux';
import { useState } from 'react';

// операції авторизації
import authOperations from 'redux/auth/authOperations';

import { Form, Wrap, Label, Input, Button } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();
  // локальні стейти для контрольованих інпутів у формі
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // контрольовані інпути. реагуємо на івент
  // беремо нейм таргет  і світч-кейс оновлюємо значення стейту
  const handleChangeInput = e => {
    switch (e.currentTarget.name) {
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
  // відправляємо обʼєкт імейду і пароля, скидаємо форму
  const onSubmitForm = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <h2>Log In</h2>
      <Wrap>
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
      <Button type="submit">Log In</Button>
    </Form>
  );
};

export default LoginForm;
