



host = window.location.host;
var webu='https://'+host+'/';





function click(e) {
  if (document.all) {
    if (event.button==2||event.button==3) { alert("欢迎光临寒舍，有什么需要帮忙的话，请与站长联系！谢谢您的合作！！！");
      oncontextmenu='return false';
    }
  }
  if (document.layers) {
    if (e.which == 3) {
      oncontextmenu='return false';
    }
  }
}
if (document.layers) {
  document.captureEvents(Event.MOUSEDOWN);
}
document.onmousedown=click;
document.oncontextmenu = new Function("return false;")
document.onkeydown =document.onkeyup = document.onkeypress=function(){
  if(window.event.keyCode == 123) {
    window.event.returnValue=false;
    return(false);
  }
}
document.onselectstart=function(e){return   false;};
$(document).scroll(function(){
    var a = $(document).scrollTop();
    if (a>50) {
      $("#topcontrol").css("display","block");
    }else{
      $("#topcontrol").css("display","none");
    }
})
$(function(){
  $("#topcontrol").click(function() {
      $("html,body").animate({scrollTop:0}, 500);
  });
 });


$(document).ready(function(){
  var c =  window.location.href;
  });


$(function () {
    var url  =  window.location.href;
    var dom  =  window.location.origin;
    if (url.indexOf("login") != -1 || url.indexOf("register") != -1) {}else{
      var srcs = document.getElementsByTagName('img');
      for(x in srcs){

	  
	  
	  
	  
        if(!isNaN(x)){
          if((url==dom &&(x==0||x==1||x==2))||(url.indexOf(dom+"/jock") ==-1 && (x==0||x==1||x==2))){}else{
			  var img = $("img").eq(x);
			  
			  img.attr('originalsrc',$(srcs[x]).attr('src'));
			  
			  img.removeAttr("src");

			  img.delayLoading({
				defaultImg: "./images/loading.gif",           // 
				errorImg: "",                        // (默认：与defaultImg一样)
				imgSrcAttr: "originalsrc",           // (默认：originalSrc，页面img的src属性也要替换为originalSrc)
				beforehand: 100,                       // (默认：0)
				event: "scroll",                     // (默认：scroll)
				duration: "normal",                  // (入)默认:"normal"
				container: window,                   // (默认：window)
				success: function (imgObj) { },      // (默认：不执行任何操作)
				error: function (imgObj) { }         // 
			  });
			}  
        }
      } 
    }
    });





