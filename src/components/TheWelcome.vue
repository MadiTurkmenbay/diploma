<template>
    <section class="block1">
        <div class="container">
            <div class="auth" :class="switcher ? 'form' : ''">
                <div v-if="switcher" class="auth_form">
					<div class="h2">Авторизация</div>
					<p>Логин мен парольді еңгізіңіз</p>

					<div class="form_item" :class="{error: errors.get('username')}">
						<div class="label">Логин</div>
						<input type="text" v-model="loginForm.username" @keyup.enter="auth()" @change="errors.clear('username')"  placeholder="Логинді осы жерге еңгізіңіз">
					</div>

					<div class="form_item" :class="{error: errors.get('password')}">
						<div class="label">Пароль</div>
						<input type="text" v-model="loginForm.password" @keyup.enter="auth()" @change="errors.clear('password')" placeholder="Парольді осы жерге еңгізіңіз">
					</div>
                </div>

                <div v-else class="h1">
                    Әл-Фараби атындағы Қазақ Ұлттық Университеті
                </div>

                <div class="login_btn">
					<el-button @click="auth()" :loading="loading">Кіру</el-button>
<!--                    <button >Кіру</button>-->
                    <span v-if="!switcher">Campus жүйесіне кіру</span>
                </div>
            </div>
        </div>
    </section>

    <section class="block2">
        <div class="container">
            <div class="card">
                <div class="title">Құрметті Campus 1.0 қолданушысы!</div>

                <div class="question">
                    <div class="h2">Жүйеге кіру үшін логин мен парольды қайдан алу керек?</div>

                    <ol>
                        <li>Егер Сіз студент болсаңыз, логин мен парольді эдвайзеріңізден алыңыз.</li>
                        <li>Егер Сіз оқытушы болсаңыз, логин мен парольді Тіркеу кеңсесінен алыңыз.</li>
                        <li>Егер Сіз студенттің ата-анасы болсаңыз, логин мен пароль алу <br/>үшін балаңыздың эдвайзеріне жеке жолығуыңыз керек</li>
                    </ol>
                </div>

                <div class="question">
                    <div class="h2">Логин немесе пароліңізді ұмытып қалсаңыз:</div>

                    <ol>
                        <li>Егер Сіз студенттің ата-анасы болсаңыз, логин мен пароль алу үшін балаңыздың<br/> эдвайзеріне жеке жолығуыңыз керек. Эдвайзер Сізге жаңа пароль береді</li>
                        <li>Егер Сіз оқытушы болсаңыз (эдвайзер және кафедра меңгерушісі), <br/>Тіркеу-кеңсесіне хабарласыңыз. Тіркеу кеңсесі парольды <br/>ауыстырып, Сізге жаңа пароль береді.</li>
                        <li>Тіркеу кеңсесінің және университет бөлімдерінің <br/>қызметкерлері АТД бағдарламаларды қолдау бөліміне <br/>хабарласуы тиіс. Жеке куәлігіңізді көрсетсеңіз, <br/>жаңа пароль беріледі</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Errors from "@/assets/js/Errors";
import { mapActions, mapState } from 'vuex'

export default {
    data() {
        return {
			switcher: false,
            loginForm: {
                username: '',
                password: ''
            },
			loading: false,
            errors: new Errors(),
        }
    },
	computed: {
		...mapState([''])
	},
    methods: {
		...mapActions([
			'login'
		]),
        async auth() {
            if (!this.switcher) {
                this.switcher = true;
            } else {
				if(!this.loading) {
					try {
						await this.login(this.loginForm)
						this.$router.push('/main')
					} catch {
						this.errors.set('password', 'Пароль немесе логин қате')
					}
				}
            }
        }
    }
}
</script>


<style lang="scss" scoped>
    .auth {
        width: 50%;
        transition: 0.3s ease;

        &.form {
            width: 458px;

            .login_btn {
                justify-content: center;
            }
        }
    }

    .auth_form {
        padding: 22px 30px;

        .h2 {
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 1.2;
            margin-bottom: 5px;
        }
        p {
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 1.3;
            color: #444444;
            margin-bottom: 46px;
        }

        .form_item {
            width: 100%;
            padding:0 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .label {
                font-weight: 700;
                font-size: 20px;
                line-height: 1.2;

                color: #000000;
            }

            &.error {
                input {
                    border-color: red;
                }
                .label {
                    color: red;
                }
            }
            input {
                background: #FFFFFF;
                border: 1px solid #545454;
                border-radius: 8px;
                height: 42px;
                width: 70%;
                padding: 0 25px;
            }

            & + .form_item {
                margin-top: 48px;
            }
        }
    }

    .block1 {
        .container {
        }

        padding-top: 64px;
        padding-bottom: 216px;
        background-image: url("/images/block1_back.png");
        background-repeat: no-repeat;
        background-position-x: calc(calc(100% - 1170px)/2 + 850px);
        background-position-y: -20px;
        background-size: contain;
        //.background {
        //    position: absolute;
        //    top: 0;
        //    right: calc(calc(100% - 1170px)/2 - 50px);
        //}

        .h1 {
            font-weight: 700;
            font-size: 55px;
            line-height: 124%;
            color: #000000;
            margin-bottom: 50px;
        }

        .login_btn {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            button {
                width: 210px;
                height: 65px;
                cursor: pointer;

                border: 0;
                background: #0075FF;
                border-radius: 70px;

                font-weight: 600;
                font-size: 16px;
                line-height: 142.5%;
                color: #FFFFFF;
            }

            span {
                font-style: normal;
                font-weight: 400;
                font-size: 13px;
                line-height: 1.4;
                color: #000000;
                margin-left: 20px;
            }
        }
    }

    .block2 {
        .card {
            width: 100%;
            background-color: #FFFFFF;
            border: 1px solid #DCDCDC;
            box-shadow: 0px 0px 38px rgba(0, 0, 0, 0.05);
            border-radius: 31px;
            padding: 30px 60px 132px;

            background-image: url("/images/block2_back.png");
            background-repeat: no-repeat;
            background-position: right bottom;
        }

        .title {
            font-weight: 600;
            font-size: 28px;
            line-height: 2.43;
            color: #000000;
            text-align: center;
            margin-bottom: 34px;
        }

        .question {
            color: #000000;

            .h2 {
                font-weight: 700;
                font-size: 18px;
                margin-bottom: 20px;
            }

            & + .question {
                margin-top: 80px;
            }
        }

        ol {
            padding-inline-start: 20px;

            li {
                font-weight: 400;
                font-size: 18px;
                line-height: 2;
                margin-bottom: 10px;
            }
        }
    }
</style>