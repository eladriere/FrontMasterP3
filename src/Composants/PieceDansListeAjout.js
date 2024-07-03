import React from "react";

const PieceDansListeAjout = (props) => {

    const ajouter = () => {
        console.log("PieceDansListeAjout")
        props.ajouterObject(props.object)
    }

    return (
        <>
            <li className={"list-group-item"}>
                <div className={"container text-center"}>
                    <div className={"row"}>
                        <div className={"col-1"}>
                            <input/>
                        </div>
                        <div className={"col"}>
                            <p>{props.object.nom}</p>
                        </div>
                        <div className={"col"}>
                            <button className={"btn btn-danger p-2"} onClick={ajouter}>X</button>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
}

export default PieceDansListeAjout;
