import React, {useEffect, useMemo, useState} from "react";
import Select from "react-select";
import Model from "../Model/Model";
import ListeAjout from "./ListeAjout";
import Pieces from "./Pieces";

const CarteCreerPiece = () => {
    const model = useMemo(() => new Model(), []);
    const [matiere, setMatiere] = useState("");
    const [utilisateurs, setUtilisateurs] = useState([]);
    const [nom, setNom] = useState("");
    const [livrablesChecked, setLivrablesChecked] = useState(false);
    const [intermediaireChecked, setIntermediaireChecked] = useState(false);
    const [achatExterieurChecked, setAchatExterieurChecked] = useState(false);
    const [prix, setPrix] = useState("");
    const [responsable, setResponsable] = useState(null);
    const [sousPieces, setSousPieces] = useState([]);

    const optionsResponsable = useMemo(() => {
        return utilisateurs.map(user => ({label: user.nom, value: user.id}));
    }, [utilisateurs]);

    const creerPiece = async () => {

        let pieceACreer = {
            "piece": {
                "nom": nom,
                "livrable": livrablesChecked,
                "quantite": 1,
                "intermediaire": intermediaireChecked,
                "acheteExterieur": achatExterieurChecked,
                "idMatierePremiereDePiece": 1,
                "idGammeDeFabrication": 1,
                "prix": prix,
                "libelle": ""
            },
            "sousPiece": sousPieces
        }
        console.log(pieceACreer)
        let response = await model.creerPiece(pieceACreer)
        console.log("response", response)
    };

useEffect(() => {
    const fetchUtilisateurs = async () => {
        try {
            const users = await model.getAllUtilisateur();
            setUtilisateurs(users);
        } catch (error) {
            console.error('Erreur lors de la récupération des utilisateurs:', error);
        }
    };

    fetchUtilisateurs();
}, [model]);

return (
    <>
        <div className="card">
            <div className="container p-2">
                <div className="row">
                    <div className="col">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Nom</span>
                            <input type="text" className="form-control" onChange={(e) => setNom(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="livrablesCheck"
                                checked={livrablesChecked}
                                onChange={(e) => setLivrablesChecked(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="livrablesCheck">
                                Livrables
                            </label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="intermediaireCheck"
                                checked={intermediaireChecked}
                                onChange={(e) => setIntermediaireChecked(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="intermediaireCheck">
                                Intermédiaire
                            </label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="achatExterieurCheck"
                                checked={achatExterieurChecked}
                                onChange={(e) => setAchatExterieurChecked(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="achatExterieurCheck">
                                Achat Extérieur
                            </label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Prix</span>
                            <input
                                type="number"
                                className="form-control"
                                onChange={(e) => setPrix(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon1">Matière</span>
                            <Select
                                options={[]}
                                onChange={(option) => setMatiere(option ? option.value : "")}
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Responsable de la gamme</span>
                            <Select
                                options={optionsResponsable}
                                onChange={setResponsable}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        Sous-Pièce
                    </div>
                    <div className="col text-center">
                        Opération
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ListeAjout
                            idModal={2}
                            titre={"Sous pièce"}
                            typeObjet={Pieces}
                            onChange={(pieces) => setSousPieces(pieces)}
                        />
                    </div>
                    <div className={"col"}></div>
                </div>
                <div className={"row"}>
                    <div className={"col-9"}></div>
                    <div className={"col"}>
                        <button className={"btn btn-primary"} onClick={creerPiece}>
                            Créer pièce (pour de vrai)
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
);
}
;

export default CarteCreerPiece;