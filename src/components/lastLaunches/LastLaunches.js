import React from 'react'
import '../nextLaunches/NextLaunches.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'


const LastLaunches = () => {
  const [pastLaunches, setPastLaunches] = React.useState([])
  const [numberPastLaunches, setNumberPastLaunches] = React.useState(2)
  const [statusBtnHide, setStatusBtnHide] = React.useState(false)

  React.useEffect(() => {
    const url = `https://api.spacexdata.com/v4/launches/past`

    axios.get(url).then((res) => {
      let dataReverse = res.data.reverse()
      setPastLaunches(dataReverse)
    })
  }, [])

  const sliceItems = pastLaunches.slice(0, numberPastLaunches)

  const loadMore = () => {
    setNumberPastLaunches(numberPastLaunches + numberPastLaunches)
  }

  const hideItems = () => {
    setStatusBtnHide(false)
    setNumberPastLaunches(2)
  }

  React.useEffect(() => {
    if (sliceItems.length !== 0 && sliceItems.length == pastLaunches.length) {
      setStatusBtnHide(true)
    }
  }, [numberPastLaunches])

  return (
    <div id="lauches">
      <h1>Últimos Lançamentos:</h1>
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

export default LastLaunches