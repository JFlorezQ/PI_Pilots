import './Cards.css';
import Card from '../Card/Card'

function Cards({currentDrivers}) {

  const driversList= currentDrivers
  return (
    <div className='cards'>
      {driversList?.map(driver=>
        <Card driver={driver}/>)}
    </div>
  )
}

export default Cards;