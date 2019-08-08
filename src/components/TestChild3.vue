<template>
    <div class="TestChild3" @click="childFunc">
        {{child.countData}}
    </div>
</template>

<script>
    // import name from "@/components/name"
    export default {
        name: "TestChild3",
        props: ['child'],
        components: {},
        data() {
            return {}
        },
        computed: {},
        methods: {
            childFunc(){
                this.child.countData = !this.child.countData;
            },
        },
        mounted() {
            this.child.myFunc = this.childFunc;
        },
    }
</script>

<style lang="scss">
    .TestChild3 {
        border: 1px solid red;
        width: 100px;
        height: 50px;
    }
</style>