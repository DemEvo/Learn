<template>
    <div class="di-ib-fr">
        <di-fr>
            <slot></slot>
        </di-fr>
    </div>
</template>

<script>
    // import name from "@/components/name"
    export default {
        name: "diIbFr",
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
    .di-ib-fr {
        display: inline-block;
    }
</style>