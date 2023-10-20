import { memo } from "react";
import { useSelector } from "react-redux";
import YearComponent from "./component";
import styles from "./styles.module.css";

function Year(): JSX.Element {
  const bar = useSelector((state) => (state as any).openBar),
    state = useSelector((state) => (state as any).sampleData);
  return (
    <div
      className={
        bar.leftBarOpen ? styles.containerWithBarOpen : styles.container
      }
    >
      {state.months.map(({ title, id, monthNumber }: any) => (
        <div
          key={id}
          className={
            bar.leftBarOpen
              ? styles.yearComponentWithBarOpen
              : styles.yearComponent
          }
        >
          <YearComponent numberOfMonth={monthNumber} title={title} />
        </div>
      ))}
    </div>
  );
}
export default memo(Year);
