!function(c){function s(){l.hide(),O.onerror=O.onload=null,k&&k.abort(),h.empty()}function r(){!1===x.onError(m,w,x)?(l.hide(),D=!1):(x.titleShow=!1,x.width="auto",x.height="auto",h.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>'),N())}function a(){var n,t,e,i,a,o,d=m[w];if(s(),x=c.extend({},c.fn.fancybox.defaults,void 0===c(d).data("fancybox")?x:c(d).data("fancybox")),!1===(o=x.onStart(m,w,x)))D=!1;else if(e=(x="object"==typeof o?c.extend(x,o):x).title||(d.nodeName?c(d).attr("title"):d.title)||"",d.nodeName&&!x.orig&&(x.orig=c(d).children("img:first").length?c(d).children("img:first"):c(d)),""===e&&x.orig&&x.titleFromAlt&&(e=x.orig.attr("alt")),n=x.href||(d.nodeName?c(d).attr("href"):d.href)||null,!/^(?:javascript)/i.test(n)&&"#"!=n||(n=null),x.type?(t=x.type,n=n||x.content):x.content?t="html":n&&(t=n.match(j)?"image":n.match(M)?"swf":c(d).hasClass("iframe")?"iframe":0===n.indexOf("#")?"inline":"ajax"),t)switch("inline"==t&&(d=n.substr(n.indexOf("#")),t=0<c(d).length?"inline":"ajax"),x.type=t,x.href=n,x.title=e,x.autoDimensions&&("html"==x.type||"inline"==x.type||"ajax"==x.type?(x.width="auto",x.height="auto"):x.autoDimensions=!1),x.modal&&(x.overlayShow=!0,x.hideOnOverlayClick=!1,x.hideOnContentClick=!1,x.enableEscapeButton=!1,x.showCloseButton=!1),x.padding=parseInt(x.padding,10),x.margin=parseInt(x.margin,10),h.css("padding",x.padding+x.margin),c(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",function(){c(this).replaceWith(f.children())}),t){case"html":h.html(x.content),N();break;case"inline":if(!0===c(d).parent().is("#fancybox-content"))return D=!1;c('<div class="fancybox-inline-tmp" />').hide().insertBefore(c(d)).bind("fancybox-cleanup",function(){c(this).replaceWith(f.children())}).bind("fancybox-cancel",function(){c(this).replaceWith(h.children())}),c(d).appendTo(h),N();break;case"image":D=!1,c.fancybox.showActivity(),(O=new Image).onerror=function(){r()},O.onload=function(){D=!0,O.onerror=O.onload=null,x.width=O.width,x.height=O.height,c("<img />").attr({id:"fancybox-img",src:O.src,alt:x.title}).appendTo(h),B()},O.src=n;break;case"swf":x.scrolling="no",i='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+x.width+'" height="'+x.height+'"><param name="movie" value="'+n+'"></param>',a="",c.each(x.swf,function(t,e){i+='<param name="'+t+'" value="'+e+'"></param>',a+=" "+t+'="'+e+'"'}),i+='<embed src="'+n+'" type="application/x-shockwave-flash" width="'+x.width+'" height="'+x.height+'"'+a+"></embed></object>",h.html(i),N();break;case"ajax":D=!1,c.fancybox.showActivity(),x.ajax.win=x.ajax.success,k=c.ajax(c.extend({},x.ajax,{url:n,data:x.ajax.data||{},error:function(t,e,i){0<t.status&&r()},success:function(t,e,i){if(200==("object"==typeof i?i:k).status){if("function"==typeof x.ajax.win){if(!1===(o=x.ajax.win(n,t,e,i)))return void l.hide();"string"!=typeof o&&"object"!=typeof o||(t=o)}h.html(t),N()}}}));break;case"iframe":B()}else r()}function o(){return[c(window).width()-2*I.margin,c(window).height()-2*I.margin,c(document).scrollLeft()+I.margin,c(document).scrollTop()+I.margin]}function L(){l.is(":visible")?(c("div",l).css("top",-40*T+"px"),T=(T+1)%12):clearInterval(t)}var h,l,i,n,e,f,d,p,g,b,t,y,u,w=0,x={},m=[],v=0,I={},C=[],k=null,O=new Image,j=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,M=/[^\.]\.(swf)\s*$/i,T=1,S=0,A="",D=!1,F=c.extend(c("<div/>")[0],{prop:0}),E=c.browser.msie&&c.browser.version<7&&!window.XMLHttpRequest,N=function(){var t=x.width,e=x.height,t=-1<t.toString().indexOf("%")?parseInt((c(window).width()-2*x.margin)*parseFloat(t)/100,10)+"px":"auto"==t?"auto":t+"px",e=-1<e.toString().indexOf("%")?parseInt((c(window).height()-2*x.margin)*parseFloat(e)/100,10)+"px":"auto"==e?"auto":e+"px";h.wrapInner('<div style="width:'+t+";height:"+e+";overflow: "+("auto"==x.scrolling?"auto":"yes"==x.scrolling?"scroll":"hidden")+';position:relative;"></div>'),x.width=h.width(),x.height=h.height(),B()},B=function(){var t,e;l.hide(),n.is(":visible")&&!1===I.onCleanup(C,v,I)?(c.event.trigger("fancybox-cancel"),D=!1):(D=!0,c(f.add(i)).unbind(),c(window).unbind("resize.fb scroll.fb"),c(document).unbind("keydown.fb"),n.is(":visible")&&"outside"!==I.titlePosition&&n.css("height",n.height()),C=m,v=w,(I=x).overlayShow?(i.css({"background-color":I.overlayColor,opacity:I.overlayOpacity,cursor:I.hideOnOverlayClick?"pointer":"auto",height:c(document).height()}),i.is(":visible")||(E&&c("select:not(#fancybox-tmp select)").filter(function(){return"hidden"!==this.style.visibility}).css({visibility:"hidden"}).one("fancybox-cleanup",function(){this.style.visibility="inherit"}),i.show())):i.hide(),u=R(),z(),n.is(":visible")?(c(d.add(g).add(b)).hide(),t=n.position(),y={top:t.top,left:t.left,width:n.width(),height:n.height()},e=y.width==u.width&&y.height==u.height,f.fadeTo(I.changeFade,.3,function(){function t(){f.html(h.contents()).fadeTo(I.changeFade,1,P)}c.event.trigger("fancybox-change"),f.empty().removeAttr("filter").css({"border-width":I.padding,width:u.width-2*I.padding,height:x.autoDimensions?"auto":u.height-S-2*I.padding}),e?t():(F.prop=0,c(F).animate({prop:1},{duration:I.changeSpeed,easing:I.easingChange,step:H,complete:t}))})):(n.removeAttr("style"),f.css("border-width",I.padding),"elastic"==I.transitionIn?(y=K(),f.html(h.contents()),n.show(),I.opacity&&(u.opacity=0),F.prop=0,c(F).animate({prop:1},{duration:I.speedIn,easing:I.easingIn,step:H,complete:P})):("inside"==I.titlePosition&&0<S&&p.show(),f.css({width:u.width-2*I.padding,height:x.autoDimensions?"auto":u.height-S-2*I.padding}).html(h.contents()),n.css(u).fadeIn("none"==I.transitionIn?0:I.speedIn,P))))},z=function(){var t;if((A=I.title||"",S=0,p.empty().removeAttr("style").removeClass(),!1!==I.titleShow)&&((A=c.isFunction(I.titleFormat)?I.titleFormat(A,C,v,I):!(!(t=A)||!t.length)&&("float"==I.titlePosition?'<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">'+t+'</td><td id="fancybox-title-float-right"></td></tr></table>':'<div id="fancybox-title-'+I.titlePosition+'">'+t+"</div>"))&&""!==A))switch(p.addClass("fancybox-title-"+I.titlePosition).html(A).appendTo("body").show(),I.titlePosition){case"inside":p.css({width:u.width-2*I.padding,marginLeft:I.padding,marginRight:I.padding}),S=p.outerHeight(!0),p.appendTo(e),u.height+=S;break;case"over":p.css({marginLeft:I.padding,width:u.width-2*I.padding,bottom:I.padding}).appendTo(e);break;case"float":p.css("left",-1*parseInt((p.width()-u.width-40)/2,10)).appendTo(n);break;default:p.css({width:u.width-2*I.padding,paddingLeft:I.padding,paddingRight:I.padding}).appendTo(n)}p.hide()},P=function(){var t,e;c.support.opacity||(f.get(0).style.removeAttribute("filter"),n.get(0).style.removeAttribute("filter")),x.autoDimensions&&f.css("height","auto"),n.css("height","auto"),A&&A.length&&p.show(),I.showCloseButton&&d.show(),(I.enableEscapeButton||I.enableKeyboardNav)&&c(document).bind("keydown.fb",function(t){27==t.keyCode&&I.enableEscapeButton?(t.preventDefault(),c.fancybox.close()):37!=t.keyCode&&39!=t.keyCode||!I.enableKeyboardNav||"INPUT"===t.target.tagName||"TEXTAREA"===t.target.tagName||"SELECT"===t.target.tagName||(t.preventDefault(),c.fancybox[37==t.keyCode?"prev":"next"]())}),I.showNavArrows?((I.cyclic&&1<C.length||0!==v)&&g.show(),(I.cyclic&&1<C.length||v!=C.length-1)&&b.show()):(g.hide(),b.hide()),I.hideOnContentClick&&f.bind("click",c.fancybox.close),I.hideOnOverlayClick&&i.bind("click",c.fancybox.close),c(window).bind("resize.fb",c.fancybox.resize),I.centerOnScroll&&c(window).bind("scroll.fb",c.fancybox.center),"iframe"==I.type&&c('<iframe id="fancybox-frame" name="fancybox-frame'+(new Date).getTime()+'" frameborder="0" hspace="0" '+(c.browser.msie?'allowtransparency="true""':"")+' scrolling="'+x.scrolling+'" src="'+I.href+'"></iframe>').appendTo(f),n.show(),D=!1,c.fancybox.center(),I.onComplete(C,v,I),C.length-1>v&&(void 0!==(t=C[v+1].href)&&t.match(j)&&((e=new Image).src=t));0<v&&void 0!==(t=C[v-1].href)&&t.match(j)&&((e=new Image).src=t)},H=function(t){var e={width:parseInt(y.width+(u.width-y.width)*t,10),height:parseInt(y.height+(u.height-y.height)*t,10),top:parseInt(y.top+(u.top-y.top)*t,10),left:parseInt(y.left+(u.left-y.left)*t,10)};void 0!==u.opacity&&(e.opacity=t<.5?.5:t),n.css(e),f.css({width:e.width-2*I.padding,height:e.height-S*t-2*I.padding})},R=function(){var t=o(),e={},i=I.autoScale,n=2*I.padding;return-1<I.width.toString().indexOf("%")?e.width=parseInt(t[0]*parseFloat(I.width)/100,10):e.width=I.width+n,-1<I.height.toString().indexOf("%")?e.height=parseInt(t[1]*parseFloat(I.height)/100,10):e.height=I.height+n,i&&(e.width>t[0]||e.height>t[1])&&("image"==x.type||"swf"==x.type?(i=I.width/I.height,e.width>t[0]&&(e.width=t[0],e.height=parseInt((e.width-n)/i+n,10)),e.height>t[1]&&(e.height=t[1],e.width=parseInt((e.height-n)*i+n,10))):(e.width=Math.min(e.width,t[0]),e.height=Math.min(e.height,t[1]))),e.top=parseInt(Math.max(t[3]-20,t[3]+.5*(t[1]-e.height-40)),10),e.left=parseInt(Math.max(t[2]-20,t[2]+.5*(t[0]-e.width-40)),10),e},K=function(){var t,e=!!x.orig&&c(x.orig);return e&&e.length?((t=(e=e).offset()).top+=parseInt(e.css("paddingTop"),10)||0,t.left+=parseInt(e.css("paddingLeft"),10)||0,t.top+=parseInt(e.css("border-top-width"),10)||0,t.left+=parseInt(e.css("border-left-width"),10)||0,t.width=e.width(),t.height=e.height(),{width:(e=t).width+2*I.padding,height:e.height+2*I.padding,top:e.top-I.padding-20,left:e.left-I.padding-20}):(t=o(),{width:2*I.padding,height:2*I.padding,top:parseInt(t[3]+.5*t[1],10),left:parseInt(t[2]+.5*t[0],10)})};c.fn.fancybox=function(t){return c(this).length&&c(this).data("fancybox",c.extend({},t,c.metadata?c(this).metadata():{})).unbind("click.fb").bind("click.fb",function(t){t.preventDefault(),D||(D=!0,c(this).blur(),m=[],w=0,(t=c(this).attr("rel")||"")&&""!=t&&"nofollow"!==t?(m=c("a[rel="+t+"], area[rel="+t+"]"),w=m.index(this)):m.push(this),a())}),this},c.fancybox=function(t){var e;if(!D){if(D=!0,e=void 0!==arguments[1]?arguments[1]:{},m=[],w=parseInt(e.index,10)||0,c.isArray(t)){for(var i=0,n=t.length;i<n;i++)"object"==typeof t[i]?c(t[i]).data("fancybox",c.extend({},e,t[i])):t[i]=c({}).data("fancybox",c.extend({content:t[i]},e));m=jQuery.merge(m,t)}else"object"==typeof t?c(t).data("fancybox",c.extend({},e,t)):t=c({}).data("fancybox",c.extend({content:t},e)),m.push(t);(w>m.length||w<0)&&(w=0),a()}},c.fancybox.showActivity=function(){clearInterval(t),l.show(),t=setInterval(L,66)},c.fancybox.hideActivity=function(){l.hide()},c.fancybox.next=function(){return c.fancybox.pos(v+1)},c.fancybox.prev=function(){return c.fancybox.pos(v-1)},c.fancybox.pos=function(t){D||(t=parseInt(t),m=C,-1<t&&t<C.length?(w=t,a()):I.cyclic&&1<C.length&&(w=t>=C.length?0:C.length-1,a()))},c.fancybox.cancel=function(){D||(D=!0,c.event.trigger("fancybox-cancel"),s(),x.onCancel(m,w,x),D=!1)},c.fancybox.close=function(){var t;function e(){i.fadeOut("fast"),p.empty().hide(),n.hide(),c.event.trigger("fancybox-cleanup"),f.empty(),I.onClosed(C,v,I),C=x=[],v=w=0,I=x={},D=!1}D||n.is(":hidden")||(D=!0,I&&!1===I.onCleanup(C,v,I)?D=!1:(s(),c(d.add(g).add(b)).hide(),c(f.add(i)).unbind(),c(window).unbind("resize.fb scroll.fb"),c(document).unbind("keydown.fb"),f.find("iframe").attr("src",E&&/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank"),"inside"!==I.titlePosition&&p.empty(),n.stop(),"elastic"==I.transitionOut?(y=K(),t=n.position(),u={top:t.top,left:t.left,width:n.width(),height:n.height()},I.opacity&&(u.opacity=1),p.empty().hide(),F.prop=1,c(F).animate({prop:0},{duration:I.speedOut,easing:I.easingOut,step:H,complete:e})):n.fadeOut("none"==I.transitionOut?0:I.speedOut,e)))},c.fancybox.resize=function(){i.is(":visible")&&i.css("height",c(document).height()),c.fancybox.center(!0)},c.fancybox.center=function(){var t,e;D||(e=!0===arguments[0]?1:0,t=o(),!e&&(n.width()>t[0]||n.height()>t[1])||n.stop().animate({top:parseInt(Math.max(t[3]-20,t[3]+.5*(t[1]-f.height()-40)-I.padding)),left:parseInt(Math.max(t[2]-20,t[2]+.5*(t[0]-f.width()-40)-I.padding))},"number"==typeof arguments[0]?arguments[0]:200))},c.fancybox.init=function(){c("#fancybox-wrap").length||(c("body").append(h=c('<div id="fancybox-tmp"></div>'),l=c('<div id="fancybox-loading"><div></div></div>'),i=c('<div id="fancybox-overlay"></div>'),n=c('<div id="fancybox-wrap"></div>')),(e=c('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(n)).append(f=c('<div id="fancybox-content"></div>'),d=c('<a id="fancybox-close"></a>'),p=c('<div id="fancybox-title"></div>'),g=c('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),b=c('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')),d.click(c.fancybox.close),l.click(c.fancybox.cancel),g.click(function(t){t.preventDefault(),c.fancybox.prev()}),b.click(function(t){t.preventDefault(),c.fancybox.next()}),c.fn.mousewheel&&n.bind("mousewheel.fb",function(t,e){D?t.preventDefault():0!=c(t.target).get(0).clientHeight&&c(t.target).get(0).scrollHeight!==c(t.target).get(0).clientHeight||(t.preventDefault(),c.fancybox[0<e?"prev":"next"]())}),c.support.opacity||n.addClass("fancybox-ie"),E&&(l.addClass("fancybox-ie6"),n.addClass("fancybox-ie6"),c('<iframe id="fancybox-hide-sel-frame" src="'+(/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank")+'" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(e)))},c.fn.fancybox.defaults={padding:10,margin:40,opacity:!1,modal:!1,cyclic:!1,scrolling:"auto",width:560,height:340,autoScale:!0,autoDimensions:!0,centerOnScroll:!1,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:!0,hideOnContentClick:!1,overlayShow:!0,overlayOpacity:.7,overlayColor:"#777",titleShow:!0,titlePosition:"float",titleFormat:null,titleFromAlt:!1,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",easingIn:"swing",easingOut:"swing",showCloseButton:!0,showNavArrows:!0,enableEscapeButton:!0,enableKeyboardNav:!0,onStart:function(){},onCancel:function(){},onComplete:function(){},onCleanup:function(){},onClosed:function(){},onError:function(){}},c(document).ready(function(){c.fancybox.init()})}(jQuery);