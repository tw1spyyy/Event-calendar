import { Moment } from "moment";
import React from "react";
import { AppContext } from "../App";
import { DatePicker, Form, Select } from "antd";
import { formatDate } from "../utils/date";
import { RootState } from "../redux/state";
import { useSelector, useDispatch } from "react-redux";
import { IEvent } from "../types/types";
import { addEvent } from "../redux/slices/eventSlice";

export const ModalForm = () => {
  const dispatch = useDispatch();

  const { setOpenModal } = React.useContext(AppContext);
  const [modalFormError, setModalFormError] = React.useState(false);
  const [event, setEvent] = React.useState<IEvent>({
    author: "",
    description: "",
    guest: "",
    date: "",
  });

  React.useEffect(() => {
    console.log(event);
    setModalFormError(false);
  }, [event]);

  const { users, user } = useSelector((state: RootState) => state.auth);

  React.useEffect(() => {
    setEvent({ ...event, author: user });
  }, [user]);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (event.guest !== "" && event.date !== "" && event.description !== "") {
      setTimeout(() => {
        dispatch(addEvent(event));
        setOpenModal(false);
        document.body.style.overflow = "auto";
      }, 400);
    } else {
      setModalFormError(true);
    }
  };

  const onDatePick = (date: Moment | any) => {
    if (date) {
      setEvent({ ...event, author: user });
      setEvent({ ...event, date: formatDate(date.toDate()) });
    }
  };

  return (
    <form onSubmit={(e) => onFormSubmit(e)} className="modalForm">
      <label htmlFor="fname">Task Description</label>
      <input
        minLength={2}
        type="text"
        id="fname"
        value={event.description}
        onChange={(e) => setEvent({ ...event, description: e.target.value })}
        name="firstname"
        placeholder="Task Description.."
        style={{ marginBottom: "10px" }}
      ></input>

      <label style={{ marginBottom: "10px" }} htmlFor="lname">
        Choose data
      </label>
      <Form.Item style={{ marginTop: "5px", marginBottom: "10px" }}>
        <DatePicker onChange={(date) => onDatePick(date)} />
      </Form.Item>
      <label style={{ marginTop: "-15px" }} htmlFor="lname">
        Choose user
      </label>
      <Form.Item>
        <Select onChange={(guest: string) => setEvent({ ...event, guest })}>
          {users &&
            users.map((user, index) => {
              return (
                <Select.Option key={index} value={user.username}>
                  {user.username}
                </Select.Option>
              );
            })}
        </Select>
      </Form.Item>
      {modalFormError ? (
        <div className="modalForm__error">
          Not All Fields Of The Form Are Filled
        </div>
      ) : (
        <></>
      )}
      <input
        style={{ display: "block", marginTop: "-8px" }}
        type="submit"
        value="Add Event"
      ></input>
    </form>
  );
};
