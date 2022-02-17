import React from 'react'
import './Rockets.scss'
import axios from 'axios'

const Rockets = () => {
  const [rockets, setRockets] = React.useState([])
  React.useEffect(() => {
    const url = `https://api.spacexdata.com/v4/rockets`

    axios.get(url).then((res) => {
      console.log('history: ', res)
      setRockets(res.data)
    })
  }, [])
  const stylePost = {
    order: 1,
    paddingRight: '30px',
    // width: '50%'

  }
  return(
    <div id="rockets">
      <h1>Foguetes:</h1>
      {rockets.map((item, index) => (
        <div className="area-rocket" key={index}>
          <div className="area-infos" style={index%2 != 0 ? stylePost : {order: 0}}>          
            <h1>{item.name}</h1>
            <div className="list-infos">
              <div>
                <p>Altura: </p>
              </div>
              <div>
                <p>{item.height.meters}m</p>
              </div>
            </div>

            <div className="list-infos">
              <div>
                <p>Peso: </p>
              </div>
              <div>
                <p>{item.mass.kg} KG</p>
              </div>
            </div>     
            <div className="list-infos list-infos-twodisplay">
              <div>
                <p>Descrição: </p>
              </div>
              <div>
                <p className="text-description">{item.description} KG</p>
              </div>
            </div>                    
          </div>

          <div className="area-img" style={index%2 != 0 ? {paddingLeft: '30px'} : {paddingLeft: ''}}>
            <img src={item.flickr_images[0]} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Rockets