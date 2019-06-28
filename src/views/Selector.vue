<template>

    <div class="Selector">
        <a class="main-item" href="javascript:void(0);" tabindex="1">Открыть подменю</a>
        <ul class="sub-menu">
            <li><a href="#1">подпункт 1</a></li>
            <li><a href="#2">подпункт 2</a></li>
            <li><a href="#3">подпункт 3</a></li>
        </ul>

        <div class="nav-cont">
            <div class="nav-lang">
                <ul class="topmenu">
                    <li class="li">{{selector}}

                        <ul class="submenu">
                            <li class="li-item"
                                v-for="item in itemSelector"
                                @click="clickLang(item)">
                                {{item}}

                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="fake"></div>
    </div>

</template>

<script>
    // import test from "@/test/test"
    export default {
        name: "Selector",
        props: [],
        components: {},
        data() {
            return {
                selector: 'English',
                itemSelector: [
                    'English',
                    'Deutsch',
                    'Русский',
                ],
                close: false,
            }
        },
        computed: {},
        methods: {
            clickLang(v){
                this.selector = v;
                this.close = true;
            },
        },
        mounted(){
        },
    };
</script>

<style scoped lang="scss">

    .Selector {
        .sub-menu {
            display: none;
        }
        .main-item:focus ~ .sub-menu,
        .main-item:active ~ .sub-menu,
        .sub-menu:hover {
            display: block;
        }

        .nav-cont {
            width: 100%;
            height: 30px;
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-end;
            align-items: center;
            border: 1px solid red;

            .nav-lang {
                position: relative;
                width: auto;
                height: auto;
                margin-right: 30px;

                .submenu {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    /*z-index: 10; */
                    transition: 0.5s ease-in-out;
                    background-color: red;
                    padding: 10px 0;
                }

                .topmenu > .li {
                    display: inline-block;
                    width: 100px;
                    position: relative;
                }

                ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    background-color: yellow;
                }

                ul .li:hover .submenu {
                    display: block;
                }
                
                /*.topmenu > li:last-child {*/
                /*margin-right: 0;*/
                /*}*/

                .li-item {
                    background-color: hsl(84, 100%, 59%);
                }

            }
        }

        .fake {
            width: 100%;
            height: 500px;
            background-color: hsl(150, 50%, 70%);

        }
    }

</style>
