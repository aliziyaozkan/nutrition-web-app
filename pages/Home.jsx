import React from 'react'
import '../styles/home.css'
import { Link } from 'react-router'

function Home() {
  return (
    <div>
      <img className='poster' src='./src/images/poster.jpg'/>
      <h1 className='letter'> <label className='lab'>
      Nasıl beslenmen gerektiği konusunda sürekli farklı şeyler duyuyorsun ve kafan karışıyor, değil mi?
      </label>
<label>Oysa tek isteğin sağlıklı beslenmek ve iyi bir fiziğe sahip olmak. Bu en doğal hakkın.

Sürekli diyete başlıyorsun ama pes edip kendini suçluyorsun. Sorun düşündüğün gibi "iradesiz olman" değil.Kalorini hesapla ve
kendine uygun bir diyet seçip hedeflerine ulaş!😇</label>
 </h1>
      <Link to='/kalori-hesabi' className='home-button'> Kalori Hesapla </Link>

      <div className='main'>

      <div className="diets-card">
      <Link to="/diyetler" className="diets-link">
        <h2 className="diets-title">Diyetler</h2>
      </Link>

      <div className="content">
        <img src="/src/images/dietcard.jpg" alt="Diyet Resmi" className="image" />
        <h3 className="card-description">
        Obezitenin tüm dünya üzerinde yaygın bir halk sorunu olması nedeniyle diyet kavramı artık hayatın bir parçası haline gelmiştir. Oysaki diyet kavramına sadece kilo verdiren beslenme düzeni olarak yaklaşmak hatadır. Daha sağlıklı, enerjik ve iyi hissetmek ya da spordan aldığınız verimi artırmak için diyet yapabilirsiniz.
        <Link to='diyetler' className='card-button' >İncele</Link>
        </h3>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Home