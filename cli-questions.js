const questions = {
  patterns: [
    {
      type: 'list',
      name: 'pattern',
      message: 'Choose pattern to run:',
      choices: [
        'singleton',
        'decorator',
        'facade',
        'builder',
      ],
      default: 'builder',
    }
  ],

  singleton: [
    {
      type: 'list',
      name: 'type',
      message: 'Choose singleton type:',
      choices: [
        {
          name: 'Simpliest implementation of Singleton',
          value: 'singleton:simpliest'
        }, {
          name: 'Singleton written by class',
          value: 'singleton:class',
        }, {
          name: 'Singleton written by module',
          value: 'singleton:module',
        },
      ],
    }
  ],

  decorator: [
    {
      type: 'list',
      name: 'type',
      message: 'Choose decorator example:',
      choices: [
        {
          name: 'Readonly decorator',
          value: 'decorator:readonly'
        }, {
          name: 'Array wrapper decorator',
          value: 'decorator:array-wrapper'
        }, {
          name: 'Decorator of console messages',
          value: 'decorator:console'
        }, {
          name: 'React component decorator',
          value: 'decorator:react'
        },
      ],
    }
  ],

  facade: [{
    type: 'list',
    name: 'type',
    message: 'Choose facade example:',
    choices: [
      {
        name: 'API facade',
        value: 'facade:api'
      }, {
        name: 'Angular facade',
        value: 'facade:angular'
      }, {
        name: 'React hooks facade',
        value: 'facade:react'
      },
    ],
  }],

  builder: [{
    type: 'list',
    name: 'type',
    message: 'Choose builder pattern example:',
    choices: [{
      name: 'React component builder',
      value: 'builder:react'
    }, {
      name: 'User builder',
      value: 'builder:user'
    }]
  }],

  factory: [{
    type: 'list',
    name: 'type',
    message: 'Choose factory pattern example:',
    choices: [{
      name: 'Javascrtipt form factory',
      value: 'factory:form'
    }, {
      name: 'User factory',
      value: 'factory:user'
    }]
  }]
};