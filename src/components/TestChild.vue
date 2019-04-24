<template>
    <div class="TestChild">
        <div></div>
    </div>
</template>

<script>
    // import name from "@/components/name"
    export default {
        name: "TestChild",
        props: ['child'],
        components: {},
        data() {
            return {}
        },
        computed: {},
        methods: {
            childAlert() {
                alert('Это алерт');
            },
        },
        mounted() {
            this.child.myFunc = this.childAlert
        },
    }
</script>

<style lang="scss">
    .TestChild {

    }
</style>