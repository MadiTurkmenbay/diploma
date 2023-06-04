<template>
    <div class="switcher">
        <div class="nav_item nav_btn">
            <span>Басты бет</span>
            <div class="nav-overflow"></div>
            <div class="nav-wrapper">
                <div class="section_one">
                    <router-link :to="{name: 'main'}" ><span>Жаңалықтар</span></router-link>
                    <router-link :to="{name: 'main'}" ><span>ҚР БҒМ жаңалықтары</span></router-link>
                    <router-link :to="{name: 'main'}" ><span>Жиі қойылатын сұрақтар</span></router-link>
                    <router-link :to="{name: 'main'}" ><span>Құжаттар</span></router-link>
                    <router-link :to="{name: 'main'}" ><span>Пәндер тізімдемесі</span></router-link>
                    <router-link :to="{name: 'main'}" ><span>Сайт жаңалықтары</span></router-link>
                </div>
                <div class="section_one">
                    <router-link :to="{name: 'academy'}"><span>Академиялық саясат</span></router-link>
                    <router-link :to="{name: 'academy'}"><span>Академиялық адалдық</span> <span>ережелері</span></router-link>
                    <router-link :to="{name: 'academy'}"><span>Қорытынды бақылау</span> <span>ережелері</span></router-link>
                    <router-link :to="{name: 'academy'}"><span>Бейіндік емес пәндер</span></router-link>
                </div>
            </div>
        </div>

        <div class="nav_item nav_btn">
            <span>Бакалавр</span>
            <div class="nav-overflow"></div>
            <div class="nav-wrapper">
                <div class="section_one">
                    <router-link :to="{name: 'main'}" ><span>Сауалнама жүргізу</span></router-link>
                    <router-link :to="{name: 'profile'}" ><span>Жеке мәліметтерді</span> <span>редакциялау</span></router-link>
                    <router-link :to="{name: 'main'}" ><span>Тәжірибе</span></router-link>
                    <router-link :to="{name: 'main'}" ><span>Келісім-шарттар</span></router-link>
                </div>
                <div class="section_one">
                    <router-link :to="{name: 'academy'}"><span>Академиялық күнтізбе</span></router-link>
                    <router-link :to="{name: 'schedule'}"><span>Кесте</span></router-link>
                    <router-link :to="{name: 'academy'}"><span>Емтихандар кестесі</span></router-link>
                    <router-link :to="{name: 'academy'}"><span>Midterm кестесі</span></router-link>
                    <router-link :to="{name: 'academy'}"><span>Оқу жоспары</span></router-link>
                    <router-link :to="{name: 'academy'}"><span>Аттестация</span></router-link>
                    <router-link :to="{name: 'academy'}"><span>Қатысу және үлгерім</span> <span>журналы</span></router-link>
                </div>
                <div class="section_one">
                    <router-link to="/" ><span>Эдвайзердің файлдары</span></router-link>
                    <router-link to="/" ><span>Жеке оқу жоспары</span></router-link>
                    <router-link to="/" ><span>Транскрипт</span></router-link>
                    <router-link to="/" ><span>Сынақ кітапшасы</span></router-link>
                    <router-link to="/" ><span>Студент анкетасы</span></router-link>
                    <router-link to="/" ><span>ПОӘК</span></router-link>
                    <router-link to="/" ><span>Рейтинг</span></router-link>
                    <router-link to="/" ><span>Бітіру жұмыстарын</span> <span>жүктеу</span></router-link>
                </div>
                <div class="section_one">
                    <router-link to="/" ><span>Тестілеу түрі</span></router-link>
                    <router-link to="/" ><span>Онлайн тест</span></router-link>
                    <router-link to="/" ><span>Қашықтықтан оқыту</span> <span>курстары</span></router-link>
                    <router-link to="/" ><span>Қарыз</span></router-link>
                    <router-link to="/" ><span>Қайта тапсыру</span></router-link>
                    <router-link to="/" ><span>GPA көтеру</span></router-link>
                </div>
            </div>
        </div>

        <div class="nav_item nav_btn">
            <span>Е-қызмет</span>
            <div class="nav-overflow"></div>
            <div class="nav-wrapper"></div>
        </div>

        <div class="nav_item exit" @click="exit()">Шығу</div>

        <div class="nav_item">
            <img src="/images/settings.svg" alt="svg">
        </div>
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
            exit() {
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped lang="scss">
    .switcher {
        height: 52px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .nav_item {
            background: transparent;
            height: 100%;
            padding: 0 41px;
            border: 1px solid transparent;
            cursor: pointer;

            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 142.5%;

            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            &.select {
                border: 1px solid #0075FF;
                border-radius: 70px;
            }
            &.exit {
                color: #EF476F;
            }
        }
    }
    .nav_btn {
        position: relative;
        &:hover {
            color: #0075FF;
            &::after {
                transition: 0.3s ease;
                content: url("/images/path.png");
                margin: 0 0 5px 15px;
                opacity: 1;
            }
            .nav-overflow {
                z-index: 1;
            }
            .nav-wrapper {
                opacity: 1;
                z-index: 2;
            }
        }
        &::after {
            transition: 0.1s ease;
            content: url("/images/path.png");
            margin: 0 0 5px 15px;
            display: block;
            opacity: 0;
        }
        .nav-overflow {
            z-index: -1;
            position: absolute;
            width: 597px;
            height: 85px;
            top: 45px;
            left: calc(50% - 597px/2 + 0.5px);
        }
        .nav-wrapper {
            opacity: 0;
            z-index: -1;
            transition: 0.1s ease;
            position: absolute;
            top: calc(100% + 17px);
            background: #FFFFFF;
            border: 1px solid #DCDCDC;
            box-shadow: 0 0 21px rgba(0, 0, 0, 0.06);
            border-radius: 14px;
            display: flex;
            justify-content: center;
            align-items: flex-start;

            .section_one {
                padding: 25px 28px;
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                flex-direction: column;
                min-width: 276px;
                width: fit-content;
                align-self: stretch;

                a {
                    display: block;
                    font-size: 18px;
                    line-height: 1.4;
                    color: rgba(0, 0, 0, 0.46);

                    span {
                        white-space: nowrap;
                        font-style: normal;
                        font-weight: 500;
                    }
                    &:hover {
                        background: transparent;
                        color: #0075FF;
                    }
                    &.router-link-active {
                        color: #0075FF;
                    }
                }
                a + a {
                    margin-top: 17px;
                }

                & + .section_one {
                    border-left: 1px solid #DCDCDC;
                }
            }
        }
    }
</style>