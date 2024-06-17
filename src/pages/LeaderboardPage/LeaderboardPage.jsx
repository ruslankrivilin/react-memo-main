import { useEffect, useState } from "react";
import styles from "./LeaderboardPage.module.css";
import { getLeaderboard } from "../../api";
import { Link } from "react-router-dom";

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState();

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const data = await getLeaderboard();
        data.sort((a, b) => a.time - b.time);
        const sliceData = data.slice(0, 10);
        setLeaderboard(sliceData);
      } catch (error) {
        console.error("Ошибка загрузки лидерборда: ", error);
      }
    };

    fetchLeaderboard();
  }, [setLeaderboard]);

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = remainingSeconds.toString().padStart(2, "0");
    const formattedTime = `${formattedMinutes}:${formattedSeconds}`;
    return formattedTime;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.title}>Лидерборд</span>
          <Link className={styles.button} to="/">
            Начать игру
          </Link>
        </div>
        <div className={styles.board}>
          <div className={styles.boardNames}>
            <span>Позиция</span>
            <span>Пользователь</span>
            <span>Время</span>
          </div>

          {leaderboard?.length > 0 ? (
            <div className={styles.boardRating}>
              {leaderboard.map((leader, index) => (
                <div key={index} className={styles.boardRatingPlace}>
                  <span>#{index + 1}</span>
                  <span>{leader.name}</span>
                  <span>{formatTime(leader.time)}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.title}>Данные загружаются...</div>
          )}
        </div>
      </div>
    </div>
  );
}
