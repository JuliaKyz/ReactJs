// import '/App.css';

import { useSelector } from "react-redux";
import { getProfile } from "../store/Profile/selectors";

export default function Message(props) {
    const profileName = useSelector(getProfile);
    return (
        <div className='App'>
            <header className='App-header'>
                <h1 className='App-link'>This is {props.text}</h1>
                <p>{props.author}</p>
            </header>
        </div>
    );
}
