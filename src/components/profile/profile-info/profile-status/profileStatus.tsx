import React from "react";
import {ChangeEvent} from "react";

type PropsType = {
    status: string
    updateUserStatus: (status: string) => void
};

export class ProfileStatus extends React.Component<PropsType, {}> {

    state = {
        editMode: false,
        status: this.props.status
    };

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                ...this.state,
                status: this.props.status
            });
        }
    };

    activatedEditMode = () => {
        this.setState({
            ...this.state,
            editMode: true
        });
    };

    deactivatedEditMode = () => {
        this.setState({
            ...this.state,
            editMode: false,
            status: this.props.status
        });
    };

    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            status: e.currentTarget.value
        });
    };

    statusHandler = () => {
        this.props.updateUserStatus(this.state.status);
        this.setState({
            ...this.state,
            editMode: false
        });
    };

    render() {
        return (
            <div>
                {
                    this.state.editMode
                        ? <div onBlur={this.statusHandler}>
                            <input onChange={this.onChangeHandler}
                                   type="text"
                                   value={this.state.status}
                                   autoFocus
                            />
                            <button onClick={this.statusHandler}>Save</button>
                        </div>
                        : <span onDoubleClick={this.activatedEditMode}>
                            {this.props.status ? this.props.status : "Установить статус..."}
                        </span>
                }
            </div>
        );
    };
}