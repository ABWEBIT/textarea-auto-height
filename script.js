let textAreaAutoHeight = () => {
  var textArea = document.getElementsByClassName('textAreaAutoHeight');
  for(let i = 0; i < textArea.length; i++){ 
    let tStyle,tHeight,tPadding,tBorder,tRowHeight;

    tStyle = window.getComputedStyle(textArea[i]);
    tHeight = parseFloat(tStyle.height);
    tPadding = parseFloat(tStyle.paddingTop) + parseFloat(tStyle.paddingBottom);
    tBorder = parseFloat(tStyle.borderTop) + parseFloat(tStyle.borderBottom);
    tRowHeight = tHeight - tPadding - tBorder;

    textArea[i].addEventListener('input', function(){
      this.rows = 1;
      this.rows = Math.floor(this.scrollHeight / tRowHeight);
    });
  };
};
textAreaAutoHeight();
