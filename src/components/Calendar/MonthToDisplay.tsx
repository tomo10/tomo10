import React, { useEffect } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { MONTH_HEIGHT, months, monthIndex } from './CalendarModel';
import DayInWeek from './DayInWeek';
import DaysInMonth from './DaysInMonth';

interface MonthProps {
    month_data: {
        month: number;
        year: number;
    };
    month_index: number;
    chooseDifferentMonth: () => void;
}


export default (props: MonthProps) => {

    const [row_days_array, set_row_days_array] = React.useState<Array<T>>([]);

    useEffect(() => { 
        init() 
    }, []);

    let day_data_array = [];
    let temp_row_array = [new Array(7), new Array(7), new Array(7), new Array(7), new Array(7), new Array(7)];

    const getDaysInMonth = (month:number, year: number) => {
        return new Date(year, (month + 1 ), 0).getDate();   
    };

    const getDataOfDaysLastMonthToDisplay = (daysLastMonthToDisplay: number, daysLastMonth: number) => {
        for(let i = (daysLastMonth - daysLastMonthToDisplay + 1); i <= daysLastMonth; i++){
            day_data_array.push({
                day: i
            })
        }
    }

    const getDataOfDaysThisMonthToDisplay = (daysThisMonth: number) => {
        for(let i = 1; i <= daysThisMonth; i++){
            day_data_array.push({
                day: i,
                main: true //To identify this object contains a day of the current month
            })
        }
    }

    const getDataOfDaysNextMonthToDisplay = (daysNextMonthToDisplay: number) => {
        for(let i = 1; i <= daysNextMonthToDisplay; i++){
            day_data_array.push({
                day: i
            })
        }
    }

    const init = () => {
        // let row_days_array = [new Array(7), new Array(7), new Array(7), new Array(7), new Array(7), new Array(7)];
        

        let month = props.month_data.month, 
            year = props.month_data.year,
            daysThisMonth = getDaysInMonth(month, year),
            daysLastMonth

        if (month !== 0)    daysLastMonth = getDaysInMonth(month, year);
        else                daysLastMonth = getDaysInMonth(11, (year - 1));
        
        let firstDayOfCurrentMonthInWeek = new Date(year, month, 1).getDay(), //This is the first day in month, but with the index in a week (Sun, Mon, ... Sat to 0, 1, ..., 6)
            daysLastMonthToDisplay = firstDayOfCurrentMonthInWeek !== 0 ? firstDayOfCurrentMonthInWeek - 1 : 6 

        //Push data of displaying days from last month to the array
        getDataOfDaysLastMonthToDisplay(daysLastMonthToDisplay, daysLastMonth)
        
        //Push data of displaying days from current month to the array
        getDataOfDaysThisMonthToDisplay(daysThisMonth)

        let lastDayOfCurrentMonthInWeek = new Date(year, month, daysThisMonth).getDay(),
            daysNextMonthToDisplay = lastDayOfCurrentMonthInWeek !== 0 ? 7 - lastDayOfCurrentMonthInWeek : 0 //To be used to find how many days from next month should we
                                                                                                             //display in the month calendar (Optional)
        
        //Push data of displaying days from next month to the array
        getDataOfDaysNextMonthToDisplay(daysNextMonthToDisplay)
        
        // SEEMS TO BE HIS WAY OF SPLITTING THE ARRAY OF DAYS IN MONTH INTO GROUPS OF SEVEN
        for (let i = 0; i < day_data_array.length; i++) {
            temp_row_array[parseInt(i / 7)].push({
                dayData: day_data_array[i],
                calendarDayIndex: i
            })
        }
        set_row_days_array(temp_row_array);
    }

    

    return (
        // <View style={styles.row}>
        //     <Text style={{fontSize: 20}}>{months[monthIndex]}</Text>
        // </View>
        <>
        <View
            style={{flex: 1}}
        >
            <View style={{
                height: 50,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Text
                    style={{
                        fontSize: 22,
                        fontWeight: "500"
                    }}
                >
                    {months[props.month_data.month]}
                </Text>
                <Text
                    style={{
                        color: "gray",
                        fontSize: 14,
                        marginLeft: 5
                    }}
                >
                    {props.month_data.year}
                </Text>
            </View>

            <View
                style={{
                    // flex: 1,
                    marginTop: 10,
                }}
            >
                <View 
                    style={{
                        flexDirection: "row",
                    }}
                >
                    <DayInWeek day='M' />
                    <DayInWeek day='T' />
                    <DayInWeek day='W' />
                    <DayInWeek day='T' />
                    <DayInWeek day='F' />
                    <DayInWeek day='S' />
                    <DayInWeek day='S' />
                </View>
                
                <DaysInMonth
                    row_days_array={row_days_array}
                    month_index = {props.month_index}
                    current_month_index = {props.current_month_index}
                    chooseDifferentMonth = {props.chooseDifferentMonth}
                />

            </View>
        </View>
    </>
    )
}


const styles = StyleSheet.create({
    row: {
        height: MONTH_HEIGHT,
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center'
    }
})