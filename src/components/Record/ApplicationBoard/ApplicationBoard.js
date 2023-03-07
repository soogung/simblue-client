import "./ApplicationBoard.scss";
import { HiPencil } from "react-icons/hi";
function ApplicationBoard(props) {
  var today = new Date();
  var dday = new Date(props.endDate);
  var gap = dday.getTime() - today.getTime();
  var result = Math.ceil(gap / (1000 * 60 * 60 * 24));

  return (
    <>
      <div className="app-board">
        <div className="app-board-com">
          <div className="app-board-top">
            <a className="app-board-top-emoji">{props.emoji}</a>
            <a className="app-board-top-title">{props.title}</a>
          </div>
          <div className="app-board-bottom">
            <p className="app-board-bottom-p">
              {props.status === "ALWAYS" ? (
                <a>상시</a>
              ) : props.status === "NOT_STARTED" ? (
                <a>시작 전</a>
              ) : props.status === "IN_PROGRESS" ? (
                <a>{result}일 남음</a>
              ) : (
                <a>완료됨</a>
              )}
              <a className="app-board-bar">|</a>
              <a>{props.numberOfReplies}개의 신청</a>
            </p>
            <p
              className="app-board-bottom-pen"
              onClick={props.navigateManagement}
            >
              <HiPencil />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default ApplicationBoard;
