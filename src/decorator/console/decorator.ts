const Reset = "\x1b[0m";
const Bright = "\x1b[1m";
const FgRed = "\x1b[31m";
const BgBlue = "\x1b[44m";
const FgGreen = "\x1b[32m";
const FgYellow = "\x1b[33m";
const Underscore = "\x1b[4m";

class Decorator {
  error = text => `${FgRed} ${Underscore} ${text} ${Reset}`;
  warning = text => `${FgYellow} ${BgBlue} ${text} ${Reset}`;
  success = text => `${FgGreen} ${Bright} ${text} ${Reset}`;
}

export default new Decorator();
