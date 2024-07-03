import React from "react";

const Pieces = (props) => {
    const bouttonPress = () => {
        props.propsDuParent.onClick(props.object);
    };

    return (
        <>
            <div className="card m-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <span>{props.object.nom}</span>
                        </div>
                        <div className="col">
                            <button className="btn btn-sm btn-primary" onClick={bouttonPress}>
                                {props.propsDuParent.nameButton}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pieces;
