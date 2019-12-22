<template>

    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
            |
            <router-link to="/page1">Стр 1</router-link>
            |
            <router-link to="/page2">Стр 2</router-link>
            |
            <router-link to="/page3">Стр 3</router-link>
            |
            <router-link to="/page4">Стр 4</router-link>
            |
            <router-link to="/test">Test</router-link>
            |
            <router-link to="/bootstrap">Bootstrap</router-link>
            |
            <router-link to="/pdf-viewers">Pdf Viewers</router-link>
            |
            <router-link to="/selector">Selector</router-link>

        </div>
        <router-view/>
    </div>

</template>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 100vh;
        height: auto;
    }

    #nav {
        flex: 0 0 auto;
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
