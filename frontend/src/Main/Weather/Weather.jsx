import React from "react"
import "./WeatherCss/Visual.css"

export default function Weather() {
    
    return(
        <>
            <div id="container_weather">
                <div id="container_front_weather">
                    <div className="sun_moon_block">
                        <div className="weather_day">
                            <div className="picture_weather">
                                <div className="cloud"></div>
                                <div className="sun"></div>
                                <div className="blur_sun"></div>
                            </div>
                            <div className="temperature">-3°</div>
                            <div className="temperature_city">
                                <p className="text text_sity">Казань</p><br />
                                <p className="text text_weather">Ясно</p><br />
                                <div>
                                    <p className="symbol s1">14°</p>
                                    <p className="symbol s2">/</p>
                                    <p className="symbol s3">-5°</p>
                                </div>
                            </div>
                        </div>
                        <div className="weather_conditions">
                            <div className="conditions precipitation">66%</div>
                            <div className="conditions humidity">54%</div>
                            <div className="conditions wind_speed">19 км/ч</div>
                        </div>
                    </div>
                    <div className="today">
                        <div className="today_two">
                            <div className="rectangle"></div>
                            <p className="text_day day1">Сегодня</p>
                            <p className="text_day day2">Сен, 06</p>
                            <div className="time_for_today">
                                <div className="time_today">
                                    <div className="frame_today">
                                        <p className="text_time">Сейчас</p>
                                        <div className="icon i0"></div>
                                        <p className="temp">7°</p>
                                    </div>
                                </div>
                                <div className="time_today">
                                    <div className="frame_today">
                                        <p className="text_time">10:00</p>
                                        <div className="icon i1"></div>
                                        <p className="temp">8°</p>
                                    </div>
                                </div>
                                <div className="time_today">
                                    <div className="frame_today">
                                        <p className="text_time">11:00</p>
                                        <div className="icon i2"></div>
                                        <p className="temp">8°</p>
                                    </div>
                                </div>
                                <div className="time_today">
                                    <div className="frame_today">
                                        <p className="text_time">12:00</p>
                                        <div className="icon i3"></div>
                                        <p className="temp">9°</p>
                                    </div>
                                </div>
                                <div className="time_today">
                                    <div className="frame_today">
                                        <p className="text_time">13:00</p>
                                        <div className="icon i4"></div>
                                        <p className="temp">11°</p>
                                    </div>
                                </div>
                                <div className="time_today">
                                    <div className="frame_today">
                                        <p className="text_time">14:00</p>
                                        <div className="icon i5"></div>
                                        <p className="temp">11°</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sunrise_sunset">
                        <div className="ellipse_rise_set"></div>
                        <div className="img_sunrise"></div>
                        <div className="sunrise">
                            <div className="icon_sunrise"></div>
                            <p className="text_sunrise">6:04</p>
                            <p className="text_sunrise">Восход</p>
                        </div>
                        <div className="sunset">
                            <div className="icon_sunset"></div>
                            <p className="text_sunset">19:04</p>
                            <p className="text_sunset">Закат</p>
                        </div>
                    </div>
                    <div className="weekday">
                        <div className="weekday_two">
                            <div className="day_week">
                                <div className="content_day co_day_1">
                                    <div className="group_day">
                                        <div className="icon_day">
                                            <div className="text_day_week">
                                                <p className="text_d_w">Пн</p>
                                                <p className="day_date">25/09</p>
                                            </div>
                                            <div className="icon_week ic1"></div>
                                            <p className="text_temp_week">8°/-2°</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="day_week">
                                <div className="content_day co_day_2">
                                    <div className="group_day">
                                        <div className="icon_day">
                                            <div className="text_day_week">
                                                <p className="text_d_w">Вт</p>
                                                <p className="day_date">25/09</p>
                                            </div>
                                            <div className="icon_week ic2"></div>
                                            <p className="text_temp_week">8°/-2°</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="day_week">
                                <div className="content_day co_day_3">
                                    <div className="group_day">
                                        <div className="icon_day">
                                            <div className="text_day_week">
                                                <p className="text_d_w">Ср</p>
                                                <p className="day_date">25/09</p>
                                            </div>
                                            <div className="icon_week ic3"></div>
                                            <p className="text_temp_week">8°/-2°</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="day_week">
                                <div className="content_day co_day_4">
                                    <div className="group_day">
                                        <div className="icon_day">
                                            <div className="text_day_week">
                                                <p className="text_d_w">Чт</p>
                                                <p className="day_date">25/09</p>
                                            </div>
                                            <div className="icon_week ic4"></div>
                                            <p className="text_temp_week">8°/-2°</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="day_week">
                                <div className="content_day co_day_5">
                                    <div className="group_day">
                                        <div className="icon_day">
                                            <div className="text_day_week">
                                                <p className="text_d_w">Пт</p>
                                                <p className="day_date">25/09</p>
                                            </div>
                                            <div className="icon_week ic5"></div>
                                            <p className="text_temp_week">8°/-2°</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="day_week">
                                <div className="content_day co_day_6">
                                    <div className="group_day">
                                        <div className="icon_day">
                                            <div className="text_day_week">
                                                <p className="text_d_w">Сб</p>
                                                <p className="day_date">25/09</p>
                                            </div>
                                            <div className="icon_week ic6"></div>
                                            <p className="text_temp_week">8°/-2°</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="day_week">
                                <div className="content_day co_day_7">
                                    <div className="group_day">
                                        <div className="icon_day">
                                            <div className="text_day_week">
                                                <p className="text_d_w">Вс</p>
                                                <p className="day_date">25/09</p>
                                            </div>
                                            <div className="icon_week ic7"></div>
                                            <p className="text_temp_week">8°/-2°</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}