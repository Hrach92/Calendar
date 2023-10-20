import React, { memo, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { HiOutlinePencil } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdOutlineCheck } from "react-icons/md";
import { useDispatch } from "react-redux";
import { descriptionOpen } from "../../store/reducer/tabReducer";
import styles from "./styles.module.css";
import { host } from "../instance";

function ChangeEvent({ description }: any): JSX.Element {
  const [text, setText] = useState(
      description.mainTitle ? description.mainTitle : ""
    ),
    [change, setChange] = useState(false),
    dispatch = useDispatch(),
    onDeleteEvent = (id: any, e: any) => {
      e.preventDefault();
      host.delete(`/${"event"}/${id}`).then((res) => {
        console.log(res);
        console.log("delete");
      });
      return dispatch(descriptionOpen(false));
    },
    changeEvent = (e: any, title: any, id: any) => {
      e.preventDefault();
    };
  return (
    <div className={styles.description}>
      <div style={{ margin: "10px", width: "200px" }}>{description.title}</div>
      <HiOutlinePencil
        onClick={() => {
          return change ? setChange(false) : setChange(true);
        }}
        className={styles.edit}
      />
      <HiOutlineTrash
        className={styles.deleteBtn}
        onClick={(e) => onDeleteEvent(description.id, e)}
      />
      <AiOutlineCloseCircle
        className={styles.closeDes}
        onClick={() => dispatch(descriptionOpen(false))}
      />
      {change ? (
        <div>
          <input
            style={{ marginLeft: "15px" }}
            type={"text"}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <span
            onClick={(e) => changeEvent(e, text, description.id)}
            className={styles.changeBtn}
          >
            <MdOutlineCheck />
          </span>
        </div>
      ) : null}
    </div>
  );
}

export default memo(ChangeEvent);
