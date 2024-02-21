import { User, UserProps } from './user';

describe('User Unit Tests', () => {
  it('should be constructor()', () => {
    let userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'email_any@mail.com',
      password: 'password_any',
    };
    let user = User.create(userProps);
    expect(user.props).toEqual({
      ...userProps,
    });

    userProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'email_any@mail.com',
      password: 'password_any',
    };

    expect(user.id).toBeDefined();
    user = User.create(userProps);
    expect(user.props).toEqual({
      ...userProps,
    });
  });

  it('should updateName method', () => {
    let userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'email_any@mail.com',
      password: 'password_any',
    };
    const user = User.create(userProps);
    user.updateName('any_name_any');
    expect(user.name).toBe('any_name_any');
  });

  it('should be updateSurname method', () => {
    let userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_email@mail.com',
      password: 'any_password',
    };
    let user = User.create(userProps);
    user.updateSurname('any_is_surname');
    expect(user.surname).toBe('any_is_surname');
  });

  it('should be updateEmail method', () => {
    let userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_email@mail.com',
      password: 'any_password',
    };
    let user = User.create(userProps);
    user.updateEmail('any_email_updated@mail.com');
    expect(user.email).toBe('any_email_updated@mail.com');
  });

  it('should be updatePassword method', () => {
    let userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_email@mail.com',
      password: 'any_password',
    };
    let user = User.create(userProps);
    user.updatePassword('any_password_updated');
    expect(user.password).toBe('any_password_updated');
  });

  it('should be toJSON() method', () => {
    let userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'email_any@mail.com',
      password: 'password_any',
    };
    const user = User.create(userProps);
    user.toJSON();
    expect(user.toJSON()).toStrictEqual({
      id: user.id,
      name: 'any_name',
      surname: 'any_surname',
      email: 'email_any@mail.com',
      password: 'password_any',
    });
  });
});
