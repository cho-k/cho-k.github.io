(function(e){function t(t){for(var r,l,a=t[0],p=t[1],u=t[2],c=0,y=[];c<a.length;c++)l=a[c],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&y.push(o[l][0]),o[l]=0;for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(e[r]=p[r]);s&&s(t);while(y.length)y.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var p=n[a];0!==o[p]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},i=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],p=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var s=p;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("app-videos")],1)},i=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("video-player",{attrs:{id:"player1",options:e.videoOptions}}),n("video-player",{attrs:{id:"player2",options:e.videoOptions}}),n("video-player",{attrs:{id:"player3",options:e.videoOptions}})],1)},a=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("video",{ref:"videoPlayer",staticClass:"video-js"})])},u=[],s=n("f0e2"),c={name:"VideoPlayer",props:{options:{type:Object,default:function(){return{}}}},data:function(){return{player:null}},methods:{playerInitialize:function(){this.player=Object(s["a"])(this.$refs.videoPlayer,this.options,(function(){console.log("onPlayerReady",this)}))},playerDispose:function(){this.player.dispose()},playerPlay:function(){this.player.play()},playerPause:function(){this.player.pause()},playerSetSrc:function(e){this.player.src(e)},playerSetVolume:function(e){this.player.volume(e)},playerSetPoster:function(e){this.player.poster(e)},playerSetTime:function(e){this.player.currentTime(e)},playerEventEnded:function(){console.log("ended")},playerEventVolume:function(){this.volume=this.player.volume()},playerEventError:function(){console.log(this.playerGetError())},playerGetPaused:function(){return this.player.paused()},playerGetTime:function(){return this.player.currentTime()},playerGetError:function(){return this.player.error().message},playerSetupEvents:function(){this.player.on("ended",(function(){window.playerEvents.playerDispose()})),this.player.on("volumechange",(function(){window.playerEvents.playerEventVolume()})),this.player.on("error",(function(){window.playerEvents.playerEventError()}))}},mounted:function(){window.playerEvents=this,this.playerInitialize(),this.playerSetupEvents()},beforeDestroy:function(){this.player&&this.player.dispose()}},y=c,f=(n("9bb6"),n("2877")),d=Object(f["a"])(y,p,u,!1,null,null,null),v=d.exports,h={name:"Videos",components:{VideoPlayer:v},data:function(){return{videoOptions:{autoplay:"muted",controls:!0,height:200,sources:[{src:"/static/video/OHHH.mp4",type:"video/mp4"}]}}}},m=h,b=Object(f["a"])(m,l,a,!1,null,null,null),O=b.exports,w={name:"App",components:{"app-videos":O}},E=w,g=Object(f["a"])(E,o,i,!1,null,null,null),P=g.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(P)}}).$mount("#app")},"9bb6":function(e,t,n){"use strict";var r=n("d9b0"),o=n.n(r);o.a},d9b0:function(e,t,n){}});
//# sourceMappingURL=app.795c3893.js.map