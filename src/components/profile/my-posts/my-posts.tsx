import React from "react";
import styles from "./my-posts.module.css";
import {ProfilePostsType} from "../../../redux/my-types";
import {Post} from "./post/post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength} from "../../../utils/validators/validators";
import {TextareaForm} from "../../UI-kit/textarea/textareaForm";

type MyPostsType = {
    myPosts: ProfilePostsType[] | null
    addPost: (text: string) => void
};

const maxLength500 = maxLength(500);

const MyPostForm: React.FC<InjectedFormProps> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={maxLength500} component={TextareaForm} type={"textarea"} name={"myPost"}
                   className={styles.post_message}/>
            <button className={styles.post_btn}>New post</button>
        </form>
    )
}

const MyPostReduxForm = reduxForm({form: "myPost"})(MyPostForm);

export const MyPosts: React.FC<MyPostsType> = (props) => {

    let posts = null;

    if (props.myPosts) {
        posts = props.myPosts.map(i =>
            <Post id={i.id}
                  key={i.id}
                  message={i.message}
                  likesCount={i.likesCount}
            />);
    }

    const addPost = (data: { myPost?: string }) => {
        if (data.myPost) {
            props.addPost(data.myPost.trim());
        }
    };

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>My Posts</h1>
            <div className={styles.new_post_wrapper}>
                <MyPostReduxForm onSubmit={addPost}/>
            </div>
            <div className={styles.posts_wrapper}>
                {posts}
            </div>
        </div>
    )
};
