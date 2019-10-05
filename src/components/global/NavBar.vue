<template>
    <div>
        <v-toolbar>
            <v-toolbar-title>bLAN 20års Jubileum!</v-toolbar-title>

            <div class="flex-grow-1"></div>

            <v-toolbar-items>
                <v-btn
                        v-for="route in navlinks"
                        :key="route.url"
                        text
                        :to="route.url"
                >
                    {{ route.title }}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component({
        components: {}
    })
    export default class NavBar extends Vue {
        navlinks = [
            {
                url: '/',
                title: 'Stream'
            },
            {
                url: '/om-oss',
                title: 'Om Oss'
            }
        ];
    }
</script>

<style scoped lang="sass">

</style>
