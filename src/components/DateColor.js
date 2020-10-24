import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css'; 

function DateColor() {
    const [selectedData, setSelectedData] = useState(null);

    return (
        <div>
           
           <DatePicker 
                selected={selectedData}
                onChange={date => setSelectedData(date)}
                dateFormat = 'yyyy/MM/dd'
                minDate = {new Date()}
                //maxDate = {new Date()}
            >
           </DatePicker>

        </div>
    )
}
export default DateColor;
