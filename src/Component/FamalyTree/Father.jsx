import MySelf from './MySelf';
import Brother from './Brother';
import Sister from './Sister';

const Father = () => {
    return (
        <div>
            <h3>Father</h3>
            <div className="flex">
                <MySelf></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </div>
        </div>
    );
};

export default Father;