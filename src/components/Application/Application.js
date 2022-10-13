import {Link} from "react-router-dom";
import './Application.scss';

export default function Application(props) {
    return (
        <Link to={`/application/${props.id}`}>
            <div className="application">
                <div className="application-title">
                    <span className="application-title-title">
                        {props.title}
                    </span>
                    <span className="application-title-icon">
                        {props.icon}
                    </span>

                </div>
                <p className="application-comment">
                    {props.message}
                </p>
                <p className="application-end-date">
                    - {props.endDate}
                </p>
            </div>
        </Link>
    )
}
