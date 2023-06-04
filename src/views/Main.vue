<template>
    <section class="block2">
        <div class="container">
            <div class="card">
                <div class="news">
                    <div class="date">
                        <div class="day">25</div>
                        <div class="my">04.2023</div>
                    </div>
                    <div class="content">
                        <div class="title">Құрметті оқытушылар!</div>
                        <div class="text">
                            2023 жылы 20-шы Наурыз бен 16-ші сәуір аралығында әл-Фараби атындағы ҚазҰУ-нің
                            Әлеуметтанулық зерттеулер және әлеуметтік инжиниринг орталығы ОПҚ-ны объективті бағалау
                            мен оқу үдерісінің тиімділігін арттыру мақсатында «Оқытушы әріптестер көзқарасымен - 2023»
                                Сауалнама бірыңғай анонимді түрде жүргізіледі.
                            (Сауалнама қазақ және орыс тілдерінде «УНИВЕР» жүйесіне енгізілген) және
                            «Декан оқытушылар көзқарасымен» сауалнамаларын жүргізеді.
                        </div>
                    </div>
                </div>
                <div class="news">
                    <div class="date">
                        <div class="day">25</div>
                        <div class="my">04.2023</div>
                    </div>
                    <div class="content">
                        <div class="title">Құрметті оқытушылар, магистранттар және студенттер!</div>
                        <div class="text">
                            Әлеуметтанулық зерттеулер және әлеуметтік инжиниринг орталығы 2023 жылдың 20-шы наурызы мен 16-шы сәуір аралығында өткізілетін келесі сауалнамаларға қатысуларыңызды сұраймыз:
                            «Студенттердің қанағаттану деңгейін бағалау – 2023»
                            «Оқытушы студенттердің көзқарасымен – 2023»
                            «Декан студенттер көзқарасымен – 2023»
                            «Сыбайлас жемқорлықтан тыс университет – 2023»
                            Сауалнама анонимді түрде жүргізіледі!
                            Сауалнамаға қатысқаныңыз үшін алғысымызды білдіреміз!
                            Сіздердің пікірлеріңіз оқу процесінің тиімділігі бағалау үшін өте маңызды!
                            Сауалнама қазақ, орыс және ағылшын тілдерінде «УНИВЕР» жүйесіне енгізілген.
                        </div>
                    </div>
                </div>
                <div class="news">
                    <div class="date">
                        <div class="day">25</div>
                        <div class="my">04.2023</div>
                    </div>
                    <div class="content">
                        <div class="title">Құрметті студенттер!</div>
                        <div class="text">
                            2-3 курс студенттеріне арналған Қарашығанақ Петролиум Оперейтинг Б.В. компаниясындағы өндірістік практика.
                            Құжаттар қабылдау мерзімі: 15 сәуір 2023
                            Практикадан өту шарттарын төмендегі сілтеме арқылы көре аласыздар: https://t.me/rabota_kaznu
                            https://drive.google.com/drive/folders/1OYht9lU7ApUcrfIubcWHxLijsUzn2XWL?usp=sharing
                            Құрметпен,
                            Кәсіби даму және мансап кеңсесі (Керемет, 107 кабинет)
                        </div>
                    </div>
                </div>
                <div class="news">
                    <div class="date">
                        <div class="day">25</div>
                        <div class="my">04.2023</div>
                    </div>
                    <div class="content">
                        <div class="title">Құрметті оқытушылар!</div>
                        <div class="text">
                            2023 жылы 20-шы Наурыз бен 16-ші сәуір аралығында әл-Фараби атындағы ҚазҰУ-нің
                            Әлеуметтанулық зерттеулер және әлеуметтік инжиниринг орталығы ОПҚ-ны объективті бағалау
                            мен оқу үдерісінің тиімділігін арттыру мақсатында «Оқытушы әріптестер көзқарасымен - 2023»
                                Сауалнама бірыңғай анонимді түрде жүргізіледі.
                            (Сауалнама қазақ және орыс тілдерінде «УНИВЕР» жүйесіне енгізілген) және
                            «Декан оқытушылар көзқарасымен» сауалнамаларын жүргізеді.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">


    .card {
        width: 100%;
        background-color: #FFFFFF;
        border: 1px solid #DCDCDC;
        box-shadow: 0px 0px 38px rgba(0, 0, 0, 0.05);
        border-radius: 31px;
        padding: 44px 48px 48px 40px;
    }

    .news {
        padding: 24px;
        background: rgba(0, 0, 0, 0.03);
        border-radius: 19px;
        display: flex;
        justify-content: flex-start;

        & + .news {
            margin-top: 50px;
        }
        .date {
            background: rgba(67, 197, 158, 0.19);
            border: 1px solid #DCDCDC;
            border-radius: 11px 11px 11px 0px;
            min-width: 80px;
            height: 80px;
            margin-right: 30px;

            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            color: #43C59E;
            .day {
                font-weight: 500;
                font-size: 24px;
            }
            .my {
                font-weight: 500;
                font-size: 14px;
            }
        }

        .content {
            .title {
                font-weight: 700;
                font-size: 18px;
                margin-bottom: 10px;
            }

            .text {
                font-size: 18px;
                line-height: 256%;
            }
        }
    }
</style>
