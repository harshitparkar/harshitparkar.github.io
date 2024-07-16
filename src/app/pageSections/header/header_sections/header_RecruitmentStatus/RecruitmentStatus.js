import styles from "./RecruitmentStatus.module.css";
export default function RecruitmentStatus({ getting_recruited }) {
  return (
    <div className={`${styles.mainContainer}`}>
      <p className={`${styles.recruitmentStatus_headerText}`}>
        Recruitment Status
      </p>
      {getting_recruited ? (
        <div className={`${styles.subContainer}`}>
          <div className={`${styles.statusIndicator_green}`} />
          <p className={`${styles.recruitmentStatus_subText}`}>Open for work</p>
        </div>
      ) : (
        <div className={`${styles.subContainer}`}>
          <div className={`${styles.statusIndicator_red}`} />
          <p className={`${styles.recruitmentStatus_subText}`}>
            Still not looking
          </p>
        </div>
      )}
    </div>
  );
}
