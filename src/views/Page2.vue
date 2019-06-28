<template>

    <div class="Page2">
        <div class="place">
            <div class="h"></div>
            <div class="place2">
                <div class="w"></div>
                <!--<div class="place3">-->
                    <div class="place3">
                        <div class="cont"></div>
                        <div class="cont"></div>
                    </div>
                    <div class="place3">
                        <div class="cont"></div>
                        <div class="cont"></div>
                    </div>

                <!--</div>-->
            </div>
            <div class="cont2"></div>
            <div class="fx-spring"></div>
        </div>
    </div>

</template>

<script>
    // import test from "@/test/test"
    export default {
        name: "Page2",
        props: [],
        components: {},
        data() {
            return {}
        },
        computed: {},
        methods: {},
        mounted(){
        },
    };
</script>

<style scoped lang="scss">

    .Page2 {
        padding: 20px;
        .place {
            border: 5px solid red;
            min-width: 112px;
            display: flex;
            .h {
                /*border: 1px solid orangered;*/
                width: 0px;
                height: 0px;
            }
            .place2 {
                border: 1px solid orange;
                width: inherit;
                display: inline-block;
                .w {
                    /*border: 1px solid orangered;*/
                    width: 0px;
                    height: 0px;
                }
                .place3 {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: center;
                    align-items: center;

                    .cont {
                        border: 1px solid darkorange;
                        width: 100px;
                        height: 30px;
                        color: black;
                        background-color: hsl(80, 80%, 88%);
                    }
                }

            }
            .cont2 {
                border: 1px solid darkorange;
                width: 200px;
                height: 60px;
                color: black;
                background-color: hsl(80, 80%, 88%);
            }
            .fx-spring {
                flex: 1 1 auto;
            }
        }
    }

</style>
