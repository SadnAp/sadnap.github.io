!function(e){e(".article-entry, .article-inner").each(function(n){e(this).find("img").each(function(){var n;e(this).parent().hasClass("fancybox")||e(this).parent().is("a")||((n=this.alt)&&e(this).after('<span class="caption">'+n+"</span>"),e(this).wrap('<a class="fancybox" href="'+this.src+'" data-fancybox="gallery" data-caption="'+n+'"></a>'))}),e(this).find(".fancybox").each(function(){e(this).attr("rel","article"+n)})}),e.fancybox&&e(".fancybox").fancybox();var n=e("#container"),t=!1;document.getElementById("main-nav-toggle").onclick=function(){t||(t=!0,n.toggleClass("mobile-nav-on"),setTimeout(function(){t=!1},200))};document.getElementById("wrap").onclick=function(){!t&&n.hasClass("mobile-nav-on")&&n.removeClass("mobile-nav-on")};for(var a=document.getElementsByClassName("code"),o=0;o<a.length;++o){var i=document.createElement("div");i.className="copy-button",i.innerHTML="Copy",new ClipboardJS(".copy-button",{target:n=>n.nextSibling}),i.onclick=n=>{var e=n.target;e.innerHTML="Copied!",setTimeout(function(){e.innerHTML="Copy"},1e3)},a[o].parentElement.insertBefore(i,a[o])}}(jQuery);