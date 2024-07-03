import React, { useEffect, useState } from "react";

import Header from "../Composants/Header";
import Menu from "../Composants/Menu";

const PagePrincipale = () => {

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {

        }
    }, []);

    return (<>
        <Header/>
        <Menu/>
    </>)
}

export default PagePrincipale;