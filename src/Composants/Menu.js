import React, {useEffect, useMemo, useState} from "react";
import Model from "../Model/Model";
import CarteMenu from "./CarteMenu";

const Menu = () => {
    const model = useMemo(() => new Model(), []);
    const [user, setUser] = useState({nom: "", prenom: ""});

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const mail = localStorage.getItem("mail");
                const token = localStorage.getItem("token");
                if (mail && token) {
                    const userData = await model.getUtilisateurDataByMail(mail, token);
                    setUser({nom: userData.nom, prenom: userData.prenom, id: userData.id});
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, [model]);

    return (
        <div className="d-flex justify-content-around align-items-stretch p-5">
            <CarteMenu
                lienIcon="https://img.icons8.com/ios-filled/100/user.png"
                titre={`${user.prenom} ${user.nom}`}
                li={[localStorage.getItem("mail")]}
                redirection="#"
            />
            <CarteMenu
                lienIcon="https://img.icons8.com/ios-filled/100/screwdriver.png"
                titre="Pièces"
                li={["@"]}
                redirection="/piece"
            />
            <CarteMenu
                lienIcon="https://img.icons8.com/ios-filled/100/gears.png"
                titre="Poste de travail"
                li={["@"]}
                redirection="#"
            />
        </div>
    );
};

export default Menu;
