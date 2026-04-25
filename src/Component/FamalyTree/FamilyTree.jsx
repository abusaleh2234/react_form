import { createContext, useState } from "react";
import GrandFather from "./GrandFather";
import "./family.css"

export const AssetContext = createContext("")
export const MoneyContext = createContext(0)
const FamilyTree = () => {
    const [money, setMoney] = useState(0)
    const asset = "dimond"
    return (
        <div className="familyTree">
            <h4>money: {money}</h4>
            <MoneyContext.Provider value={[money,setMoney]}>
                <AssetContext.Provider value={asset}>
                <GrandFather></GrandFather>
            </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default FamilyTree;