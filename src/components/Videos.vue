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
                autoplay: true,
                controls: true,
                sources: [
                    {
                        src: "/public/video/OHHH.mp4",
                        type: "video/mp4"
                    }
                ]
            }
        };
    }
};
</script>
