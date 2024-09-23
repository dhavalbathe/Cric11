import styles from "./Text.module.css";


export const Text = () => {
    return (
      <div className="left-top-container">
        <div className="text-container">
          <h1 className='heading'>Welcome to Cric 11!</h1>
          <p className='para1'>Ready to play? Register your team now and compete in exciting matches. Stay updated with schedules, track your team's progress, and climb the leaderboard!</p>
          <p className='para2'>Register today and take your team to victory!</p>
        </div>
        <div className="cricket-image">
          <img className="Cricketer-image" src={cricketer} alt="Cricketer" />
        </div>
      </div>
    );
  };