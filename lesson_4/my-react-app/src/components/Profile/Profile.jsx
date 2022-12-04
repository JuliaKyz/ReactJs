import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../store/Profile/selectors";
import { changeName } from "../store/Profile/action";


export default function Profile() {
    const dispatch = useDispatch();
    const profileName = useSelector(getProfile);
    const [value, setValue] = useState("");

    const handleChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const setName = useCallback(() => {
        value.length && dispatch(changeName(value));
        setValue("");
    }, [dispatch, value]);
}







// export default function Profile() {
//     const dispatch = useDispatch();
//     const { showName, name } = useSelector(state => state);

//     const setShowName = useCallback(() => {
//         dispatch(toggleShowName);
//     }, [dispatch]);


//     return (
//         <div>
//             <h4>Profile</h4>
//             <input
//                 type="checkbox"
//                 checked={showName}
//                 value={showName}
//                 onChange={setShowName}
//             />
//             <span>Show Name</span>
//             {showName && <div>{name}</div>}
//         </div>
//     );
// }
