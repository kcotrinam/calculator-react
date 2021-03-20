/* eslint-disable consistent-return */
import operate from './operate';

const calculate = ({ data, buttonName }) => {
  let { total, next, operation } = data;

  switch (buttonName) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '+/-':
      if (next) next *= -1;
      else total *= -1;
      break;
    case '%':
      if (!next) total /= 100;
      else next /= 100;
      break;
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (!operation) {
        if (!total) {
          total = buttonName;
        } else if (typeof total === 'number') {
          total = buttonName;
        } else {
          total += buttonName;
        }
      } else if (!next) {
        next = buttonName;
      } else {
        next += buttonName;
      }
      break;

    case '.':
      if (!total) total = '0.';
      if (!operation && !total.includes('.')) {
        total += '.';
      } else if (!operation && !next.includes('.')) {
        next += '.';
      }
      break;

    case '+':
    case '-':
    case 'x':
    case '/':
      if (!total) total = 0;
      if (total && next && operation) {
        total = operate(total, next, operation);
        next = null;
        operation = null;
      }
      operation = buttonName;
      break;

    case '=':
      if (!total && !next) return 0;
      if (total && !next) return 0;
      if (!operation) operate(total, next, operation);
      if (total && next) {
        operate(total, next, operation);
        next = null;
        operation = buttonName;
      }
      break;

    default:
      total = 'ERROR';
      next = null;
      operation = null;
      break;
  }
};

export default calculate;
