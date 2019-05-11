<template>
    <div class="di-fc">
        <slot></slot>
    </div>
</template>

<script>
    // import name from "@/components/name"
    export default {
        name: "diFc",
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
    .di-fc {
        display: flex;
        flex-direction: column;
        border: 1px solid red;
    }
</style>