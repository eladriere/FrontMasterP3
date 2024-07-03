import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Model from "../Model/Model";

const PagePrincipale = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate('/')
        }
    }, []);

    const deconnexion = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("userData")
        navigate('/')
    }

    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/menu">Ping-Pong-Pieces</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Devis/Commandes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pièces</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Mon Compte</a>
                        </li>
                        <li className="nav-item">
                            <button onClick={deconnexion} type="button" className="btn btn-danger">Deconnexion</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </>)
}

export default PagePrincipale;