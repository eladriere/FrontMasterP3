import React, {useEffect, useMemo} from "react";

import Header from "../Composants/Header";
import CarteListePieces from "../Composants/CarteListePieces";
import Model from "../Model/Model";
import CarteCreerPiece from "../Composants/CarteCreerPiece";

const PagePiece = () => {

    const model = useMemo(() => new Model(), []);
    const creerPiece = async () => {
        for (let i = 0; i < 12; ++i) {
            let data = {
                nom: i.toString(),
                livrable: true,
                quantite: 12,
                intermediaire: false,
                acheteExterieur: false,
                idMatierePremiereDePiece: 12,
                idGammeDeFabrication: 12,
                prix: 12.50,
                libelle: "Ouais Ouais",
                idCompositionPiece: 4
            }

            await model.creerPiece(data)
        }
    }


    useEffect(() => {
    }, []);

    return (<>
        <Header/>
        <button className={"btn btn-primary"} onClick={creerPiece}>Créer Pièces</button>
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-4"}>
                    <CarteListePieces/>
                </div>
                <div className={"col"}>
                    <CarteCreerPiece/>
                </div>
            </div>
        </div>
    </>)
}

export default PagePiece;