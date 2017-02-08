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

  function getTypingArea(el) {
    var span = document.createElement("span");
    el.appendChild(span);
    return span;
  }

  function getCursor(el) {
    var span = document.createElement("span");
    var text = document.createTextNode("|");
    span.appendChild(text);
    el.appendChild(span);
    return span;
  }

  function toggleCursor(el) {
    el.style.display = el.style.display === "none" ? "" : "none";
  }

  function appendLetter(el, char) {
    var letter = document.createTextNode(char);
    el.appendChild(letter);
  }

  function setupInterval(text, time, el) {
    var i = 0;
    var typeArea = getTypingArea(el);
    var cursor = getCursor(el);
    var interval = setInterval(function() {
      if(i < text.length) {
        appendLetter(typeArea, text[i]);
        toggleCursor(cursor);
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
