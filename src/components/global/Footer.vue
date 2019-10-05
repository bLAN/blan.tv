<template>
    <v-footer
            dark
            padless
    >
        <v-card
                flat
                tile
                class="[ primary lighten-1 ] [ white--text text-center ] [ damnFooter ]"
        >
            <v-card-text>
                <v-btn
                        v-for="icon in icons"
                        :key="icon"
                        class="mx-4 white--text"
                        icon
                >
                    <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
            </v-card-text>

            <v-card-text class="[ white--text pt-0 ]">
                Vi takkar for støtta de har gitt oss i heile 20 år!
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>bLAN</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component
    export default class Footer extends Vue {
    }
</script>

<style scoped lang="css">
    .damnFooter{
        width: 100%;
    }
</style>
