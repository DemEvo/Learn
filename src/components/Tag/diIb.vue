<template>
    <div class="di-ib">
        <slot></slot>
    </div>
</template>

<script>
    // import name from "@/components/name"
    export default {
        name: "diIb",
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
    .di-ib {
        display: inline-block;
        border: 1px solid green;
    }
</style>