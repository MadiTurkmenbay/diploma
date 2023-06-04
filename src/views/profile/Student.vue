<template>
    <div class="container">
        <div class="profile">
            <Profile></Profile>

            <div class="profile_body">
                <div class="block info">
                    <h3>Студент туралы</h3>

                    <div class="inline_text">
                        <div class="img">
                            <img src="/images/person.png" alt="person">
                        </div>
                        <span>Әйел</span>
                    </div>
                    <div class="inline_text">
                        <div class="img">
                            <img src="/images/cake.png" alt="person">
                        </div>
                        <span>22.06.2002</span>
                    </div>
                    <div class="inline_text">
                        <div class="img">
                            <img src="/images/location.png" alt="person">
                        </div>
                        <span>ID: 218614</span>
                    </div>
                    <div class="inline_text">
                        <div class="img">
                            <img src="/images/message.png" alt="person">
                        </div>
                        <span>aliya.kaldybay@gmail.com</span>
                    </div>
                    <div class="inline_text">
                        <div class="img">
                        </div>
                        <span>№ сынақ кітапшасы: 194247</span>
                    </div>
                </div>
                <div class="block classmates">
                    <h3>Топтастарым</h3>


                    <div class="users">
                        <div class="user">
                            <div class="avatar">
                                <img src="/images/default_user.png" alt="user">
                            </div>
                            <div class="texts">
                                <div class="full_name">
                                    Лейла Кабес
                                </div>
                                <div class="group">АЖ 1905</div>
                            </div>
                        </div>
                        <div class="user">
                            <div class="avatar">
                                <img src="/images/default_user.png" alt="user">
                            </div>
                            <div class="texts">
                                <div class="full_name">
                                    Лейла Кабес
                                </div>
                                <div class="group">АЖ 1905</div>
                            </div>
                        </div>
                        <div class="user">
                            <div class="avatar">
                                <img src="/images/default_user.png" alt="user">
                            </div>
                            <div class="texts">
                                <div class="full_name">
                                    Лейла Кабес
                                </div>
                                <div class="group">АЖ 1905</div>
                            </div>
                        </div>
                        <div class="user">
                            <div class="avatar">
                                <img src="/images/default_user.png" alt="user">
                            </div>
                            <div class="texts">
                                <div class="full_name">
                                    Лейла Кабес
                                </div>
                                <div class="group">АЖ 1905</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="block nav">
                    <router-link :to="{name: 'home'}" class="term_link"><span>Оқыту</span><div class="arrow"><img src="/images/white_path.svg" alt="right"></div></router-link>
                    <router-link :to="{name: 'home'}" class="term_link"><span>Жеке құжат</span><div class="arrow"><img src="/images/white_path.svg" alt="right"></div></router-link>
                    <router-link :to="{name: 'home'}" class="term_link"><span>Бұйрықтар</span><div class="arrow"><img src="/images/white_path.svg" alt="right"></div></router-link>
                    <router-link :to="{name: 'home'}" class="term_link"><span>Әскери қызмет</span><div class="arrow"><img src="/images/white_path.svg" alt="right"></div></router-link>
                    <router-link :to="{name: 'personalData'}" class="term_link"><span>Байланысу мәліметтері</span><div class="arrow"><img src="/images/white_path.svg" alt="right"></div></router-link>
                    <router-link :to="{name: 'home'}" class="term_link"><span>Оқу мекемені бітіруі</span><div class="arrow"><img src="/images/white_path.svg" alt="right"></div></router-link>
                    <router-link :to="{name: 'personalData'}" class="term_link"><span>Жеке мәліметтер</span><div class="arrow"><img src="/images/white_path.svg" alt="right"></div></router-link>
                    <router-link :to="{name: 'home'}" class="term_link"><span>Қосымша мәлімет</span><div class="arrow"><img src="/images/white_path.svg" alt="right"></div></router-link>
                    <router-link :to="{name: 'certificates'}" class="term_link"><span>Сертификат <br> баллдары</span><div class="arrow"><img src="/images/white_path.svg" alt="right"></div></router-link>
                    <router-link :to="{name: 'home'}" class="term_link"><span>Ата-анасы туралы ақпарат</span><div class="arrow"><img src="/images/white_path.svg" alt="right"></div></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Profile from "@/components/Profile.vue";

export default {
    components: {Profile}
}
</script>

<style scoped lang="scss">

    .profile_body {
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
    }


    .block {
        width: calc(calc(50% - 10px) / 2);
        padding: 30px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid #DCDCDC;
        box-shadow: 0px 4px 38px rgba(0, 0, 0, 0.05);
        border-radius: 19px;
        display: flex;

        > h3 {
            display: block;
            font-weight: 500;
            font-size: 20px;
            line-height: 1.2;
            margin-bottom: 14px;

            color: #0075FF;
        }
        &.classmates {
            display: block;
        }
        &.nav {
            width: calc(50% - 70px);
            flex-wrap: wrap;

            .term_link {
                padding: 4px 45px 4px 4px;
                height: fit-content;
                min-height: 37px;
                span {
                    text-align: center;
                    width: 100%;
                }
            }
        }
        &.info {
            display: flex;
            flex-direction: column;

            .inline_text {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                align-self: stretch;
                padding: 16px 0;
                & + .inline_text {
                    border-top: 0.5px solid rgba(3, 2, 41, 0.1);
                }

                span {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 1.2;
                    word-wrap: anywhere;
                }
            }

            .img {
                width: 25px;
                height: 25px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 8px;
            }
        }
    }

    .users {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        width: 100%;
    }
    .user {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        align-self: stretch;

        & + .user {
            margin-top: 20px;
        }

        .avatar {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            background-color: #FFFFFF;
            overflow: hidden;
            margin-right: 15px;
            img {
                width: 100%;
                height: 100%;
            }
        }

        .full_name {
            font-weight: 400;
            font-size: 12px;
            line-height: 1.2;
            color: #000000;
            margin-bottom: 4px;
        }

        .group {
            font-size: 10px;
            line-height: 1.4;
            color: #000000;
            opacity: 0.5;
        }
    }
</style>