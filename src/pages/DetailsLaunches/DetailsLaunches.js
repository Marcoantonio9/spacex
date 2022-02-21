import React from 'react'
import './DetailsLaunches.scss'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'

const DetaisLaunches = () => {
  const { id } = useParams()
  const [objitem, setObjItem] = React.useState({})
  const [img, setImg] = React.useState('')

  React.useEffect(() => {
    const url = `https://api.spacexdata.com/v4/launches/${id}`

    axios.get(url).then((res) => {
      setObjItem(res.data)
      setImg(res.data.links.patch.small)
    })
  }, [])
  return (
    <div id="details-launches">
      <h1>Nome: {objitem.name}</h1>
      <h1>Data: {new Date(objitem.date_local).toLocaleDateString()}</h1>
      <div className="area-details-status">
        <span className="first_span">Status da missão:</span>
        {objitem.success == true &&
          <span style={{ color: 'green' }}>Sucesso</span>
        }
        {objitem.success == false &&
          <span style={{ color: 'red' }}>Sem Sucesso</span>
        }
        {objitem.success == null &&
          <span>Sem Informação</span>
        }
      </div>
      {img !== null ?
        <img src={img} />
        :
        <p>Imagem não encontrada.</p>
      }

      {objitem.details !== null ?
        <p>{objitem.details}</p>
        :
        <p>Não foi encontrado mais informações.</p>
      }

      <Link to="/">
        <button>Voltar</button>
      </Link>
    </div>
  )
}

export default DetaisLaunches