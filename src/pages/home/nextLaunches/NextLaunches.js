import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './NextLaunches.scss'

const NextLaunches = () => {
  const [nextLauches, setNextLauches] = React.useState([])
  const [numberNextLauches, setNumberNextLauches] = React.useState(2)
  const [statusBtnHide, setStatusBtnHide] = React.useState(false)
  
  React.useEffect(() => {
    const url = 'https://api.spacexdata.com/v4/launches/upcoming/'

    axios.get(url).then((res) => {      
      setNextLauches(res.data)            
    })
  }, [])

  const sliceItems = nextLauches.slice(0, numberNextLauches)

  const loadMore = () => {
    setNumberNextLauches(numberNextLauches + numberNextLauches)    
  }

  const hideItems = () => {
    setStatusBtnHide(false)
    setNumberNextLauches(2)
  }

  React.useEffect(() => {    
    if(sliceItems.length != 0 && sliceItems.length == nextLauches.length){
      setStatusBtnHide(true)
    }
  }, [numberNextLauches])

  return (
    <div id="lauches">
      <h1>Próximo Lançamento: </h1>
      {sliceItems.map((item, index) => (        
        <div className="area-cards-lauches" key={index}>
          <div className="infos-cards">
            <h2>Nome: {item.name}</h2>
            <h2>Data: {new Date(item.date_local).toLocaleDateString()}</h2>
          </div>

          <div className="area-btn-cards">
            <Link to={`/detalhes/${item.id}`}>
              <button>Ver Detalhes</button>
            </Link>
          </div>
        </div>
      ))}
      
      <div className="area-btn-load">
        {statusBtnHide == false ? 
          <button className="btn-load" onClick={loadMore}>Carregar mais</button> 
          : 
          <button className="btn-load" onClick={hideItems}>Ocultar</button>
        }
      </div>
    </div>
  )
}

export default NextLaunches