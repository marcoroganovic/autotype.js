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

  function passesTypeCheck(content, duration, el, cursor) {
    if(!isString(content)) {
      throw new TypeError("Content: Expected string, got " + typeof content);
    }
    if(!isNumber(duration)) {
      throw new TypeError("Per Char: Expected number, got " + typeof duration);
    }
    if(!isNode(el)) {
      throw new TypeError("Element: Expected DOM node, got " + typeof el);
    }

    if(!isString(cursor)) {
      throw new TypeError("Cursor: Expected string, got " + typeof cusror);
    }
    return true;
  }

  function getTypingArea(el) {
    var span = document.createElement("span");
    el.appendChild(span);
    return span;
  }

  function getCursor(el, cursorLook) {
    var span = document.createElement("span");
    var text = document.createTextNode(cursorLook);
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

  function setupInterval(text, time, el, crsr) {
    var i = 0, typeArea = getTypingArea(el), cursor = getCursor(el, crsr);

    var interval = setInterval(function() {
      if(i < text.length) {
        appendLetter(typeArea, text[i]); 
        toggleCursor(cursor);
        i++;
      } else {
        clearInterval(interval);
        el.removeChild(cursor);
      }
    }, time);
  }

  function autoType(config) {
    var content = config.content;
    var duration = config.perChar;
    var element = config.element;
    var cursor = config.cursor
    
    if(passesTypeCheck(content, duration, element, cursor)) {
      setupInterval(content, duration, element, cursor);
    }
  }

  // autoType({
    // content: text,
    // element: document.querySelector(".code"),
    // perChar: 100,
    // cursor: "|"
  // });

  // expose function

  global.autoType = autoType;

})(this);
