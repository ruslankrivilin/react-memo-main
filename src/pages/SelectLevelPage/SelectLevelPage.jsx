import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { useCheckbox } from "./CheckboxContext";

export function SelectLevelPage() {
  const { isEasyMode, setIsEasyMode } = useCheckbox();

  const handleCheckboxChange = e => {
    const isChecked = e.target.checked;
    setIsEasyMode(isChecked);
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>

        <input
          className={styles.checkbox}
          checked={isEasyMode}
          type="checkbox"
          id="easyModeCheckbox"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="easyModeCheckbox">Упрощенный режим</label>

        <ul className={styles.levels}>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/3">
              1
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/6">
              2
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/9">
              3
            </Link>
          </li>
        </ul>
        <Link className={styles.leaderboard} to="/leaderboard">
          Перейти к лидерборду
        </Link>
      </div>
    </div>
  );
}
