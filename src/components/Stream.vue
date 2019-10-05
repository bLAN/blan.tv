<template>
        <iframe
                src="https://player.twitch.tv/?channel=breimlan"
                frameborder="0"
                allowfullscreen="true"
                scrolling="no"
                height="100%"
                width="100%"></iframe>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component
    export default class Stream extends Vue {
    }
</script>

<style scoped lang="css">


</style>
