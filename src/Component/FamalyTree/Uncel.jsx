import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <div className="flex">
                <Cousin name="Rahi"></Cousin>
                <Cousin name="Mahi"></Cousin>
            </div>
        </div>
    );
};

export default Uncle;