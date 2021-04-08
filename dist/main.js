!function(){"use strict";function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var e=function(){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.row=t,this.col=n,this.mouseDown=!1,this.isStart=this.isStart(),this.isFinish=this.isFinish()}var n,i;return n=e,(i=[{key:"isStart",value:function(){return 10===this.row&&15===this.col&&(this.addClass("node-start"),!0)}},{key:"isFinish",value:function(){return 10===this.row&&25===this.col&&(this.addClass("node-finish"),!0)}},{key:"addClass",value:function(t){document.getElementById("".concat(this.row,"-").concat(this.col)).className+=" ".concat(t)}}])&&t(n.prototype,i),e}();function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=e,this.maxRow=20,this.maxCol=50,this.grid=[],this.myPath=[],this.board=this.createBoard(),this.addEventListeners(),this.buttonsOn=!1,this.previous=null,this.nodeClicked=null}var i,o;return i=t,(o=[{key:"createBoard",value:function(){for(var t=0;t<this.maxRow;t++){var n=[],i=document.createElement("div");i.className="node-row",this.el.appendChild(i);for(var o=0;o<this.maxCol;o++){var a=document.createElement("div");a.className="node",a.setAttribute("id","".concat(t,"-").concat(o)),i.appendChild(a);var s=new e(t,o);n.push(s)}this.grid.push(n)}}},{key:"addEventListeners",value:function(){for(var t=this,e=0;e<t.maxRow;e++)for(var n=function(n){var i="".concat(e,"-").concat(n),o=t.getNode(i),a=document.getElementById(i);a.addEventListener("mousedown",(function(e){e.preventDefault(),(o.isStart||o.mouseDown)&&(o.mouseDown=!0,t.buttonsOn=!0,t.nodeClicked=a,t.myPath.includes(o)||t.myPath.push(o))})),a.addEventListener("mouseenter",(function(e){t.buttonsOn&&(o.mouseDown=!0,t.myPath.includes(o)||(t.myPath.push(o),a.className+=" clicked"))})),a.addEventListener("mouseleave",(function(e){t.buttonsOn&&(t.previous=a)})),a.addEventListener("mouseup",(function(e){t.buttonsOn&&(t.previous=a,t.buttonsOn=!1)}))},i=0;i<t.maxCol;i++)n(i)}},{key:"getNode",value:function(t){var e=t.split("-"),n=parseInt(e[0]),i=parseInt(e[1]);return this.grid[n][i]}}])&&n(i.prototype,o),t}();document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("grid");new i(t)}))}();
//# sourceMappingURL=main.js.map