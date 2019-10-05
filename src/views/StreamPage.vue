<template>
    <v-container class="grey lighten-5">
        <v-row>
            <v-col
                cols="12"
                lg="9"
                md="9"
                sm="12"

        >
                <div class="streamContainer">
                    <Stream></Stream>
                </div>
        </v-col>
            <v-col
                    cols="3"
                    class="hidden-sm-and-down"
            >
                <div class="streamContainer">
                    <Chat/>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import Stream from "@/components/Stream.vue";
    import Chat from "@/components/Chat.vue";

    @Component({
        components: {
            Stream,
            Chat,

        }
    })
    export default class StreamPage extends Vue {

    }
</script>

<style scoped lang="css">
    .streamContainer {
        height: 80vh;
    }
</style>
