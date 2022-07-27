let json = require('./ganttDiagramData.json');
let dates = [];
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let setDates;

let daysByNames = [];

function getDateFromJSON(date){
    const newDate = new Date(date);
    const year = newDate.getUTCFullYear();
    const numberMonth = newDate.getMonth() + 1;
    // const month = date.toLocaleString('default', { month: 'long' });
    // const day = date.getUTCDate();
    const dateString = year +'/'+ numberMonth;
    return dateString;
}

function getDayFromJSON(date){
    const newDate = new Date(date);
    const day = newDate.getUTCDate();
    return day;
}

function getDaysByName(){
    let obj = {};
    let arr = [];
    json.forEach((element) =>{
        obj = {
            name: element.from,
            date: getDateFromJSON(element.date),
            day: getDayFromJSON(element.date)
        }
        arr.push(obj);
    });

    //sortez
    arr.sort((a,b)=> (a.name.localeCompare(b.name) || 
    a.date.localeCompare(b.date) ||
    a.day - b.day));

    let days = [];

    for(let i = 0; i < arr.length; ++i) {
        if(i < arr.length-1){
            if(arr[i].day <= arr[i + 1].day){
                days.push(arr[i].day);
            }else{
                daysByNames.push({
                    name: arr[i].name,
                    date: arr[i].date,
                    days: [...new Set(days)]
                });
                days = [];
            }
        }
    }
    // console.log(daysByNames);
}

const getNumberOfDays = (year, month) => {
    return new Date(year, month, 0).getDate();
};

function leftData(year, month){
    // console.log(year)
    // console.log(month)
    const nrOfDays = getDays(year, month);
    console.log(nrOfDays.padEnd(20, ' ' + '|'));
}

function printDates(){
    for(let i of dates){
        const str = monthNames[i.month] + ' ' + i.year;
        const days = getNumberOfDays(i.year, i.month);
        var daysString = '';

        for(let i = 1; i <= days; i++){
            daysString += String(i).padStart(2, '0') + " ";
        }
        console.log(str.padEnd(20, ' ') + '|' + daysString);
        for(i of daysByNames){
            
        }

    }
}

function leftContent(data){
    console.log(data.padEnd(20, ' ') + '|');
}

function getUniqueDates(){
    const arr = [];
    for(let i of json){
        if(i.date != null){
            // console.log(date);
            arr.push(getDateFromJSON(i.date));
        }
    }
    setDates = new Set(arr);
    //creez obiectele data
    for(let i of setDates){
        const fullDate = {year: i.split('/')[0], 
        month: i.split('/')[1]};
        dates.push(fullDate);
    }        
}

getUniqueDates();
printDates();
//console.log(setDates)
getDaysByName();
=======
let json = require('./ganttDiagramData.json');
let dates = [];
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let setDates;

let daysByNames = [];

function getDateFromJSON(date){
    const newDate = new Date(date);
    const year = newDate.getUTCFullYear();
    const numberMonth = newDate.getMonth() + 1;
    // const month = date.toLocaleString('default', { month: 'long' });
    // const day = date.getUTCDate();
    const dateString = year +'/'+ numberMonth;
    return dateString;
}

function getDayFromJSON(date){
    const newDate = new Date(date);
    const day = newDate.getUTCDate();
    return day;
}

function getDaysByName(){
    let obj = {};
    let arr = [];
    json.forEach((element) =>{
        obj = {
            name: element.from,
            date: getDateFromJSON(element.date),
            day: getDayFromJSON(element.date)
        }
        arr.push(obj);
    });

    //sortez
    arr.sort((a,b)=> (a.name.localeCompare(b.name) || 
    a.date.localeCompare(b.date) ||
    a.day - b.day));

    let days = [];

    for(let i = 0; i < arr.length; ++i) {
        if(i < arr.length-1){
            if(arr[i].day <= arr[i + 1].day){
                days.push(arr[i].day);
            }else{
                daysByNames.push({
                    name: arr[i].name,
                    date: arr[i].date,
                    days: [...new Set(days)]
                });
                days = [];
            }
        }
    }
    // console.log(daysByNames);
}

const getNumberOfDays = (year, month) => {
    return new Date(year, month, 0).getDate();
};

function leftData(year, month){
    // console.log(year)
    // console.log(month)
    const nrOfDays = getDays(year, month);
    console.log(nrOfDays.padEnd(20, ' ' + '|'));
}

function printDates(){
    for(let i of dates){
        console.log('');

        const str = monthNames[i.month] + ' ' + i.year;
        const days = getNumberOfDays(i.year, i.month);
        var daysString = '';

        for(let i = 1; i <= days; i++){
            daysString += String(i).padStart(2, '0') + " ";
        }

        console.log(str.padEnd(20, ' ') + '|' + daysString);

        daysByNames.forEach((element) => {
            // console.log(element.date.split('/')[1])
            if(element.date.split('/')[0] === i.year && 
            element.date.split('/')[1] === i.month){
                // console.log(element.name.padEnd(20, ' ') + '|');
                let str = '';
                for (var j = 1; j <= days; j++) { 
                    // console.log(element.days[j])
                    for(let t = 0; t < element.days.length; t++){
                        if(j === element.days[t]){
                            str += '===';
                            break;
                        }else{
                            //console.log(element.days[j])
                            str += '---';
                            break;
                        }
                    }
                }
                console.log(element.name.padEnd(20, ' ') + '|' + str);
            } 
        })
    }
    // console.log(daysByNames)
}

function leftContent(data){
    console.log(data.padEnd(20, ' ') + '|');
}

function getUniqueDates(){
    const arr = [];
    for(let i of json){
        if(i.date != null){
            // console.log(date);
            arr.push(getDateFromJSON(i.date));
        }
    }
    setDates = new Set(arr);
    //creez obiectele data
    for(let i of setDates){
        const fullDate = {year: i.split('/')[0], 
        month: i.split('/')[1]};
        dates.push(fullDate);
    }        
}

getUniqueDates();
getDaysByName();
printDates();
//console.log(setDates)

>>>>>>> 1adc49be8a81bd7123a854da89ef273893d8d1e3
