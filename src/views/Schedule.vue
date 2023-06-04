<template>
    <div class="container">

        <section class="schedule">
            <div class="schedule_top">
                <div class="day_switcher">
                    <div class="btn prev">
                        <img src="/images/left_path.png" alt="path">
                    </div>
                    <div class="btn current"><span>Бүгін</span></div>
                    <div class="btn next">
                        <img src="/images/right_path.png" alt="path">
                    </div>
                </div>

                <div class="schedule_type">
                    <div class="type" :class="{'active': activeType === 'day'}">Күн</div>
                    <div class="type" :class="{'active': activeType === 'week'}">Апта</div>
                    <div class="type" :class="{'active': activeType === 'month'}">Ай</div>
                    <div class="type" :class="{'active': activeType === 'term'}">Семестр</div>
                </div>

                <div class="search">
                    <img src="/images/search.png" alt="search">
                    <input type="search" placeholder="Іздеу">
                </div>
            </div>

            <div class="schedule_body">
                <div class="cd-schedule">
                    <div class="cd-schedule__timeline">
                        <ul>
                            <li><span>08:00</span></li>
                            <li><span>09:00</span></li>
                            <li><span>10:00</span></li>
                            <li><span>11:00</span></li>
                            <li><span>12:00</span></li>
                            <li><span>13:00</span></li>
                            <li><span>14:00</span></li>
                            <li><span>15:00</span></li>
                        </ul>
                    </div> <!-- .cd-schedule__timeline -->

                    <div class="cd-schedule__events">
                        <ul>
                            <li class="cd-schedule__group">
                                <div class="cd-schedule__top-info"><span>Monday</span></div>

                                <ul>
                                    <li class="cd-schedule__event">
                                        <a data-start="09:30" data-end="10:30" data-content="event-abs-circuit"
                                           data-event="event-1" href="#0">
                                            <em class="cd-schedule__name">Abs Circuit</em>
                                        </a>
                                    </li>

                                    <li class="cd-schedule__event">
                                        <a data-start="11:00" data-end="12:30" data-content="event-rowing-workout"
                                           data-event="event-2" href="#0">
                                            <em class="cd-schedule__name">Rowing Workout</em>
                                        </a>
                                    </li>

                                    <li class="cd-schedule__event">
                                        <a data-start="14:00" data-end="15:15" data-content="event-yoga-1"
                                           data-event="event-3" href="#0">
                                            <em class="cd-schedule__name">Yoga Level 1</em>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li class="cd-schedule__group">
                                <div class="cd-schedule__top-info"><span>Tuesday</span></div>

                                <ul>
                                    <li class="cd-schedule__event">
                                        <a data-start="10:00" data-end="11:00" data-content="event-rowing-workout"
                                           data-event="event-2" href="#0">
                                            <em class="cd-schedule__name">Rowing Workout</em>
                                        </a>
                                    </li>

                                    <li class="cd-schedule__event">
                                        <a data-start="11:30" data-end="13:00" data-content="event-restorative-yoga"
                                           data-event="event-4" href="#0">
                                            <em class="cd-schedule__name">Restorative Yoga</em>
                                        </a>
                                    </li>

                                    <li class="cd-schedule__event">
                                        <a data-start="13:30" data-end="15:00" data-content="event-abs-circuit"
                                           data-event="event-1" href="#0">
                                            <em class="cd-schedule__name">Abs Circuit</em>
                                        </a>
                                    </li>

                                    <li class="cd-schedule__event">
                                        <a data-start="15:45" data-end="16:45" data-content="event-yoga-1"
                                           data-event="event-3" href="#0">
                                            <em class="cd-schedule__name">Yoga Level 1</em>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li class="cd-schedule__group">
                                <div class="cd-schedule__top-info"><span>Wednesday</span></div>

                                <ul>
                                    <li class="cd-schedule__event">
                                        <a data-start="09:00" data-end="10:15" data-content="event-restorative-yoga"
                                           data-event="event-4" href="#0">
                                            <em class="cd-schedule__name">Restorative Yoga</em>
                                        </a>
                                    </li>

                                    <li class="cd-schedule__event">
                                        <a data-start="10:45" data-end="11:45" data-content="event-yoga-1"
                                           data-event="event-3" href="#0">
                                            <em class="cd-schedule__name">Yoga Level 1</em>
                                        </a>
                                    </li>

                                    <li class="cd-schedule__event">
                                        <a data-start="12:00" data-end="13:45" data-content="event-rowing-workout"
                                           data-event="event-2" href="#0">
                                            <em class="cd-schedule__name">Rowing Workout</em>
                                        </a>
                                    </li>

                                    <li class="cd-schedule__event">
                                        <a data-start="13:45" data-end="15:00" data-content="event-yoga-1"
                                           data-event="event-3" href="#0">
                                            <em class="cd-schedule__name">Yoga Level 1</em>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li class="cd-schedule__group">
                                <div class="cd-schedule__top-info"><span>Thursday</span></div>

                                <ul>
                                    <li class="cd-schedule__event">
                                        <a data-start="09:30" data-end="10:30" data-content="event-abs-circuit"
                                           data-event="event-1" href="#0">
                                            <em class="cd-schedule__name">Abs Circuit</em>
                                        </a>
                                    </li>

                                    <li class="cd-schedule__event">
                                        <a data-start="12:00" data-end="13:45" data-content="event-restorative-yoga"
                                           data-event="event-4" href="#0">
                                            <em class="cd-schedule__name">Restorative Yoga</em>
                                        </a>
                                    </li>

                                    <li class="cd-schedule__event">
                                        <a data-start="15:30" data-end="16:30" data-content="event-abs-circuit"
                                           data-event="event-1" href="#0">
                                            <em class="cd-schedule__name">Abs Circuit</em>
                                        </a>
                                    </li>

                                    <li class="cd-schedule__event">
                                        <a data-start="17:00" data-end="18:30" data-content="event-rowing-workout"
                                           data-event="event-2" href="#0">
                                            <em class="cd-schedule__name">Rowing Workout</em>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li class="cd-schedule__group">
                                <div class="cd-schedule__top-info"><span>Friday</span></div>

                                <ul>
                                    <li class="cd-schedule__event">
                                        <a data-start="10:00" data-end="11:00" data-content="event-rowing-workout"
                                           data-event="event-2" href="#0">
                                            <em class="cd-schedule__name">Rowing Workout</em>
                                        </a>
                                    </li>

                                    <li class="cd-schedule__event">
                                        <a data-start="12:30" data-end="14:00" data-content="event-abs-circuit"
                                           data-event="event-1" href="#0">
                                            <em class="cd-schedule__name">Abs Circuit</em>
                                        </a>
                                    </li>

                                    <li class="cd-schedule__event">
                                        <a data-start="15:45" data-end="16:45" data-content="event-yoga-1"
                                           data-event="event-3" href="#0">
                                            <em class="cd-schedule__name">Yoga Level 1</em>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="cd-schedule__cover-layer"></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeType: 'week'
        }
    }
}
</script>

