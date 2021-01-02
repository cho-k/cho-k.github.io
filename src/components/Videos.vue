<template>
    <ul>
        <li>
            <video class="video-js" :id="videoId" :options="videoOptions"></video>
            <img src="/static/img/tmp.jpg" alt="画像">
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
            videoId: 'player1',
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
            this.player.on('ended', function(){ window.playerEvents.playerDispose(); });
        },
    },
    mounted(){
        window.playerEvents = this;
        this.playerInitialize();
        this.playerSetupEvents();
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
