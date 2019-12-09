<template>
    <div class="Page3">
        <div class="container brr">
            <div class="row brr">
                <div class="col brr">
                    <div class="trap">
                        Trap
                    </div>
                </div>
            </div>
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
                    .trap {
    
                    }
                }
            }
        }
    }
</style>