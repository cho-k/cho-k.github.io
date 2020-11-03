<template>
    <div>
        <video-player :options="videoOptions"/>
    </div>
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
                autoplay: false,
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
