var questionsFactory = module.exports;

questionsFactory.setRootList = (name, message, choices, defaultChoice) => ({
  [name]: [{
    name,
    message,
    choices,
    type: 'list',
    default: defaultChoice,
  }]
});

const setList = (name, choices) => ({
  type: 'list',
  name: 'type',
  message: `Choose ${name} pattern example:`,
  choices: Object.entries(choices).map(([type, value]) => ({
    name: value,
    value: `${name}:${type}`
  }))
});

questionsFactory.setSubLists = lists =>
  Object
    .entries(lists)
    .reduce((acc, [name, info]) => ({
      ...acc,
      [name]: [setList(name, info)]
    }), {});
