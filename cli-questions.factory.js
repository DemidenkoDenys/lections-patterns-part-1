var questionsFactory = module.exports;

questionsFactory.setRootList = (name, message, choices, defaultChoice) => ({
  [name]: [{
    name,
    message,
    choices,
    pageSize: 10,
    type: 'rawlist',
    default: defaultChoice,
  }]
});

questionsFactory.setChoiceLists = lists =>
  Object
    .entries(lists)
    .reduce((acc, [name, info]) => ({
      ...acc,
      [name]: [getList(name, info)]
    }), {});


function getList(name, choices) {
  return {
    type: 'rawlist',
    name: 'type',
    message: `Choose ${name} pattern example:`,
    choices: Object.entries(choices).map(([type, value]) => ({
      name: value,
      value: `${name}:${type}`
    }))
  };
};