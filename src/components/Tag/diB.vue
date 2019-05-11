<template>
    <div class="di-b">
        <slot></slot>
    </div>
</template>

<script>
    // import name from "@/components/name"
    export default {
        name: "diB",
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
    .di-b {
        display: block;
        border: 1px solid green;
    }
</style>