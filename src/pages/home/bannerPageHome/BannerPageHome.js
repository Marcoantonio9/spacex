import './BannerPageHome.scss'

const BannerPageHome = () => {
  return (
    <div className='banner'>
      <div className='area-txt-banner'>
        <h1>
          Fique por dentro dos
          <br></br>
          próximos lançamentos!
        </h1>
        <p className='text-banner'>
          O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. 
          O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, 
          quando uma misturou os caracteres de um texto para criar um espécime de livro.
        </p>

        <button className='btn-saiba'>
          Saiba Mais
        </button>
      </div>

      <div className='area-astro-img'>
        <img src='/images/astro3.png' />
      </div>
    </div>
  )
}

export default BannerPageHome