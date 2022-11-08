import { plantList } from '../../data/plantList';
import PlantItem from '../plant-item/PlantItem';
import './ShoppingList.css'

function ShoppingList() {
    const categories = plantList.reduce(
        (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    );
    return (
        <div>
            <ul>
                {
                    categories.map((category, index) => (
                        <li key={`${category}-${index}`}>{category}</li>
                    ))
                }
            </ul>
            <ul className="jh-plant-list">
                {
                    plantList.map((plant, index) => (
                        <PlantItem index={index} plant={plant} />
                    ))
                }
            </ul>
        </div>
    )
}

export default ShoppingList