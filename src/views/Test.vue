<template>
    <div class="Test">
        <button @click="child.myFunc">Alert Child</button>
        <TestChild :child="child"></TestChild>
        <div class="cont">
            <div class="frow">
                <div class="logo">Logo</div>
                <div class="nav">Nav | Nav | Nav</div>
                <div class="search">
                    <input class="full-size">
                </div>
            </div>
        </div>
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
        methods: {},
        mounted() {
        },
    }
</script>

<style lang="scss">
    .Test {
        * {
            box-sizing: border-box;
        }
        button {
            width: 100px;
            height: 30px;
        }

        .cont {
            border: 1px solid red;
            margin: 0px auto;
            margin-top: 100px;

            width: 80%;
            height: auto;
            .frow {
                border: 1px solid red;
                width: 100%;
                height: auto;
                display: flex;
                flex-flow: row wrap;
                justify-content: space-between;
                align-content: center;

                .logo {
                    border: 1px solid red;
                    flex: 0 0 auto;
                    width: 200px;
                    height: 50px;
                    text-align: center;
                }

                .nav {
                    border: 1px solid red;
                    flex: 1 0 auto;
                    max-width: calc(50% - 200px);
                    min-width: 200px;
                    height: 50px;
                    text-align: center;
                }

                .search {
                    border: 1px solid red;
                    flex: 1 1 auto;
                    max-width: 100%;
                    min-width: 50%;
                    height: 50px;
                    padding: 5px;

                    .search-btn {
                        width: inherit;
                        height: inherit;
                        text-align: center;
                    }
                }
            }
        }
    }
    .full-size {
        width: 100%;
        height: 100%;
    }
</style>