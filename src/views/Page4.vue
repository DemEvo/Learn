<template>
    <div class="Page4">
        <div v-for="item in config">
            <div v-for="v in item">{{v}}</div>
        </div>
    </div>
</template>

<script>
    import copy from "@/FastClone.js"

    export default {
        name: "Page4",
        props: [],
        components: {},
        data() {
            return {
                feature: {name: '', factor: []},
                config: [],
            }
        },
        computed: {},
        methods: {
        },
        mounted() {
            let tmp, tmpArr = [];
            tmp = copy(this.feature);
            tmpArr.push(copy(this.feature)); tmpArr[0].factor = [];
            tmpArr.push(copy(this.feature)); tmpArr[1].factor = [];
            tmpArr.push(copy(this.feature)); tmpArr[2].factor = [];

            tmpArr[0].factor[0] = 'Айрин';
            tmpArr[0].factor[1] = 'пение';
            tmpArr[0].factor[2] = 'Париж';

            tmpArr[1].factor[0] = 'Джоана';
            tmpArr[1].factor[1] = 'балет';
            tmpArr[1].factor[2] = 'Рим';

            tmpArr[2].factor[0] = 'Линда';
            tmpArr[2].factor[1] = 'кино';
            tmpArr[2].factor[2] = 'Чикаго ';

            tmp.name = '0'; tmp.factor = [];
            for (let i = 0; i < 3; i++) {
                // let v = {...tmpArr[i]};
                // console.log('v[',i,']:',v);
                tmp.factor.push(tmpArr[i]);
            }
            console.log('tmp:', tmp);
            this.config.push(copy(tmp));
            tmp.name = '1';
            this.config.push(copy(tmp));
            tmp.name = '2';
            this.config.push(copy(tmp));


        },
    }
</script>

<style lang="scss">
    .Page4 {

    }
</style>
