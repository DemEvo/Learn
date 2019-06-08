<template>

    <div class="Page1">



        <child-page1>
        </child-page1>

        <DivFlexWrap>
        Тут у нас какой то текст Тут у нас какой то текст Тут у нас какой то текст
        Тут у нас какой то текст Тут у нас какой то текст Тут у нас какой то текст
        Тут у нас какой то текст Тут у нас какой то текст Тут у нас какой то текст
        Тут у нас какой то текст Тут у нас какой то текст Тут у нас какой то текст
        Тут у нас какой то текст Тут у нас какой то текст Тут у нас какой то текст
        Тут у нас какой то текст Тут у нас какой то текст Тут у нас какой то текст
        Тут у нас какой то текст Тут у нас какой то текст Тут у нас какой то текст
        Тут у нас какой то текст Тут у нас какой то текст Тут у нас какой то текст
        Тут у нас какой то текст Тут у нас какой то текст Тут у нас какой то текст
        Тут у нас какой то текст Тут у нас какой то текст Тут у нас какой то текст


        </DivFlexWrap>
            <!--<section-content></section-content>-->

    </div>

</template>

<script>

    import ChildPage1 from '@/components/ChildPage1.vue'

    export default {
        name: "Page1",
        props: [],
        components: {
            ChildPage1,
//            SectionHeader,
//            SectionContent
        },
        data()
        {
            return {}
        }
        ,
        computed: {}
        ,
        methods: {}
        ,
        mounted()
        {
        }
        ,
    }
    ;
</script>

<style scoped lang="scss">

    .Page1 {
        /*column-count: 3;*/
        column-gap: 150px;
        column-width: 300px;
    }

</style>
