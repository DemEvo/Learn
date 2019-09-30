<template>
    <div class="Test">
        <button @click="child.myFunc">Alert Child</button>
        <TestChild :child="child"></TestChild>

        <!--        <div @click="functionEve">functionEve</div>-->

        <TestChild2 :password="parrent">
            <div>Test Child {{pass}}</div>
        </TestChild2>


        <!--        <div class="cont">-->
        <!--            <div class="frow">-->
        <!--                <div class="logo">Logo</div>-->
        <!--                <div class="nav">Nav | Nav | Nav</div>-->
        <!--            </div>-->
        <!--            <div class="frow">-->
        <!--                <div class="search">-->
        <!--                    <input class="full-size">-->
        <!--                </div>-->
        <!--            </div>-->
        <!--        </div>-->

        <TestChild3 :child="childN"></TestChild3>
        <TestChild4 :child="childN"></TestChild4>
    </div>
</template>

<script>
    import TestChild from "@/components/TestChild"
    import TestChild2 from "@/components/TestChild2"
    import TestChild3 from "@/components/TestChild3"
    import TestChild4 from "@/components/TestChild4"
    export default {
        name: "Test",
        props: [],
        components: {TestChild, TestChild2,TestChild3, TestChild4},
        data() {
            return {
                childN: {
                    countData: 0,
                    myFunc: null,
                },
                child: {
                    myFunc: null,
                },
                parrent: {
                    pass: 'password',
                    functionEve() {
                        this.pass = (this.pass === 'password' ? 'text' : 'password');
                        // alert(this.pass);
                    },
                },

            }
        },
        computed: {},
        methods: {
            functionEve() {
                this.pass = (this.pass === 'password' ? 'text' : 'password');
                // alert(this.pass);
            },
        },
        mounted() {

        },
    }
</script>

<style lang="scss">
    .Test {
        * {
            box-sizing: border-box;
            text-align: center;
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
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            align-content: center;

            .frow {
                border: 1px solid red;
                flex: 1 1 auto;
                min-width: 50%;
                max-width: 100%;
                height: auto;
                display: flex;
                flex-flow: row wrap;
                justify-content: space-between;
                align-content: center;

                .logo {
                    border: 1px solid red;
                    flex: 0 0 auto;
                    width: calc(25px * 10.7);
                    height: 50px;
                    margin-right: 10px;
                }

                .nav {
                    border: 1px solid red;
                    flex: 1 0 auto;
                    max-width: 50%;
                    min-width: calc(50% - 10.7 * 25px);
                    min-height: 50px;
                    max-height: auto;
                }

                .search {
                    border: 1px solid red;
                    flex: 1 1 auto;
                    max-width: 100%;
                    min-width: calc(50% - 10px);
                    height: 50px;
                    padding: 5px;

                    .search-btn {
                        width: inherit;
                        height: inherit;
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