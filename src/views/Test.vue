<template>
    <div class="Test">
        <button @click="child.myFunc">Alert Child</button>
        <TestChild :child="child"></TestChild>
    </div>
</template>

<script>
    import TestChild from "@/components/TestChild"

    export default {
        name: "Test",
        props: [],
        components: {TestChild},
        data() {
            return {
                child: {
                    myFunc: null
                },
            }
        },
        computed: {},
        methods: {
        },
        mounted() {
        },
    }
</script>

<style lang="scss">
    .Test {
        button {
            width: 100px;
            height: 30px;
        }
    }
</style>