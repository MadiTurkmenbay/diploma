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
                        </ul>
                    </div> <!-- .cd-schedule__timeline -->

                    <div class="cd-schedule__events">
                        <ul>
                            <li class="cd-schedule__group" v-for="(one_day, index) in schedule" :key="one_day.day">
                                <div class="cd-schedule__top-info">
									<span>{{ weekDays[index] }}</span>
									<h5>{{one_day.day}}</h5>
								</div>

                                <ul>
                                    <li class="cd-schedule__event" v-for="event in one_day.events" :class="event?.type" :key="event">
										<template v-if="event">
											<div class="event_time">{{ event.time }}</div>
											<div class="event_name">{{ event.name }}</div>
											<div class="event_location">{{ event.location }}</div>
										</template>
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
            activeType: 'week',
			weekDays: [
				'Дүйсенбі',
				'Сейсенбі',
				'Сәрсенбі',
				'Бейсенбі',
				'Жұма',
				'Сенбі',
				'Жексенбі',
			],
			schedule: [
				{
					day: 10,
					events: [
						{time: '08:00 - 08:50', name: 'Scientific Writing', location: '📍Фит, 116', type: 'lecture'},
						{time: '08:00 - 08:50', name: 'Мобильді қосымшалардың негіздері', location: '📍Фит, 116', type: 'lab'},
						null,
						null,
						null,
						null,
						null,
					],
				},
				{
					day: 11,
					events: [
						{time: '08:00 - 08:50', name: 'Scientific Writing', location: '📍Фит, 116', type: 'lecture'},
						{time: '08:00 - 08:50', name: 'Мобильді қосымшалардың негіздері', location: '📍Фит, 116', type: 'seminar'},
						null,
						null,
						null,
						null,
						null,
					],
				},
				{
					day: 12,
					events: [
						{time: '08:00 - 08:50', name: 'Scientific Writing', location: '📍Фит, 116', type: 'lecture'},
						{time: '08:00 - 08:50', name: 'Мобильді қосымшалардың негіздері', location: '📍Фит, 116', type: 'seminar'},
						null,
						null,
						null,
						null,
						null,
					],
				},
				{
					day: 13,
					events: [
						{time: '08:00 - 08:50', name: 'Scientific Writing', location: '📍Фит, 116', type: 'lecture'},
						{time: '08:00 - 08:50', name: 'Мобильді қосымшалардың негіздері', location: '📍Фит, 116', type: 'seminar'},
						null,
						null,
						null,
						null,
						null,
					],
				},
				{
					day: 14,
					events: [
						{time: '08:00 - 08:50', name: 'Scientific Writing', location: '📍Фит, 116', type: 'lecture'},
						{time: '08:00 - 08:50', name: 'Мобильді қосымшалардың негіздері', location: '📍Фит, 116', type: 'seminar'},
						null,
						null,
						null,
						null,
						null,
					],
				},
				{
					day: 15,
					events: [
						null,
						null,
						null,
						null,
						null,
						null,
						null,
					],
				},
				{
					day: 16,
					events: [
						null,
						null,
						null,
						null,
						null,
						null,
						null,
					],
				},
			],
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
        margin-top: 16px;
    }

    .cd-schedule {
		display: flex;
    }


	$schedule_block_height: 100px;
	$schedule_timeline_width: 48px;
	$schedule_top_block_height: 64px;

	.cd-schedule__timeline {
		width: $schedule_timeline_width;
		padding-top: $schedule_top_block_height;

		ul {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			flex-direction: column;
			padding: 0;
			text-align: left;
			li {
				height: $schedule_block_height;
				display: inline;
				text-align: left;
				span {
					font-weight: 600;
					font-size: 12px;
					line-height: 133%;
					color: #71717A;
				}
			}
		}
	}

	.cd-schedule__events {
		width: calc(100% - $schedule_timeline_width);
		ul {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			padding: 0;

			li {
				display: inline;
			}

			.cd-schedule__group {
				min-width: calc(calc(calc(100% - $schedule_timeline_width)/7) - 10px);
				ul {
					flex-direction: column;
				}

				li {
					height: $schedule_block_height;
				}

				&:nth-last-child(2), &:last-child {
					.cd-schedule__event {
						background: rgba(16, 185, 129, 0.1);
					}
				}
				.cd-schedule__event + .cd-schedule__event {
					border-top: .5px solid #E0E0E0;
				}
				& + .cd-schedule__group {
					border-left: .5px solid #E0E0E0;
				}
			}
		}
	}

	.cd-schedule__event {
		padding: 6px;
		border-radius: 4px;
		width: 100%;
		background: transparent;
		border-left: 3px solid transparent;
		&.lab {
			background: rgba(14, 165, 233, 0.1);
			border-left: 3px solid #0EA5E9;

			color: #0369A1;
		}
		&.lecture {
			background: rgba(245, 158, 11, 0.1);
			border-left: 3px solid #F59E0B;

			color: #B45309;
		}
		.event_time {
			font-weight: 600;
			font-size: 12px;
			line-height: 1.2;
		}

		.event_name {
			font-weight: 600;
			font-size: 11px;
			line-height: 1.2;
			margin-top: 5px;
		}

		.event_location {
			font-weight: 600;
			font-size: 12px;
			line-height: 1.2;
			margin-top: 15px;
		}
	}

	.cd-schedule__top-info {
		padding: 4px 8px;
		height: $schedule_top_block_height;
		span {
			font-weight: 700;
			font-size: 10px;
			line-height: 1.2;
			color: #71717A;
		}

		h5 {
			font-weight: 500;
			font-size: 22px;
			line-height: 1.4;
			color: #000000;
		}
	}

</style>