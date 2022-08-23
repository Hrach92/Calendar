export const year = [...Array(100).fill(1950).map((i, index) => i + index)]
export const month = [{ month: "January", dayCount: 31, id: 0 },
{ month: "February", dayCount: 28, id: 1 },
{ month: 'March', dayCount: 31, id: 2 },
{ month: 'April', dayCount: 30, id: 3 },
{ month: 'May', dayCount: 31, id: 4 },
{ month: 'June', dayCount: 30, id: 5 },
{ month: 'July', dayCount: 31, id: 6 },
{ month: 'August', dayCount: 31, id: 7 },
{ month: 'September', dayCount: 30, id: 8 },
{ month: 'October', dayCount: 31, id: 9 },
{ month: 'November', dayCount: 30, id: 10 },
{ month: 'December', dayCount: 31, id: 11 }]
export let count = {
    day:[...Array(24).fill('').map((item,i)=>item=i)],
    week:{
        days:[...Array(7).fill('').map((item,i)=>item=i)],
        dayHours:[...Array(24).fill('').map((item,i)=>item=i)]
    },
    month:[...Array(42).fill('').map((item,i)=>item=i)],
    year:[...Array(12).fill('').map((item,i)=>item=i+1)]
}