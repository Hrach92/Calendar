import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import React from "react";
import { getLocaleDate } from "../../../store/reducer/sampleReducer";
function Today() {
  const dispatch = useDispatch(),
    state = useSelector((state) => (state as any).sampleData);
  return (
    <Link href={`/${state.mode}`}>
      <button
        className={styles.btn}
        onClick={() => dispatch(getLocaleDate(""))}
      >
        Today
      </button>
    </Link>
  );
}
export default Today;
