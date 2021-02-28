import React, {useState} from "react";
import styles from "./paginator.module.css";
import {getUsersThunkCreator} from "../../../redux/users-reducer/users-reducer";
import {useDispatch} from "react-redux";


// Props type
type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    portionSize: number
}


const Paginator: React.FC<PropsType> = React.memo((props) => {

    // Hooks
    const dispatch = useDispatch();
    const [portionNumber, setPortionNumber] = useState(1);


    // Create all pages
    const allPages = Math.ceil(props.totalItemsCount / props.pageSize);
    let pagesArray = [];

    for (let i = 1; i <= allPages; i++) {
        pagesArray.push(i);
    }


    // Create a portion of the all pages to show
    const allPortions = Math.ceil(allPages / props.portionSize);
    const leftPageNumber = (portionNumber - 1) * props.portionSize;
    const rightPageNumber = portionNumber * props.portionSize;


    // Map pages - DOM elements
    const pages = pagesArray.slice(leftPageNumber, rightPageNumber).map(pageNumber => {

        let activeClassName = styles.pageNumber;

        if (props.currentPage === pageNumber) {
            activeClassName = styles.activePageNumber;
        }

        const currentPageHandler = () => dispatch(getUsersThunkCreator(pageNumber, props.pageSize));

        return <span key={pageNumber}
                      className={activeClassName}
                      onClick={currentPageHandler}>{pageNumber}</span>
    });


    // Arrow buttons handlers
    const leftArrowHandler = () => setPortionNumber(portionNumber - 1);
    const rightArrowHandler = () => setPortionNumber(portionNumber + 1);


    // Render
    return (
        <div className={styles.pagesWrapper}>
            {
                portionNumber > 1
                ? <button onClick={leftArrowHandler}>Left</button>
                : <button disabled>Left</button>
            }

            {pages}

            {
                portionNumber !== allPortions
                    ? <button onClick={rightArrowHandler}>Right</button>
                    : <button disabled>Right</button>
            }
        </div>
    )
})

export default Paginator;