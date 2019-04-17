<template>
    <div class="DivFlexWrap">
        <slot></slot>
        <slot></slot>
    </div>
</template>

<script>
    // import name from "@/components/name"
    export default {
        name: "DivFlexWrap",
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
    .DivFlexWrap {
        display: flex;
        flex-flow: row wrap;
        width: 100%;
        height: auto;
        &>h1 {
            color: blue;
        }
    }
</style>