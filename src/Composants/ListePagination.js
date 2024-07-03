import React, {useEffect, useState} from "react";

const ListePagination = (props) => {

    const [tabOfObjects, setTabOfObjects] = useState([]);
    const [currentOffset, setCurrentOffset] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            return await props.getObjetWithRange(currentOffset, props.limit);
        };
        fetchData().then(response => {
            setTabOfObjects(response);
        });
    }, [currentOffset, props.limit, props.getObjetWithRange]);

    const handleNextPage = () => {
        setCurrentOffset(currentOffset + props.limit);
    };

    const handlePreviousPage = () => {
        if (currentOffset >= props.limit) {
            setCurrentOffset(currentOffset - props.limit);
        }
    };

    return (<>
        <div className={"container p-2"}>
            <div className={"row"}>
                <div className={"col"}>
                    <div className={"input-group p-2"}>
                        <span className={"input-group-text"}>Nom</span>
                        <input className="form-control"/>
                    </div>
                </div>
            </div>

            <div className={"row"}>
                <div className={"col"}>
                    <div className={"container"}>
                        {tabOfObjects.map((object, index) =>
                            (React.createElement(props.typeObjet, {
                            propsDuParent: props.propsTypeObjet, object: object, key: index
                        })))}
                    </div>
                </div>
            </div>

            <div className={"row"}>
                <div className={"col"}>
                    <div className={"container d-flex justify-content-evenly "}>
                        <button className={"btn btn-primary"} onClick={handlePreviousPage}
                                disabled={currentOffset === 0}>Précédent
                        </button>
                        <button className={"btn btn-primary"} onClick={handleNextPage}
                                disabled={tabOfObjects.length < props.limit}>Suivant
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default ListePagination;
