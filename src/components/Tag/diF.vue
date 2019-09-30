<template>
    <div class="di-f">
        <slot></slot>
    </div>
</template>

<script>
    // import name from "@/components/name"
    export default {
        name: "diF",
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
    .di-f {
      display: flex;
    }
</style>