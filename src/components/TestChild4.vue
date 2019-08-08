<template>
    <div class="TestChild4" @click="childFunc">
        {{child.countData}}
    </div>
</template>

<script>
    // import name from "@/components/name"
    export default {
        name: "TestChild4",
        props: ['child'],
        components: {},
        data() {
            return {}
        },
        computed: {},
        methods: {
            childFunc() {
                this.child.countData = !this.child.countData;
            },
        },
        mounted() {
            this.child.myFunc = this.childFunc;
        },
    }
</script>

<style lang="scss">
    .TestChild4 {
        border: 1px solid red;
        width: 100px;
        height: 50px;
    }
</style>