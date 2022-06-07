import React, {useEffect} from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

function Detail() {
    const location = useLocation ();
    const navigation =useNavigate ();

    useEffect (() => {
        if (location.state === undefined) {
            navigation("/");
        } else if (location.state === null) {
            Navigate("/");
        }
    });

    if (location.state) {
        return <span>{location.state.title}</span>;
    } else {
        return null;
    }
}

export default Detail;