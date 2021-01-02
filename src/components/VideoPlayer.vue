<template>
    <video class="video-js"></video>
</template>

<script>
import videojs from 'video.js';

export default {
    name: "VideoPlayer",
    props: {
        ref: {
            type: String,
            default: 'videoPlayer'
        },
        options: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
            player: null
        }
    },
    methods: {
        playerInitialize(){ 
            this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
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
            this.player.on('ended', function(){ window.playerEvents.playerDispose(); });
            this.player.on('volumechange', function(){ window.playerEvents.playerEventVolume(); });
            this.player.on('error', function(){ window.playerEvents.playerEventError(); });
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
}
</script>

<style>
@import "~video.js/dist/video-js.css";
</style>
