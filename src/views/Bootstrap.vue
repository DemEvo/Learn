<template>
    <div class="Bootstrap">
        <div>
            <b-button variant="outline-primary" class="auth">
                button
            </b-button>
        </div>
        <div>
            <b-button variant="outline-primary mb-3">
                button
            </b-button>
        </div>

        <div class="container">
            <div class="row d-flex row-class">
                <div class="col-4 logo my-3">
                    <div id="logo">logo</div>
                </div>
                <div class="col-4 nav-bar my-3">
                    <div id="nav-id">navbar | navbar | navbar</div>
                </div>
                <div class="col-4 search my-3">
                    <b-button variant="outline-primary btn-class">search</b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import name from "@/components/name"
    export default {
        name: "Bootstrap",
        props: [],
        components: {},
        data() {
            return {
                // auth: 'auth',
            }
        },
        computed: {},
        methods: {},
        mounted() {
        },
    }
</script>

<style lang="scss">
    .Bootstrap {

        .auth {
            width: 250px;
            height: 50px;

            font-family: Roboto;
            font-size: 16px;
            font-weight: 600;

            border-radius: 25px;
            border: 1px solid red;
            color: red;
            background-color: hsla(39, 80%, 80%, .7);
            margin-bottom: 1rem;

            &.btn-outline-primary {
                &:focus, &:focus:active {
                    box-shadow: 0 0 0 0.2rem hsla(120, 100%, 50%, 0.5);
                }

                &:active {
                    color: hsl(0, 0%, 40%);
                    background-color: hsla(120, 100%, 50%, .7);
                    border-color: hsl(120, 100%, 50%);
                }
            }
        }

        .row-class {
            border: 1px solid red;
            flex-flow: row wrap;
            justify-content: space-between;
            align-content: center;

            & > * {
                box-sizing: border-box;
            }

            .logo {
                flex: 0 0 auto;
                width: 267px;
                height: 40px;
                /*text-align: center;*/
                border: 1px solid hsla(39, 100%, 50%, .3);
                #logo {
                    margin: auto;
                }
            }

            .nav-bar {
                flex: 1 0 auto;
                min-width: 267px;
                height: 40px;

                border: 1px solid hsla(39, 100%, 50%, .3);
                #nav-id {
                    margin: auto;
                }
            }

            .search {
                flex: 10 1 auto;
                width: auto;
                height: auto;
                border: 1px solid hsla(39, 100%, 50%, .3);

                .btn-class {
                    width: 100%;
                    height: 40px;
                }
            }
        }

    }
</style>