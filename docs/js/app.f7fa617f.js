(function(e){function t(t){for(var r,a,l=t[0],s=t[1],p=t[2],c=0,d=[];c<l.length;c++)a=l[c],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,p||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},"3e35":function(e,t,n){"use strict";var r=n("4120"),i=n.n(r);i.a},4120:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("app-videos")],1)},o=[],a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",{attrs:{id:"li1"}},[n("img",{attrs:{src:"/static/img/tmp.jpg",height:"200",alt:"画像"}})]),n("li",{attrs:{id:"li2"}},[n("img",{attrs:{src:"/static/img/tmp.jpg",height:"200",alt:"画像"}})]),n("li",{attrs:{id:"li3"}},[n("img",{attrs:{src:"/static/img/tmp.jpg",height:"200",alt:"画像"}})])])}],s=n("f0e2"),p={name:"Videos",data:function(){return{player:null,videoId:"player",videoOptions:{autoplay:"muted",controls:!0,height:200,sources:[{src:"/static/video/OHHH.mp4",type:"video/mp4"}]}}},methods:{playerInitialize:function(){var e=document.getElementById("li1"),t='<video class="video-js" id="'+this.videoId+'" options="'+this.videoOptions+'"></video>';e.innerHTML="",e.insertAdjacentHTML("afterbegin",t),this.player=Object(s["a"])(this.videoId,this.videoOptions,(function(){console.log("onPlayerReady",this)}))},playerDispose:function(){this.player.dispose()},playerPlay:function(){this.player.play()},playerPause:function(){this.player.pause()},playerSetSrc:function(e){this.player.src(e)},playerSetVolume:function(e){this.player.volume(e)},playerSetPoster:function(e){this.player.poster(e)},playerSetTime:function(e){this.player.currentTime(e)},playerEventEnded:function(){console.log("ended")},playerEventVolume:function(){this.volume=this.player.volume()},playerEventError:function(){console.log(this.playerGetError())},playerGetPaused:function(){return this.player.paused()},playerGetTime:function(){return this.player.currentTime()},playerGetError:function(){return this.player.error().message},playerSetupEvents:function(){this.player.on("volumechange",(function(){window.playerEvents.playerEventVolume()})),this.player.on("error",(function(){window.playerEvents.playerEventError()}))},playerEndedEvents:function(){this.player.on("ended",(function(){window.playerEvents.playerDispose();var e=document.getElementById("li1");e.insertAdjacentHTML("afterbegin",'<img src="/static/img/tmp.jpg" height="200" alt="画像">')}))}},mounted:function(){window.playerEvents=this,this.playerInitialize(),this.playerSetupEvents(),this.playerEndedEvents()},beforeDestroy:function(){this.player&&this.player.dispose()}},u=p,c=(n("3e35"),n("2877")),d=Object(c["a"])(u,a,l,!1,null,null,null),f=d.exports,y={name:"App",components:{"app-videos":f}},h=y,v=Object(c["a"])(h,i,o,!1,null,null,null),m=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(m)}}).$mount("#app")}});
//# sourceMappingURL=app.f7fa617f.js.map