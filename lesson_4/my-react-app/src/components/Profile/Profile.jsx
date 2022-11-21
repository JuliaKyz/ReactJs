import { useCallback } from "react";
// import { store } from "../../store/index";
import { toggleShowName } from "../../store/profile/actions";
import { useDispatch, useSelector } from "react-redux";


export default function Profile() {
    const dispatch = useDispatch();
    const { showName, name } = useSelector(state => state);

    const setShowName = useCallback(() => {
        dispatch(toggleShowName);
    }, [dispatch]);


    return (
        <div>
            <h4>Profile</h4>
            <input
                type="checkbox"
                checked={showName}
                value={showName}
                onChange={setShowName}
            />
            <span>Show Name</span>
            {showName && <div>{name}</div>}
        </div>
    );



}
