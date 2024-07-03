import React from "react";
import Model from "../Model/Model";

const CarteMenu = ({ lienIcon, titre, li, redirection }) => {
    return (
        <div className="card d-flex row" style={{ width: "18rem" }}>
            <div className="d-flex justify-content-center">
                <img src={lienIcon} className="card-img-top" style={{ width: "10rem" }} alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">{titre}</h5>
                <ul>
                    {li.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <div className="d-flex justify-content-center">
                    <a href={redirection} className="btn btn-primary w-100">Voir</a>
                </div>
            </div>
        </div>
    );
}

export default CarteMenu;
