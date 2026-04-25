import { useContext } from "react";
import { AssetContext } from "./FamilyTree";

const Special = ({special}) => {

    const asset = useContext(AssetContext)
    
    return (
        <div>
            Special: {special}
            <p>{asset}</p>
        </div>
    );
};

export default Special;