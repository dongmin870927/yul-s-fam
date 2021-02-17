var Links = {
  setColor : function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while (i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color', color);
  }}
var Body = {
setColor:function(color){
  // document.querySelector('body').style.color = color;},
  $('body').css('color', color);
},
setbackgroundColor:function(color){
  // document.querySelector('body').style.backgroundColor = color;}
  $('body').css('backgroundColor', color);
}}


function nightday(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
  Body.setbackgroundColor('black');
  Body.setColor('yellow');
  self.value = 'day';
  Links.setColor('yellow');

} else {
  Body.setbackgroundColor('white');
  Body.setColor('red');
  self.value = 'night';
  Links.setColor('red');
}
}
