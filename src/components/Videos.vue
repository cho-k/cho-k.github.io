<template>
    <ul>
        <li id="li1">
            <img src="/static/img/tmp.jpg" height="200" alt="画像">
        </li>
        <li id="li2">
            <img src="/static/img/tmp.jpg" height="200" alt="画像">
        </li>
        <li id="li3">
            <img src="/static/img/tmp.jpg" height="200" alt="画像">
        </li>
    </ul>
</template>

<script>
import videojs from 'video.js';

export default {
    name: 'Videos',
    data() {
        return {
            player: null,
            videoId: 'player',
            videoOptions: {
                autoplay: 'muted',
                controls: true,
                height: 200,
                sources: [
                    {
                        src: "/static/video/OHHH.mp4",
                        type: "video/mp4"
                    }
                ]
            }
        };
    },
    methods: {
        playerInitialize(){
            var li1 = document.getElementById('li1');
            var videoHtml = '<video class="video-js" id="' + this.videoId + '" options="' + this.videoOptions + '"></video>';
            li1.innerHTML = '';
            li1.insertAdjacentHTML('afterbegin', videoHtml);
            this.player = videojs(this.videoId, this.videoOptions, function onPlayerReady() {
                console.log('onPlayerReady', this);
            })
        },
        playerDispose(){
            this.player.dispose();
        },
        playerPlay(){
            this.player.play();
        },
        playerPause(){
            this.player.pause();
        },
        playerSetSrc(url){
            this.player.src(url);
        },
        playerSetVolume(float){
            this.player.volume(float); 
        },
        playerSetPoster(url){
            this.player.poster(url);
        },
        playerSetTime(time){
            this.player.currentTime(time);
        },
        playerEventEnded(){
            console.log('ended');
        },
        playerEventVolume(){
            this.volume = this.player.volume();
        },
        playerEventError(){
            console.log( this.playerGetError() )
        },
        playerGetPaused(){
            return this.player.paused();
        },
        playerGetTime(){
            return this.player.currentTime();
        },
        playerGetError(){
            return this.player.error().message;
        },
        playerSetupEvents(){
            this.player.on('volumechange', function(){ window.playerEvents.playerEventVolume(); });
            this.player.on('error', function(){ window.playerEvents.playerEventError(); });
        },
        playerEndedEvents(){
            this.player.on('ended', function(){
                window.playerEvents.playerDispose();
                var li1 = document.getElementById('li1');
                li1.insertAdjacentHTML('afterbegin', '<img src="/static/img/tmp.jpg" height="200" alt="画像">');
            });
        }
    },
    mounted(){
        window.playerEvents = this;
        this.playerInitialize();
        this.playerSetupEvents();
        this.playerEndedEvents();
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    }
};
</script>

<style>
@import "~video.js/dist/video-js.css";
</style>
