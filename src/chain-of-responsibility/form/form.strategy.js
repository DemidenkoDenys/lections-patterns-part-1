const rangeStrategy = value => value > 1 && value < 20;
const requiredStrategy = value => !!value;
const emailSoftStrategy = value => value.includes('@') && value.includes('.');
const emailStrictStrategy = value => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
const passwordSoftStrategy = value => value.length > 6;
const passwordStrictStrategy = value => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value); // Minimum eight characters, at least one letter, one number and one special character;
