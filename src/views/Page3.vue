<template>
    <div class="Page3">
        <div class="container brr">
            <div class="row brr">
                <div class="col brr">
                    <div class="cont-trap">
                        <div class="trap"></div>
                        <span>Trap</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="cont-trap">
            <div class="trap"></div>
            <span>Trap</span>
        </div>
    </div>
</template>

<script>
    // import name from "@/components/name"
    export default {
        name: "Page3",
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
    .Page3 {
        flex: 1 0 auto;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;

        .container {
            flex: 1 0 auto;
            height: auto;

            .row {
                .col {

                }
            }
        }

        .cont-trap {

            margin: 7px;
            position: relative;
            width: 250px;
            border-radius: 15px 0 0 0;
            overflow: hidden;
            .trap {
                --size: 20px;
                border-top: 50px solid hsl(20, 100%, 50%);
                /*border-image: linear-gradient(to top right, hsl(20, 100%, 50%), hsl(53, 87%, 58%));*/
                /*border-left: var(--size) solid transparent;*/
                border-right: var(--size) solid transparent;
                height: 0;
            }
            span {
                position: absolute;
                top: 0;
                left: 0;
                width: 250px;
                height: 50px;
                line-height: 50px;
                text-align: center;
                color: white;
                font-size: 25px;
            }
        }
    }
</style>