import { Calendar } from "antd";
import { Moment } from "moment";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/state";
import { EventCalendarProps } from "../types/types";
import { formatDate } from "../utils/date";

export const EventCalendar: FC<EventCalendarProps> = () => {
  const events = useSelector((state: RootState) => state.event.events);

  const dateCellRender = (value: any | Moment) => {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = events.filter((ev) => ev.date === formatedDate);
    return (
      <div>
        {currentDayEvents.map((el, index) => {
          return <div key={index}>{el.description}</div>;
        })}
      </div>
    );
  };
  return <Calendar dateCellRender={dateCellRender} />;
};
