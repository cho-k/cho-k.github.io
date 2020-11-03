<template>
    <div id="app">
        <app-videos></app-videos>
    </div>
</template>

<script>
import Videos from "@/components/Videos";

export default {
    name: 'App',
    components: {
        'app-videos': Videos
    }
}
</script>
