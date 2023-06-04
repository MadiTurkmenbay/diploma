<template>
    <div class="switcher">
        <button @click="switchLang('kz')" :class="select === 'kz' ? 'select' : ''">Қазақ</button>

        <button @click="switchLang('ru')" :class="select === 'ru' ? 'select' : ''">Русский</button>

        <button @click="switchLang('en')" :class="select === 'en' ? 'select' : ''">English</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                select: 'kz',
            }
        },
        methods: {
            switchLang(lang) {
                this.select = lang;
            }
        }
    }
</script>

<style scoped lang="scss">
    .switcher {
        width: 365px;
        height: 52px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            background: transparent;
            height: 100%;
            padding: 0 56px;
            border: 1px solid transparent;
            cursor: pointer;

            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 142.5%;
            &.select {
                border: 1px solid #0075FF;
                border-radius: 70px;
            }
        }
    }
</style>