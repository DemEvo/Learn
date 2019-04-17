<template>

    <div class="Page1">
        Тут у нас какой то текст


        <child-page1>
        </child-page1>

    </div>

</template>

<script>

    import ChildPage1 from '@/components/ChildPage1.vue'

    export default {
        name: "Page1",
        props: [],
        components: {
            ChildPage1
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
