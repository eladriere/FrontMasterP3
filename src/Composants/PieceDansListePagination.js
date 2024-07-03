import React from "react";

const PieceDansListePagination = (props) => {
    return (
        <>
            <div className={"row"}>
                <div className={"col"}>
                    <div className={"card"}>
                        <div className={"row"}>
                            <div className={"col"}>
                                <p>{props.object.nom}</p>
                            </div>
                            <div className={"col"}>
                                <button className={"btn  p-2"}>Modifier</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PieceDansListePagination;
