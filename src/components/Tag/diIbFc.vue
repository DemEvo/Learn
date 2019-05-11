<template>
    <div class="di-ib-fc">
        <di-fc>
            <slot></slot>
        </di-fc>
    </div>
</template>

<script>
    // import name from "@/components/name"
    export default {
        name: "diIbFc",
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
    .di-ib-fc {
        display: inline-block;
        /*border: 1px solid red;*/
    }
</style>