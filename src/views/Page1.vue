<template>

    <div class="Page1">
        Тут у нас какой то текст



        <child-page1>
        </child-page1>

        <DivFlexWrap>
            И тут у нас какой то текст

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

    }

</style>
