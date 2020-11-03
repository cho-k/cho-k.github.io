<template>
    <ul>
        <video-player :options="videoOptions"/>
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
