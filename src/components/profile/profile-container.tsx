import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GlobalStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {setUserProfileThunkCreator, setUserStatusThunkCreator} from "../../redux/profile-reducer/profile-reducer";
import {Profile} from "./profile";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

const ProfileContainer: React.FC<RouteComponentProps<{ userId?: string }>> = (props) => {

    const isAuth = useSelector((state: GlobalStateType) => state.auth.isAuth);
    const authUserId = useSelector((state: GlobalStateType) => state.auth.userId);
    const dispatch = useDispatch();

    let userId: any = props.match.params.userId;

    useEffect(() => {
        if (!userId) userId = authUserId;
        dispatch(setUserProfileThunkCreator(userId));
        dispatch(setUserStatusThunkCreator(userId));
    }, [userId])

    if (!isAuth) return <Redirect to={"/login"} />

    return <Profile/>
}

export default compose(withRouter)(ProfileContainer);

