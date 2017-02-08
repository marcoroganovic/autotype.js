(function(global) {

  'use strict';

  function isString(arg) {
    return typeof arg === "string";
  }

  function isNumber(arg) {
    return typeof arg === "number";
  }

  function isNode(arg) {
    return arg && arg.nodeType && (arg.nodeType === 1 || arg.nodeType === 11);
  }

  function passesTypeCheck(content, duration, el) {
    if(!isString(content)) {
      throw new TypeError("Content: Expected string, got " + typeof content);
    }
    if(!isNumber(duration)) {
      throw new TypeError("Per Char: Expected number, got " + typeof duration);
    }
    if(!isNode(el)) {
      throw new TypeError("Element: Expected DOM node, got " + typeof el);
    }
    return true;
  }

  // define interval as global so that we can clear it
  function appendLetter(el, char) {
    el.textContent += char;
  }

  function setupInterval(text, time, el) {
    var i = 0;
    var interval = setInterval(function() {
      if(i < text.length) {
        appendLetter(el, text[i]);
        i++;
      } else {
        clearInterval(interval);
        i = 0;
      }
    }, time);
  }

  function autoType(config) {
    var content = config.content;
    var duration = config.perChar;
    var element = config.element;
    
    if(passesTypeCheck(content, duration, element)) {
      setupInterval(content, duration, element);
    }
  }

  // autoType({
    // content: text,
    // element: document.querySelector(".code"),
    // perChar: 100
  // });

  // expose function

  global.autoType = autoType;

})(this);
