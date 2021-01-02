<template>
    <ul>
        <li>
            <video-player ref="videoPlayer1" id="player1" :options="videoOptions"/>
        </li>
        <li>
            <video-player ref="videoPlayer2" id="player2" :options="videoOptions"/>
        </li>
        <li>
            <video-player ref="videoPlayer3" id="player3" :options="videoOptions"/>
        </li>
    </ul>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer";

export default {
    name: 'Videos',
    components: {
        VideoPlayer
    },
    data() {
        return {
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
    }
};
</script>
