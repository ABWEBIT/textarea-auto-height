let textAreaAutoHeight = () => {
  var textArea = document.getElementsByClassName('textAreaAutoHeight');
  for(let i = 0; i < textArea.length; i++){ 
    let element,tStyle,tHeight,tPadTop,tPadBot,tBorTop,tBorBot,tLineHeight;

    element = textArea[i];
    tStyle = window.getComputedStyle(element);
    tHeight = parseFloat(tStyle.height);
    tPadTop = parseFloat(tStyle.paddingTop);
    tPadBot = parseFloat(tStyle.paddingBottom);
    tBorTop = parseFloat(tStyle.borderTop);
    tBorBot = parseFloat(tStyle.borderBottom);
    tLineHeight = tHeight - tPadTop - tPadBot - tBorTop - tBorBot;

    element.addEventListener('input', function(){
      this.rows = 1;
      this.rows = Math.floor((this.scrollHeight) / tLineHeight);
    });
  };
};
textAreaAutoHeight();
