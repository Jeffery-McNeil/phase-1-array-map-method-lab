const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// function titleCased(){
// tutorials.map(tutorial => tutorial[0].toUpperCase())
// }

function titleCased(tutorials){
  Array.assign({}, tutorials, {
  [1]: [tutorials][0][0].toUpperCase()
    //modes: robot.modes * 2,
    // isActivated: true,
  });
};

tutorials.map(titleCased());