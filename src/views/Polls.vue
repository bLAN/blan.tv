<template>
    <v-container class="grey lighten-5">
        <v-row
                align="center"
                justify="center"
        >
            <v-col>
                <iframe
                        src="https://strawpoll.com/embed/5ab1h61c"
                        frameborder="0"
                        scrolling="no"
                        height="250px"
                        width="100%">
                    >
                </iframe>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component
    export default class polls extends Vue {
    }
</script>

<style scoped lang="css">

</style>
