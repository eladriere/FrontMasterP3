import React, {useMemo} from "react";
import Model from "../Model/Model";
import ListePagination from "./ListePagination";
import Pieces from "./Pieces";

const CarteListePieces = () => {

    const model = useMemo(() => new Model(), []);

    const edit = (objectData) => {
        console.log(objectData)
    }

    return (
        <div className={"card"}>
            <div className={"container d-flex p-2 row justify-content-center"}>
                <div className={"container"}>
                    <ListePagination
                        limit={5}
                        typeObjet={Pieces}
                        propsTypeObjet={
                            {
                                onClick: edit,
                                nameButton : "Modifier"
                            }
                        }
                        getObjetWithRange={model.getAllPieceWithRange}
                    />
                </div>
            </div>
        </div>
    );
}

export default CarteListePieces;
