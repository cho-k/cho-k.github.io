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
            },
            count: 1
        };
    },
    methods: {
        playerInitialize(){
            var liTag = document.getElementById('li' + this.count);
            var videoHtml = '<video autoplay class="video-js" id="' + this.videoId + '" options="' + this.videoOptions + '"></video>';
            liTag.innerHTML = '';
            liTag.insertAdjacentHTML('afterbegin', videoHtml);

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

                var liTag = document.getElementById('li' + window.playerEvents.count);
                liTag.insertAdjacentHTML('afterbegin', '<img src="/static/img/tmp.jpg" height="200" alt="画像">');

                window.playerEvents.count = window.playerEvents.count + 1;
                if(window.playerEvents.count > 3){
                    window.playerEvents.count = 1;
                }

                window.playerEvents.goThrough();
            });
        },
        goThrough(){
            window.playerEvents = this;
            this.playerInitialize();
            this.playerSetupEvents();
            this.playerEndedEvents();
        }
    },
    mounted(){
        this.goThrough();
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
