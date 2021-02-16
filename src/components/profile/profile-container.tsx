import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GlobalStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {setUserProfileThunkCreator, setUserStatusThunkCreator} from "../../redux/profile-reducer/profile-reducer";
import {Profile} from "./profile";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hok/withAuthRedirect";

const ProfileContainer: React.FC<RouteComponentProps<{ userId?: string }>> = (props) => {

    const authUserId = useSelector((state: GlobalStateType) => state.auth.userId);
    const dispatch = useDispatch();

    let userId: any = props.match.params.userId;

    useEffect(() => {
        if (!userId) userId = authUserId;
        dispatch(setUserProfileThunkCreator(userId));
        dispatch(setUserStatusThunkCreator(userId));
    }, [userId])

    return <Profile/>
}

export default compose(withAuthRedirect, withRouter)(ProfileContainer);

