import './TeacherApplication.scss';
import {Link, useNavigate} from "react-router-dom";

export default function TeacherApplication(props) {

    return (
        <>
            <div className="teacher-application"
                 onClick={props.navigateManagement}
            >
                <div className="application-title">
                        <span className="emoji application-title-icon">
                            {props.emoji}
                        </span>
                    <span className="application-title-title">
                            {props.title}
                        </span>
                </div>
                <p className="application-comment">
                    {props.description}
                </p>
                <p className="application-end-date">
                    - {props.isAlways ? "상시" : props.endDate}
                </p>
            </div>
        </>
    )
}
