<template>
    <div class="Promise">
        <h1>Promise Example</h1>
        <div class="cont">
            <button class="first" :disabled="fl_1">старт</button>
            <button class="second" :disabled="!fl_1">сброс</button>
        </div>
<!--        <div class="classs2 animated"></div>-->
    </div>
</template>

<script>
    // import name from "@/components/name"
    export default {
        name: "Promise",
        props: [],
        components: {},
        data() {
            return {
                fl_1: false,
                fl_2: false,
            }
        },
        computed: {},
        methods: {},
        mounted() {
        },
    }
</script>

<style lang="scss">
    .Promise {
        .cont {
            width: 80%;
            margin: 50px auto;
            padding: 30px;
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            align-items: center;

            .first {
                margin: 15px;
                padding: 0 30px;
                width: 200px;
                min-height: 40px;
            }

            .second {
                margin: 15px;
                padding: 0 30px;
                width: 200px;
                min-height: 40px;
            }
        }

        button {
            border-radius: 6px;
            border: 1px solid hsl(200, 80%, 64%);
            background:  linear-gradient( 0deg, hsl(200, 80%, 84%), hsl(200, 100%, 84%));
            &:disabled {
                color: hsl(0, 0%, 64%);
                border: 1px solid hsl(200, 0%, 84%);
                background:  linear-gradient( 0deg, hsl(200, 0%, 84%), hsl(200, 0%, 84%));
            } 
        }
        

        div.classs2 {
            width: 100px;
            height: 100px;
            background: red;

            &.animated {
                -webkit-animation: myfirst 5s; /* Chrome, Safari, Opera */
                animation: myfirst 5s;
                margin-bottom: 20px;
            }
        }

        /* Chrome, Safari, Opera */
        @-webkit-keyframes myfirst {
            0% {
                background: red;
            }
            25% {
                background: yellow;
            }
            50% {
                background: blue;
            }
            100% {
                background: green;
            }
        }
        /* Standard syntax */
        @keyframes myfirst {
            0% {
                background: red;
            }
            25% {
                background: yellow;
            }
            50% {
                background: blue;
            }
            100% {
                background: green;
            }
        }

    }
</style>