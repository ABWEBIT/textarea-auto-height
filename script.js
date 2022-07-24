'use strict';
class Textarea{
  constructor(element){
    this.element = document.getElementById(element);
    this.style = window.getComputedStyle(this.element);
    this.padding = parseFloat(this.style.paddingTop) + parseFloat(this.style.paddingBottom);
    this.rowHeight = this.element.clientHeight - this.padding;
    this.element.addEventListener('input',()=>this.resizeTextarea());
    window.addEventListener('resize',()=>this.resizeTextarea());
  };
  resizeTextarea(){
    this.element.rows = 1;
    this.element.rows = Math.round((this.element.scrollHeight - this.padding) / this.rowHeight);
  };
}
new Textarea('chat');
