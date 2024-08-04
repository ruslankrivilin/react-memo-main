/* eslint-disable prettier/prettier */
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
            <span className={styles.grid}>Позиция</span>
            <span className={styles.grid}>Пользователь</span>
            <span className={styles.grid}>Достижения</span>
            <span className={styles.grid}>Время</span>
          </div>

          {leaderboard?.length > 0 ? (
            <div className={styles.boardRating}>
              {leaderboard.map((leader, index) => (
                <div key={index} className={styles.boardRatingPlace}>
                  <span className={styles.grid}>#{index + 1}</span>
                  <span className={styles.grid}>{leader.name}</span>
                  <span className={styles.grid}>
                    <span>{
                      leader.achievements.includes(1) ? (
                        <><div class={styles.tooltip}><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21.5485 7.68386C21.7211 7.06469 21.5235 5.54349 22.7298 4.53679C23.936 3.53008 25.8124 3.65481 26.9415 4.71274C28.0705 5.77067 28.2522 7.75959 26.9165 9.0692C25.5807 10.3788 24.9651 9.64828 24.22 10.3543C23.4749 11.0603 23.6044 11.6394 24.0655 12.067C24.5289 12.4947 29.1268 17.2053 28.9973 17.5059C28.8678 17.8066 25.7352 21.2833 25.2218 21.535C24.7084 21.7867 23.8088 21.7622 23.6294 20.9314C23.4499 20.1007 23.7588 18.4391 22.4731 18.0093C21.1896 17.5817 20.6239 17.9336 19.3654 19.2432C18.1069 20.5528 17.5413 21.9871 18.5681 22.7177C19.5949 23.4482 20.8806 23.1453 21.394 24.0028C21.9074 24.8602 21.1373 25.6398 19.7766 26.8737C18.4159 28.1075 17.3618 29.1143 17.1823 28.9895C17.0029 28.8626 13.0979 24.809 12.714 24.3814C12.3278 23.9538 11.5827 23.5751 10.8648 24.2299C10.1447 24.8847 10.0175 27.0251 6.98708 27.0251C3.95667 27.0251 3.5932 23.8023 4.67225 22.4682C5.75129 21.1341 8.13882 21.0071 8.19107 20.1007C8.21379 19.6842 6.90303 18.5616 5.72631 17.3567C4.34286 15.938 3.05709 14.4346 3.00257 14.2586C2.90034 13.9312 5.87851 11.0603 6.44415 10.6572C7.0098 10.2541 7.65041 10.5058 7.95936 10.8332C8.26831 11.1606 8.34554 12.1673 8.60224 12.7464C8.85894 13.3254 10.0652 15.8444 12.9684 12.9735C15.8443 10.1271 13.1229 8.89325 12.1983 8.64157C11.2737 8.38989 10.6081 8.30749 10.3492 7.38319C10.1447 6.65265 11.2737 5.7974 12.455 4.68824C13.6363 3.57908 14.3291 3 14.6381 3C14.947 3 19.0815 7.35646 19.6221 7.85981C20.1628 8.36317 20.4944 8.49012 20.8806 8.38767C21.2645 8.28967 21.4713 7.96227 21.5485 7.68386Z" fill="url(#paint0_radial_201_100)" />
                          <defs>
                            <radialGradient id="paint0_radial_201_100" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.654 -4.18504) scale(27.084 26.5541)">
                              <stop offset="0.508" stop-color="#B7D118" />
                              <stop offset="0.572" stop-color="#B2D019" />
                              <stop offset="0.643" stop-color="#A5CD1D" />
                              <stop offset="0.717" stop-color="#8FC922" />
                              <stop offset="0.793" stop-color="#70C22A" />
                              <stop offset="0.871" stop-color="#48BA34" />
                              <stop offset="0.949" stop-color="#18B040" />
                              <stop offset="0.981" stop-color="#02AB46" />
                            </radialGradient>
                          </defs>
                        </svg>
                            <span class={styles.tooltiptext}>Игра пройдена в сложном режиме</span>
                          </div></>) : (
                        <><div class={styles.tooltip}><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g filter="url(#filter0_i_201_108)">
                            <path d="M21.5485 7.68386C21.7211 7.06469 21.5235 5.54349 22.7298 4.53679C23.936 3.53008 25.8124 3.65481 26.9415 4.71274C28.0705 5.77067 28.2522 7.75959 26.9165 9.0692C25.5807 10.3788 24.9651 9.64828 24.22 10.3543C23.4749 11.0603 23.6044 11.6394 24.0655 12.067C24.5289 12.4947 29.1268 17.2053 28.9973 17.5059C28.8678 17.8066 25.7352 21.2833 25.2218 21.535C24.7084 21.7867 23.8088 21.7622 23.6294 20.9314C23.4499 20.1007 23.7588 18.4391 22.4731 18.0093C21.1896 17.5817 20.6239 17.9336 19.3654 19.2432C18.1069 20.5528 17.5413 21.9871 18.5681 22.7177C19.5949 23.4482 20.8806 23.1453 21.394 24.0028C21.9074 24.8602 21.1373 25.6398 19.7766 26.8737C18.4159 28.1075 17.3618 29.1143 17.1823 28.9895C17.0029 28.8626 13.0979 24.809 12.714 24.3814C12.3278 23.9538 11.5827 23.5751 10.8648 24.2299C10.1447 24.8847 10.0175 27.0251 6.98708 27.0251C3.95667 27.0251 3.5932 23.8023 4.67225 22.4682C5.75129 21.1341 8.13882 21.0071 8.19107 20.1007C8.21379 19.6842 6.90303 18.5616 5.72631 17.3567C4.34286 15.938 3.05709 14.4346 3.00257 14.2586C2.90034 13.9312 5.87851 11.0603 6.44415 10.6572C7.0098 10.2541 7.65041 10.5058 7.95936 10.8332C8.26831 11.1606 8.34554 12.1673 8.60224 12.7464C8.85894 13.3254 10.0652 15.8444 12.9684 12.9735C15.8443 10.1271 13.1229 8.89325 12.1983 8.64157C11.2737 8.38989 10.6081 8.30749 10.3492 7.38319C10.1447 6.65265 11.2737 5.7974 12.455 4.68824C13.6363 3.57908 14.3291 3 14.6381 3C14.947 3 19.0815 7.35646 19.6221 7.85981C20.1628 8.36317 20.4944 8.49012 20.8806 8.38767C21.2645 8.28967 21.4713 7.96227 21.5485 7.68386Z" fill="#E9ECED" />
                          </g>
                          <defs>
                            <filter id="filter0_i_201_108" x="3" y="3" width="26" height="27" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feOffset dy="1" />
                              <feGaussianBlur stdDeviation="0.5" />
                              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0" />
                              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_201_108" />
                            </filter></defs>
                        </svg><span class={styles.tooltiptext}>Игра пройдена в легком режиме</span>
                        </div></>)
                    }</span>
                    <span>{
                      leader.achievements.includes(2) ? (
                        <><div class={styles.tooltip}><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M26.0369 21.4848C25.8394 21.4042 25.6226 21.383 25.4131 21.4237C25.2037 21.4644 25.0107 21.5652 24.8579 21.7137L24.7222 21.849C23.5553 23.0367 22.1623 23.9798 20.625 24.6233C19.0877 25.2667 17.4371 25.5974 15.77 25.5959C14.1026 25.5718 12.4566 25.218 10.9272 24.5552C9.39771 23.8924 8.01517 22.9337 6.85951 21.7345C6.71102 21.5759 6.51653 21.4676 6.30326 21.4246C6.08998 21.3817 5.86859 21.4064 5.67006 21.4952C5.46189 21.5747 5.28474 21.7187 5.16457 21.906C5.0444 22.0933 4.98753 22.3141 5.00229 22.536V27.9592C5.00229 28.2352 5.11222 28.5 5.30789 28.6952C5.50356 28.8903 5.76895 29 6.04567 29H25.6196C25.8963 29 26.1617 28.8903 26.3573 28.6952C26.553 28.5 26.6629 28.2352 26.6629 27.9592V22.4839C26.672 22.2738 26.6171 22.0658 26.5053 21.8875C26.3936 21.7091 26.2303 21.5687 26.0369 21.4848Z" fill="url(#paint0_linear_201_103)" />
                          <path d="M15.8536 3C13.7075 3 11.6095 3.63484 9.82504 4.82424C8.04057 6.01364 6.64975 7.70418 5.82844 9.68208C5.00714 11.66 4.79225 13.8364 5.21095 15.9361C5.62964 18.0359 6.66312 19.9646 8.18069 21.4784C9.69825 22.9922 11.6318 24.0232 13.7367 24.4408C15.8416 24.8585 18.0234 24.6441 20.0062 23.8248C21.989 23.0056 23.6837 21.6182 24.8761 19.8381C26.0684 18.0581 26.7048 15.9653 26.7048 13.8244C26.6993 10.9553 25.5543 8.20525 23.5205 6.17647C21.4867 4.14769 18.7299 3.0055 15.8536 3Z" fill="url(#paint1_radial_201_103)" />
                          <defs>
                            <linearGradient id="paint0_linear_201_103" x1="15.832" y1="21.4035" x2="15.832" y2="30.061" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#FFB500" />
                              <stop offset="1" stop-color="#FFE052" />
                            </linearGradient>
                            <radialGradient id="paint1_radial_201_103" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.8536 24.6406) rotate(90) scale(16.0758 16.1156)">
                              <stop offset="0.015625" stop-color="#7F12F4" />
                              <stop offset="1" stop-color="#E0C5FF" />
                            </radialGradient>
                          </defs>
                        </svg><span class={styles.tooltiptext}>Игра пройдена без супер сил</span>
                        </div></>) : (
                        <><div class={styles.tooltip}><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g filter="url(#filter0_i_201_111)">
                            <path d="M26.0369 21.4847C25.8394 21.4042 25.6226 21.383 25.4131 21.4237C25.2037 21.4644 25.0107 21.5652 24.8579 21.7137L24.7222 21.849C23.5553 23.0366 22.1623 23.9798 20.625 24.6232C19.0877 25.2667 17.4371 25.5974 15.77 25.5959C14.1026 25.5717 12.4566 25.218 10.9272 24.5552C9.39771 23.8924 8.01517 22.9337 6.85951 21.7345C6.71102 21.5759 6.51653 21.4675 6.30326 21.4246C6.08998 21.3817 5.86859 21.4064 5.67006 21.4951C5.46189 21.5747 5.28474 21.7187 5.16457 21.906C5.0444 22.0933 4.98753 22.3141 5.00229 22.536V27.9592C5.00229 28.2352 5.11222 28.5 5.30789 28.6951C5.50356 28.8903 5.76895 29 6.04567 29H25.6196C25.8963 29 26.1617 28.8903 26.3573 28.6951C26.553 28.5 26.6629 28.2352 26.6629 27.9592V22.4839C26.672 22.2738 26.6171 22.0658 26.5053 21.8874C26.3936 21.7091 26.2303 21.5687 26.0369 21.4847Z" fill="#E9ECED" />
                          </g>
                          <g filter="url(#filter1_i_201_111)">
                            <path d="M15.8536 3C13.7075 3 11.6095 3.63484 9.82504 4.82424C8.04057 6.01364 6.64975 7.70418 5.82844 9.68208C5.00714 11.66 4.79225 13.8364 5.21095 15.9361C5.62964 18.0359 6.66312 19.9646 8.18069 21.4784C9.69825 22.9922 11.6318 24.0232 13.7367 24.4408C15.8416 24.8585 18.0234 24.6441 20.0062 23.8248C21.989 23.0056 23.6837 21.6182 24.8761 19.8381C26.0684 18.0581 26.7048 15.9653 26.7048 13.8244C26.6993 10.9553 25.5543 8.20525 23.5205 6.17647C21.4867 4.14769 18.7299 3.0055 15.8536 3Z" fill="#E9ECED" />
                          </g>
                          <defs>
                            <filter id="filter0_i_201_111" x="5" y="21.4035" width="21.6641" height="8.59647" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feOffset dy="1" />
                              <feGaussianBlur stdDeviation="0.5" />
                              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0" />
                              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_201_111" />
                            </filter>
                            <filter id="filter1_i_201_111" x="5.00244" y="3" width="21.7026" height="22.6488" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feOffset dy="1" />
                              <feGaussianBlur stdDeviation="0.5" />
                              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0" />
                              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_201_111" />
                            </filter>
                          </defs>
                        </svg><span class={styles.tooltiptext}>Игра пройдена с супер силой</span>
                        </div></>)
                    }</span>
                  </span>
                  <span className={styles.grid}>{formatTime(leader.time)}</span>
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
