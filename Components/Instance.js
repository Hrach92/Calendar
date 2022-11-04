import axios from "axios";
import moment from "moment";
import { useState } from "react";

export const years = [
    ...Array(100).fill(1950).
        map((i, index) => i + index)
];
export const months = [
    {"title": "January",
        "dayCount": 35,
        "monthNumber": "01",
        "id": 1},
    {"title": "February",
        "dayCount": 35,
        "monthNumber": "02",
        "id": 2},
    {"title": "March",
        "dayCount": 35,
        "monthNumber": "03",
        "id": 3},
    {"title": "April",
        "dayCount": 35,
        "monthNumber": "04",
        "id": 4},
    {"title": "May",
        "dayCount": 35,
        "monthNumber": "05",
        "id": 5},
    {"title": "June",
        "dayCount": 35,
        "monthNumber": "06",
        "id": 6},
    {"title": "July",
        "dayCount": 35,
        "monthNumber": "07",
        "id": 7},
    {"title": "August",
        "dayCount": 35,
        "monthNumber": "08",
        "id": 8},
    {"title": "September",
        "dayCount": 35,
        "monthNumber": "09",
        "id": 9},
    {"title": "October",
        "dayCount": 35,
        "monthNumber": "10",
        "id": 10},
    {"title": "November",
        "dayCount": 35,
        "monthNumber": "11",
        "id": 11},
    {"title": "December",
        "dayCount": 35,
        "monthNumber": "12",
        "id": 12}
];
export const dayCount = Array(35).fill({}).
    map((item, i) => {

        item.day = i + 1;
        item.id = i;
        return {...item};

    });
export const hoursOfDay = [
    ...Array(24).fill({}).
        map((item, i) => {

            if (i === 0) {

                item.id = i;
                item.hour = 12;
                item.format = "AM";
                return {...item};

            }
            if (i === 12) {

                item.hour = `${i}`;
                item.format = "PM";
                item.id = i;
                return {...item};

            }
            if (i > 12) {

                item.hour = `${i - 12}`;
                item.format = "PM";
                item.id = i;
                return {...item};

            }
            item.hour = `${i}`;
            item.format = "AM";
            item.id = i;
            return {...item};

        })
];
export const count = {
    "day": [
        ...Array(24).fill("").
            map((item, i) => {

                if (i > 12) {

                    item = `${i}:` + "AM";

                } else if (i > 0) {

                    item = `${i} ` + "PM";

                }
                item = i;

            })
    ],
    "month": [
        ...Array(35).fill({}).
            map((item, i) => {

                item.day = i + 1;
                item.id = i;
                return {...item};

            })
    ]
};
export const host = axios.create({
    "baseURL": "http://localhost:3001"
});
export function dayList (year, month) {
    const startDay = moment(`${year}${month}`).startOf("month").
            startOf("week"),
        endDay = moment(`${year}${month}`).endOf("month").
            endOf("week"),
        arr = [];
    while (!startDay.isAfter(endDay)) {

        arr.push({
            "dayNumber": startDay.date(),
            "id": startDay.format("YYYYMMDD"),
            "month": moment(startDay.format("YYYYMMDD")).format("MMM"),
            "monthNumber": moment(startDay.format("YYYYMMDD")).format("MM"),
            "monthId": moment(startDay.format("YYYYMMDD")).format("M"),
            "year": startDay.date(startDay.date()).format("YYYY"),
            "nameOfDay": startDay.date(startDay.date()).format("ddd")
        });
        startDay.add(
            1,
            "day"
        );

    }
    return arr;

}
export function weekDays (year, month, day) {

    let format = "",
        hour = "";
    const dayHours = Array(192).fill({}).
        map((item, i) => {

            if (i > 95 && i % 8 === 0) {

                if (i === 96) {

                    item.hour = 12;
                    hour = `${item.hour}`;
                    item.format = "PM";
                    format = item.format;
                    item.day = "";
                    item.id = i;
                    return {...item};

                }

                item.hour = (i - 96) / 8;
                hour = `${item.hour}`;
                item.format = "PM";
                format = item.format;
                item.day = "";
                item.id = i;
                return {...item};

            } else if (i % 8 === 0) {

                item.hour = i / 8;
                if (i === 0) {

                    item.hour = 12;

                }
                hour = `${item.hour}`;
                item.format = "AM";
                format = item.format;
                item.day = "";
                item.id = i;
                return {...item};

            }

            item.hour = hour;
            item.format = format;
            item.day = moment(`${year}${month}${day > 9
                ? day
                : `0${day}`}`).startOf("week").
                add(
                    i % 8 - 1,
                    "day"
                ).
                format("YYYYMMDD");
            item.id = i;
            return {...item};

        });
    return dayHours;

}
export function setEvents(post){
    let arr1=null
    if(!post.hour_mode){
    arr1 = Array(post.date_range).fill(post).map((v,i,w)=>{
        if(i===0){
            v.date_id = moment(v.date_id).add(0,'day').format('YYYYMMDD')
            v.eventDayStart = true
            return {...v}
        }
        else if(i===w.length-1){ 
            v.date_id = moment(v.date_id).add(1,'day').format('YYYYMMDD')
            v.eventDayStart = false
            v.eventDayEnd = true
            return {...v,title:''}
        }
        v.date_id = moment(v.date_id).add(1,'day').format('YYYYMMDD')
        v.eventDayStart = false
        return {...v,title:''}
    })
    return {...post,data:{events:[...arr1]}}
}
else{
    return {...post}
}
}
export const useInput =(initialInput) =>{
    const [value,setValue] = useState(initialInput)
    const onChange = event =>{
        return setValue(event.target.value)
    }
    return {
        value,onChange
    }
}
