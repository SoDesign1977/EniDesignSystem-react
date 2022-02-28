import React, { useState } from "react";

import { addDays, format } from "date-fns";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { generateKey } from "../../../js/helpers";

import { da, fr } from "date-fns/locale";

const EniDatePicker = ({
  required = false,
  title = "test",
  placeholder = "Choisir une option",
  startDate = new Date(),
  endDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
  disabled = false,
  name = "",
  errorMessage = "Champs Obligatoire",
  ...props
}) => {
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: addDays(new Date(), 2),
    key: "selection",
    color: "#D3DFEB",
  });
  const [id, setid] = React.useState(generateKey("EniSelect"));
  const [open, setOpen] = useState(false);

  const [start, setstart] = React.useState("");
  const [end, setend] = React.useState("");
  const [ErrorDateRange, setErrorDateRange] = React.useState("");

  const MaxRange = (val, max) => {
    if (parseInt(val) > max) return max;
    return val;
  };
  const MinRange = (val, min) => {
    if (parseInt(val) < min) return min;
    return val;
  };

  const normalizeDate = (value, previousvalue, minDate, maxDate) => {
    const currentValue = value.replace(/[^\d]/g, "");

    const cvLength = currentValue.length;

    let maxYear = maxDate ? maxDate.getFullYear() : 0;
    let minYear = minDate ? minDate.getFullYear() : 0;

    if (ErrorDateRange.length > 0) {
      setErrorDateRange("");
    }
    let updateDate = new Date(
      `${currentValue.slice(4, 8)}/${MaxRange(
        currentValue.slice(2, 4),
        12
      )}/${MaxRange(currentValue.slice(0, 2), 31)}`
    );

    if (cvLength >= 8) {
      if (!updateDate || updateDate === "Invalid Date") {
        return "";
      }

      if (minDate) {
        if (updateDate < minDate) {
          setErrorDateRange(
            `La date Minimum est ${minDate.toLocaleDateString("fr")}`
          );
          return minDate.toLocaleDateString("fr");
        }
      }

      if (maxDate) {
        if (updateDate > maxDate) {
          setErrorDateRange(
            `La date Maximum est ${maxDate.toLocaleDateString("fr")}`
          );
          return maxDate.toLocaleDateString("fr");
        }
      }
    }

    switch (true) {
      case cvLength < 4:
        return currentValue;
      case cvLength === 4:
        return `${MaxRange(currentValue.slice(0, 2), 31)}/${MaxRange(
          currentValue.slice(2, 4),
          12
        )}`;
      case cvLength === 8:
        return `${MaxRange(currentValue.slice(0, 2), 31)}/${MaxRange(
          currentValue.slice(2, 4),
          12
        )}/${MinRange(MaxRange(currentValue.slice(4, 8), maxYear), minYear)}`;
    }
  };
  const convertDate = (val)=>{
    if (val) {
      let currentValue = val.replace(/[^\d]/g, "");
      if (currentValue.length === 8) {
        currentValue = new Date(
          `${currentValue.slice(4, 8)}/${MaxRange(
            currentValue.slice(2, 4),
            12
          )}/${MaxRange(currentValue.slice(0, 2), 31)}`
        );
        if (currentValue != "Invalid Date")
          return currentValue
      }
    }
  }
  return (
    <>
    <div className="Click"></div>
    <div className="EniDatePicker">
      <input
        {...props}
        className="eni-datepicker-input"
        type="text"
        id={id}
        name={name}
        value={date.startDate,date.endDate}
        required={required}
        disabled={disabled}
        minLength="1"
      ></input>

      <label className={`eni-datepicker-label exp_elem `} htmlFor={id}>
        {title}
      </label>

      <div className={`eni-datepicker `}>
        {/*datepicker BOX*/}
        <button
          aria-labelledby="exp_elem"
          aria-haspopup="listbox"
          className={`eni-datepicker-box ${
            open ? "eni-datepicker-box-open" : ""
          }`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div className="eni-text-container">
            <input
              placeholder="Début"
              value={start}
              maxLength={10}
              type="text"
              pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
              onChange={(e) => {
                let x = normalizeDate(
                  e.target.value,
                  start,
                  startDate,
                  endDate
                );

                setstart(x);
                  setDate({...date,startDate:convertDate(x)})
              }}
            ></input>
            <div className="separator"></div>
            <input
              placeholder="Fin"
              value={end}
              type="text"
              maxLength={10}
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
              onChange={(e) => {
                let x = normalizeDate(e.target.value, end, startDate, endDate)
                setend(x);
                setDate({...date,startDate:convertDate(x)})
              }}
            ></input>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="15"
            viewBox="0 0 24 24"
          >
            <path
              fill="WindowText"
              d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"
            />
            <path fill="none" d="M0 0h24v24H0z" />
          </svg>
        </button>
      </div>

      <span className="error-message">{errorMessage}</span>
      <span className={`error-message-DateRange`}>{ErrorDateRange}</span>
   
      {open && (
           <div className="Date-picker-container">
             {/* <div className="Date-picker-out" onClick={()=>{
               setOpen(false)
             }}></div> */}
        <DateRangePicker
          showSelectionPreview={false}
          months={2}
          ranges={[date]}
          direction="horizontal"
          showMonthAndYearPickers={false}
          onChange={(item) => {
            setErrorDateRange("");
            setDate({...date,startDate:item.selection.startDate,endDate:item.selection.endDate})
            setstart(item.selection.startDate.toLocaleDateString("fr"))
            setend(item.selection.endDate.toLocaleDateString("fr"))
          }}
          staticRanges={[]}
          inputRanges={[]}
          minDate={startDate}
          maxDate={endDate}
          showDateDisplay={false}
          locale={fr}
          
        />
          </div>
      )}
    
    </div>
    </>
  );
};

export default EniDatePicker;
