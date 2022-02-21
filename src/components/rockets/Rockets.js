import React from 'react'
import './Rockets.scss'
import axios from 'axios'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Rockets = () => {
  const [rockets, setRockets] = React.useState([])
  React.useEffect(() => {
    const url = `https://api.spacexdata.com/v4/rockets`

    axios.get(url).then((res) => {
      setRockets(res.data)
      Aos.init({duration: 1000})
    })
  }, [])
  const stylePost = {
    order: 1,
    paddingRight: '30px',
    // width: '50%'

  }

  return (
    <div id="rockets">
        <div>
          <h1>Foguetes:</h1>
        </div>
        {rockets.map((item, index) => (
          <div className="area-rocket" key={index}>
            <div className="area-infos" 
              style={index % 2 !== 0 ? stylePost : { order: 0 }} 
              data-aos={index % 2 !== 0 ? "fade-right" : "fade-left"}
            >
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
                  <p>{Number(item.mass.kg).toLocaleString()} KG</p>
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

            <div className="area-img" 
              style={index % 2 !== 0 ? { paddingLeft: '30px' } : { paddingLeft: '' }}
              data-aos={index % 2 !== 0 ? "fade-left" : "fade-right"}
              >
              <img src={item.flickr_images[0]} alt="Imagem do modelo de foguete" />
            </div>
          </div>
        ))}
    </div>
  )
}

export default Rockets