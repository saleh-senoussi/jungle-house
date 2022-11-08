import CareScale from '../care-scale/CareScale';
import './PlantItem.css';

function handleClick(plant) {
	alert(`You want to buy 1 ${plant.name}? Great choice 🌱✨`)
}

function PlantItem({ plant, index }) {
	
	return (
		<li key={`${plant.id}-${index}`} className="jh-plant-item" onClick={() => handleClick(plant)}>
            {plant.isBestSale && <span>🔥</span>}
            {plant.name}
            {plant.isSpecialOffer && <span className="jh-sales">Sale</span>}
            <CareScale careType='water' scaleValue={plant.water} />
            <CareScale careType='light' scaleValue={plant.light} />
        </li>
	);
}

export default PlantItem