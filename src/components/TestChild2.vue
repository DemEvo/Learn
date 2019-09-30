<template>
    <div class="TestChild2">
        <div class="tch-inset" @click="funEve">
            <slot></slot>
            <div class="tch2"
                 v-if="pass" >Password</div>
            <div class="tch2"
                 v-if="!pass" >Text</div>
        </div>
    </div>
</template>

<script>
    // import name from "@/components/name"
    export default {
        name: "TestChild2",
        props: ['password'],
        components: {},
        data() {
            return {
            }
        },
        computed: {
            pass(){
                return (this.password.pass === 'password');
            },

        },
        methods: {

            funEve(){
                this.password.functionEve();
            },
        },
        mounted() {
        },
    }
</script>

<style lang="scss">
    .TestChild2 {
        margin: 30px auto;
        width: 200px;
        height: auto;
        min-height: 100px;

        border-radius: 2px;
        box-shadow: 1px 4px 6px hsla(210, 29%, 40%, .7);

        display: flex;
        flex-flow: column nowrap;
        justify-content: center;

        .tch-inset {
            width: 100%;
            height: auto;
            min-height: 100%;
            background-color: hsl(120, 0%, 87%);
            border-radius: 2px;
            box-shadow: inset 0px 0px 8px hsla(210, 0%, 30%, .7);

            flex: 1 1 auto;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;

            .tch2 {
                display: inline-block;
                width: 100%;
                background-color: hsla(0, 0%, 0%, 0);
                color: hsla(210, 29%, 40%, 1);
            }
        }
    }
</style>