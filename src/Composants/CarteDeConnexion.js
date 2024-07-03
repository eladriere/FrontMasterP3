import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Model from "../Model/Model";

const CarteDeConnexion = () => {
    const model = new Model();
    const [mail, setMail] = useState("");
    const [motDePasse, setMotDePasse] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            console.log("Utilisateur déjà connecté");
            navigate("/menu");
        }
    }, [navigate]);

    const connexion = async () => {
        if (mail !== "" && motDePasse !== "") {
            try {
                let reponse = await model.connexion(mail, motDePasse);
                if (reponse.token) {
                    localStorage.setItem("token", reponse.token);
                    localStorage.setItem("mail", mail)
                    navigate('/menu');
                } else {
                    if (reponse === 401) {
                        console.log("Mail ou Mot de passe erroné");
                    }
                }
            } catch (error) {
                console.error("Erreur lors de la connexion :", error);
            }
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card" style={{width: "18rem"}}>
                <img src="/Logo.jpg" className="card-img-top" alt="Logo"/>
                <div className="card-body">
                    <h5 className="card-title text-center">Connexion</h5>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Adresse email</label>
                        <input type="email" className="form-control" id="email" placeholder="exemple@exemple.com"
                               required
                               onChange={(event) => {
                                   setMail(event.target.value);
                               }}/>
                    </div>
                    <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <label htmlFor="password" className="form-label">Mot de passe</label>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        </div>
                        <input type="password" className="form-control" id="password" placeholder="Mot de passe"
                               required
                               onChange={(event) => {
                                   setMotDePasse(event.target.value);
                               }}/>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary" onClick={connexion}>Connexion</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarteDeConnexion;
