import { useEffect, useState } from "react";
import DatePicker from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { jalali_to_gregorian_obj } from "../../env";

function StyleDatePickerSingle(props) {
  const [selectedDate, setSelectedDate] = useState(
    props.defaultValue ? props.defaultValue : ""
  );
  const changeDate = () => {
    props.action(
      selectedDate
        ? jalali_to_gregorian_obj(
            selectedDate.year,
            selectedDate.month,
            selectedDate.day
          )
        : ""
    );
  };
  useEffect(() => {
    if (selectedDate) changeDate();
  }, [selectedDate]);
  console.log(selectedDate);
  return (
    <DatePicker
      value={selectedDate}
      onChange={setSelectedDate}
      inputPlaceholder={props.title}
      shouldHighlightWeekends
      locale={props.local} // add this
    />
  );
}
export default StyleDatePickerSingle;
