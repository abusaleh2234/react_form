import Father from "./Father";
import Mother from "./Mother";
import Uncle from "./Uncel";

const GrandFather = () => {
    return (
        <div>
            <h3>Grand Father</h3>
            <div className="flex">
                <Father></Father>
                <Mother></Mother>
                <Uncle></Uncle>
            </div>
        </div>
    );
};

export default GrandFather;