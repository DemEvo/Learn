<template>
    <div class="di-fr">
        <slot></slot>
    </div>
</template>

<script>
    // import name from "@/components/name"
    export default {
        name: "diFr",
        props: [],
        components: {},
        data() {
            return {}
        },
        computed: {},
        methods: {},
        mounted() {
        },
    }
</script>

<style lang="scss">
    .di-fr {
        display: flex;
        flex-direction: row;
        border: 1px solid red;
    }
</style>