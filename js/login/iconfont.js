(function(window){var svgSprite='<svg><symbol id="icon-yanjing-bi" viewBox="0 0 1024 1024"><path d="M515.069851 614.993505c-178.665334 0-345.255921-96.188668-434.895573-251.011492-13.098031-22.61457-5.321075-51.47117 17.191166-64.569202 22.61457-13.098031 51.573499-5.321075 64.569202 17.191166 72.755471 125.659239 208.033576 203.735785 353.032877 203.735785s280.277406-78.076546 353.032877-203.838113c13.098031-22.61457 41.954632-30.391526 64.569201-17.293495s30.289198 41.954632 17.293495 64.569202c-89.537324 155.027481-256.12791 251.216149-434.793245 251.216149z"  ></path><path d="M270.095733 662.064555c-8.288598 0-16.781853-2.148896-24.354152-6.753673-22.409913-13.507345-29.572899-42.568602-16.065554-64.876186l52.187469-86.365145c13.507345-22.409913 42.568602-29.470571 64.876186-16.065554 22.409913 13.507345 29.572899 42.568602 16.065554 64.876187l-52.187468 86.365144c-8.902568 14.632957-24.45648 22.819227-40.522035 22.819227zM757.48576 662.064555c-15.963226 0-31.619466-8.083941-40.522035-22.819227l-52.187468-86.365144c-13.507345-22.409913-6.344359-51.368842 15.963225-64.876187 22.409913-13.507345 51.368842-6.344359 64.876187 15.963226l52.187469 86.365144c13.507345 22.409913 6.344359 51.368842-15.963226 64.876187-7.572299 4.604777-16.065554 6.856001-24.354152 6.856001zM515.069851 723.563905c-26.093734 0-47.275707-21.181973-47.275707-47.275707V567.717798c0-26.093734 21.181973-47.275707 47.275707-47.275707 26.093734 0 47.275707 21.181973 47.275707 47.275707v108.5704c0 26.093734-21.181973 47.275707-47.275707 47.275707z"  ></path></symbol><symbol id="icon-yanjing-zheng" viewBox="0 0 1024 1024"><path d="M515.069851 833.362246c-179.279304 0-346.58619-96.495653-436.430499-251.932447-9.721195-16.884181-3.990806-38.475467 12.893375-48.196662s38.475467-3.990806 48.196662 12.893374c77.360248 133.640851 221.131608 216.62916 375.340462 216.62916 154.208854 0 298.082542-82.988308 375.340462-216.62916 9.721195-16.884181 31.312481-22.61457 48.196662-12.893374 16.884181 9.721195 22.61457 31.312481 12.893375 48.196662-89.844309 155.436794-257.151194 251.932447-436.430499 251.932447zM921.006495 486.264415c-12.177076 0-24.047167-6.344359-30.596182-17.60048C813.050065 335.023084 669.278705 252.034776 515.069851 252.034776c-154.208854 0-297.980214 82.988308-375.340462 216.629159-9.721195 16.884181-31.312481 22.61457-48.196662 12.893375-16.884181-9.721195-22.61457-31.312481-12.893375-48.196662C168.483661 277.923853 335.790547 181.4282 515.069851 181.4282s346.58619 96.495653 436.430499 251.932448c9.721195 16.884181 3.990806 38.475467-12.893375 48.196662-5.525732 3.172179-11.665434 4.707105-17.60048 4.707105z"  ></path><path d="M515.069851 700.437694c-105.295893 0-190.84241-85.648846-190.84241-190.842411s85.648846-190.84241 190.84241-190.84241 190.84241 85.648846 190.84241 190.84241-85.546517 190.84241-190.84241 190.842411z m0-311.180574c-66.308784 0-120.338163 53.927051-120.338163 120.338163s53.927051 120.338163 120.338163 120.338164S635.408014 575.904067 635.408014 509.595283s-54.029379-120.338163-120.338163-120.338163z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)