<style scoped lang="scss">
    .schedule {
        padding: 30px;
        background: #FFFFFF;
        border: 1px solid #DCDCDC;
        box-shadow: 0px 0px 38px rgba(0, 0, 0, 0.05);
        border-radius: 37px;
        width: 100%;
    }

    .schedule_top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 28px;
    }

    .day_switcher {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 100%;

        .btn {
            background: #F4F4F5;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            &:hover {
                background: rgba(238, 238, 239, 0.94);
            }

            &.next, &.prev {
                width: 28px;
            }

            &.current {
                margin: 0 1px;
                padding: 0 16px;
            }

            &.next {
                border-radius: 0px 6px 6px 0px;
            }

            &.prev {
                border-radius: 6px 0px 0px 6px;
            }
        }
    }

    .schedule_type {
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: stretch;

        .type {
            display: flex;
            justify-content: center;
            align-items: center;
            align-self: stretch;
            padding: 0 16px;
            border-radius: 8px;
            font-weight: 500;
            color: #71717A;

            &.active {
                color: #FFFFFF;
                background: #0075FF;
            }
        }
    }

    .search {
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: stretch;
        background: #F4F4F5;
        border-radius: 4px;
        padding: 4px;

        img {
            margin-right: 8px;
        }

        input {
            background: transparent;
            border: none;

            &:focus {
                outline: none;
            }
        }
    }

    .schedule_body {

    }
</style>