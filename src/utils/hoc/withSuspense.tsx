import React from "react";
import {Preloader} from "../../components/UI-kit/preloader/preloader";

export const withSuspense = (Component: any) => (props: any): any => {
    return (
        <React.Suspense fallback={<Preloader />}>
            <Component {...props}/>
        </React.Suspense>
    )
}