interface UserInterface {
  lastname: string;
  firstname: string;
  birthdate: Date;
  gender: 'male' | 'female';
  age?: string;
  email?: string;
  nickname?: string;
}

class User implements UserInterface {
  age?: string;
  email?: string;
  gender: 'male' | 'female';
  lastname: string;
  nickname?: string;
  firstname: string;
  birthdate: Date;

  constructor() {}
}

class UserBuilder extends User {
  setFirstName = firstName => {
    this.firstname = firstName;
    return this;
  }
  setLastName = lastName => {
    this.lastname = lastName;
    return this;
  }
  male = () => {
    this.gender = 'male';
    return this;
  }
  female = () => {
    this.gender = 'female';
    return this;
  }
  setBirthdate = (date: Date) => {
    this.birthdate = date;
    return this;
  }
  setAge = () => {
    this.age = 'calculate';
    return this;
  }
  setEmail = email => {
    this.email = email;
    return this;
  }
  setNickname = nickname => {
    this.nickname = nickname;
    return this;
  }
  build = () => {
    const user = new User();

    try {
      if (!this.gender) { throw new Error('User must have gender value !'); }
      if (!this.lastname) { throw new Error('User must have lastname value !'); }
      if (!this.firstname) { throw new Error('User must have firstname value !'); }
      if (!this.birthdate) { throw new Error('User must have birthdate value !'); }
    } catch(error) {
      console.log(`\n\x1b[31m${error.message}\n`);
      return null;
    }

    user.gender = this.gender;
    user.lastname = this.lastname;
    user.firstname = this.firstname;
    user.birthdate = this.birthdate;

    if (this.age) { user.age = '30 years (should be calculated)'; }
    if (this.email) { user.email = this.email; }
    if (this.nickname) { user.nickname = this.nickname; }

    return user;
  }
}

console.log(new UserBuilder()
  .setFirstName('Denys')
  .setLastName('Demidenko')
  .male()
  .setBirthdate(new Date(1998, 9, 9))
  .setAge()
  .setEmail('denis.demidenko@nixsolutions.com')
  .setNickname('Demidenko_Denis')
  .build());

console.log(new UserBuilder()
  .setFirstName('Denys')
  .setLastName('Demidenko')
  .build());
