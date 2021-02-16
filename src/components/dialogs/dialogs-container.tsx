import React from 'react';
import {compose} from "redux";
import {Dialogs} from './dialogs';
import {withAuthRedirect} from '../../hok/withAuthRedirect';

export default compose(withAuthRedirect)(Dialogs);