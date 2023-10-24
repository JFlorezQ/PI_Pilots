import './Cards.css';
import Card from '../Card/Card'

function Cards({allDrivers}) {

  const driversList= allDrivers
  return (
    <div className='cards'>
      {driversList?.map(driver=>
        <Card driver={driver}/>)}
    </div>
  )
}

export default Cards;