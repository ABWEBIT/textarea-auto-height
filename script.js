'use strict';
let tArea,tStyle,tPadding,tRowHeight,tRows;
let textAreaAutoHeight = () => {
  tArea = document.getElementsByClassName('textAreaAutoHeight');
  for(let el of tArea){
    el.rows = 1;
    tStyle = window.getComputedStyle(el);
    tPadding = parseFloat(tStyle.paddingTop) + parseFloat(tStyle.paddingBottom);
    if(typeof tRowHeight === 'undefined'){
      tRowHeight = el.clientHeight - tPadding;
    };
    tRows = Math.round((el.scrollHeight - tPadding) / tRowHeight);
    if(el.rows < tRows || el.rows > tRows){
      el.rows = tRows;
    };
  };
};
textAreaAutoHeight();
document.addEventListener('input',function(el){
  if(el.target.classList.contains('textAreaAutoHeight')){
    textAreaAutoHeight();
  }
});
window.addEventListener('resize',textAreaAutoHeight);
