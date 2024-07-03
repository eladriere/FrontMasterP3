import React, { useMemo, useState, useEffect } from "react";
import ListePagination from "./ListePagination";
import Model from "../Model/Model";
import Pieces from "./Pieces";

const ListeAjout = (props) => {
    const [tabObject, setTabObject] = useState([]);
    const model = useMemo(() => new Model(), []);

    useEffect(() => {
        // Appeler la prop onChange chaque fois que tabObject est modifié
        if (props.onChange) {
            props.onChange(tabObject);
        }
    }, [tabObject, props]);

    const ajouterObject = (object) => {
        setTabObject(prevTabObject => {
            const exists = prevTabObject.some(obj => obj.idPiece === object.idPiece);
            if (exists) {
                return prevTabObject;
            }
            return [...prevTabObject, object];
        });
    };

    const supprimerObject = (object) => {
        setTabObject(prevTabObject => prevTabObject.filter(obj => obj.idPiece !== object.idPiece));
    };

    const handleQuantityChange = (index, newQuantity) => {
        setTabObject(prevTabObject => {
            const newTabObject = [...prevTabObject];
            newTabObject[index].quantité = newQuantity;
            return newTabObject;
        });
    };

    return (
        <>
            {tabObject.map((object, index) => (
                <div key={index}>
                    <div className={"container"}>
                        <div className={"row align-items-center"}>
                            <div className={"col-4"}>
                                <input className="form-control"
                                       type="number"
                                       name="quantité"
                                       min={1}
                                       defaultValue={1}
                                       value={object.quantité}
                                       onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                                />
                            </div>
                            <div className={"col"}>
                                {React.createElement(props.typeObjet, {
                                    propsDuParent: {
                                        onClick: () => supprimerObject(object),
                                        nameButton: "Supprimer"
                                    },
                                    object: object,
                                    key: index
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                    data-bs-target={`#${props.idModal}`}>
                +
            </button>

            <div className="modal fade" id={`${props.idModal}`} tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{props.titre}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ListePagination
                                limit={5}
                                typeObjet={Pieces}
                                propsTypeObjet={{
                                    onClick: ajouterObject,
                                    nameButton: "Ajouter"
                                }}
                                getObjetWithRange={model.getAllPieceWithRange}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                            <button type="button" className="btn btn-primary">Ajouter</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListeAjout;
