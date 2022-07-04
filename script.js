'use strict';
let textAreaAutoHeight = () => {
  let textArea = document.getElementsByClassName('textAreaAutoHeight');
  for(let el of textArea){ 
    let tStyle,tHeight,tPadding,tBorder,tRowHeight;

    tStyle = window.getComputedStyle(el);
    tHeight = parseFloat(tStyle.height);
    tPadding = parseFloat(tStyle.paddingTop) + parseFloat(tStyle.paddingBottom);
    tBorder = parseFloat(tStyle.borderTop) + parseFloat(tStyle.borderBottom);
    tRowHeight = tHeight - tPadding - tBorder;

    el.addEventListener('input', function(){
      this.rows = 1;
      this.rows = Math.round((this.scrollHeight - tPadding) / tRowHeight);
    });
  };
};
textAreaAutoHeight();
