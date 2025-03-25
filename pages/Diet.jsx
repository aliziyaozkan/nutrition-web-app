import React from 'react';
import '../styles/diet.css';

function Diet() {
  return (
    <div className="diet-page">
      <div className="main-title">
        <h1>İşte Popüler Diyetler! 😋</h1>
      </div>
      <div className="card">
        <div className="card-image">
          <img className="card-ic" src="/src/images/ketol.jpg" alt="Ketojenik Diyet" />
        </div>
        <div className="card-content">
          <h1 className="card-title">Ketojenik Diyet 🥩</h1>
          <p className="card-description">
            Ketojenik diyet, yüksek miktarda yağ, orta miktarda protein ve düşük miktarda karbonhidrat içeren bir diyet şeklidir. 
            Bu diyetin amacı, vücutta ketonların üretimini artırmak ve bu sayede vücutta yağların enerji olarak kullanılmasını sağlamaktır.
          </p>
          <div className="pros-cons">
            <div className="pros">
              <h2>Artıları</h2>
              <ul>
                <li>✔️ İnsülin seviyesinin ve kan şekerinin dengede tutulması</li>
                <li>✔️ Kilo kaybını desteklemesi</li>
                <li>✔️ Enerji seviyesini artırması</li>
              </ul>
            </div>
            <div className="cons">
              <h2>Eksileri</h2>
              <ul>
                <li>❌ Karbonhidrat eksikliğinden dolayı enerji düşüklüğü</li>
                <li>❌ Uzun vadede sürdürülebilir olmaması</li>
                <li>❌ Besin çeşitliliğinin azalması</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        {/****** CARD 2 */}

        <div className="card">
        <div className="card-image">
          <img className="card-ic" src="/src/images/fasting.jpg" alt="Aralıklı Oruç Diyeti" />
        </div>
        <div className="card-content">
          <h1 className="card-title">Aralıklı Oruç (Intermittent Fasting) Diyeti</h1>
          <p className="card-description">
            Aralıklı oruç diyeti, belirli zaman dilimlerinde yemek yemeyi ve diğer zamanlarda oruç tutmayı içeren bir beslenme düzenidir. 
            Bu diyetin amacı, vücudu dinlendirmek ve metabolizmayı hızlandırarak kilo kaybını desteklemektir.
          </p>
          <div className="pros-cons">
            <div className="pros">
              <h2>Artıları</h2>
              <ul>
                <li>✔️ Metabolizmayı hızlandırabilir</li>
                <li>✔️ Hücresel onarımı destekler</li>
                <li>✔️ Kilo kaybını teşvik eder</li>
                <li>✔️ Kan şekeri seviyelerini düzenleyebilir</li>
              </ul>
            </div>
            <div className="cons">
              <h2>Eksileri</h2>
              <ul>
                <li>❌ Başlangıçta açlık hissi yaratabilir</li>
                <li>❌ Enerji düşüklüğüne neden olabilir</li>
                <li>❌ Herkes için uygun olmayabilir (örneğin, diyabet hastaları)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/******* CARD 3 */}
      <div className="card">
        <div className="card-image">
          <img className="card-ic" src="/src/images/vegan.webp" alt="Vegan Diyeti" />
        </div>
        <div className="card-content">
          <h1 className="card-title">Vegan Diyeti 🌱</h1>
          <p className="card-description">
            Vegan diyeti, hayvansal ürünlerin tamamen dışlandığı, yalnızca bitkisel kaynaklı besinlerin tüketildiği bir beslenme şeklidir. 
            Bu diyet, çevresel sürdürülebilirlik, hayvan hakları ve sağlık gibi nedenlerle tercih edilmektedir.
          </p>
          <div className="pros-cons">
            <div className="pros">
              <h2>Artıları</h2>
              <ul>
                <li>✔️ Kolesterol ve doymuş yağ oranının düşük olması</li>
                <li>✔️ Lif açısından zengin olması</li>
                <li>✔️ Çevresel sürdürülebilirliğe katkı sağlaması</li>
                <li>✔️ Kalp sağlığını desteklemesi</li>
              </ul>
            </div>
            <div className="cons">
              <h2>Eksileri</h2>
              <ul>
                <li>❌ B12 vitamini eksikliği riski</li>
                <li>❌ Protein ve demir alımının yetersiz olabilmesi</li>
                <li>❌ Planlama gerektirmesi (dengeli beslenme için)</li>
                <li>❌ Bazı besinlerin sınırlı olması</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/******** CARD 4 */}
      <div className="card">
        <div className="card-image">
          <img className="card-ic" src="/src/images/carnivore.jpeg" alt="Carnivore Diyeti" />
        </div>
        <div className="card-content">
          <h1 className="card-title">Carnivore Diyeti 🥩</h1>
          <p className="card-description">
            Carnivore diyeti, yalnızca hayvansal ürünlerin tüketildiği, bitkisel gıdaların tamamen dışlandığı bir beslenme şeklidir. 
            Bu diyet, yüksek protein ve yağ alımıyla enerji sağlamayı hedefler.
          </p>
          <div className="pros-cons">
            <div className="pros">
              <h2>Artıları</h2>
              <ul>
                <li>✔️ Basit ve takip edilmesi kolay bir diyet</li>
                <li>✔️ Yüksek protein alımı ile kas gelişimini destekler</li>
                <li>✔️ Karbonhidrat alımını sıfıra indirerek kan şekeri seviyelerini dengeleyebilir</li>
              </ul>
            </div>
            <div className="cons">
              <h2>Eksileri</h2>
              <ul>
                <li>❌ Lif eksikliği nedeniyle sindirim sorunlarına yol açabilir</li>
                <li>❌ Uzun vadede vitamin ve mineral eksiklikleri riski</li>
                <li>❌ Çeşitlilik eksikliği nedeniyle sürdürülebilir olmayabilir</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/********** CARD 5 */}
      <div className="card">
        <div className="card-image">
          <img className="card-ic" src="/src/images/medi.webp" alt="Akdeniz Diyeti" />
        </div>
        <div className="card-content">
          <h1 className="card-title">Akdeniz Diyeti 🥗</h1>
          <p className="card-description">
            Akdeniz diyeti, sebzeler, meyveler, tam tahıllar, zeytinyağı ve balık gibi sağlıklı gıdaların tüketimine dayalı bir beslenme şeklidir. 
            Bu diyet, kalp sağlığını desteklemesi ve uzun ömür sağlamasıyla bilinir.
          </p>
          <div className="pros-cons">
            <div className="pros">
              <h2>Artıları</h2>
              <ul>
                <li>✔️ Kalp sağlığını destekler</li>
                <li>✔️ Antioksidan açısından zengin besinler içerir</li>
                <li>✔️ Uzun vadede sürdürülebilir bir diyet</li>
                <li>✔️ Çeşitli ve dengeli beslenme sağlar</li>
              </ul>
            </div>
            <div className="cons">
              <h2>Eksileri</h2>
              <ul>
                <li>❌ Bazı insanlar için maliyetli olabilir</li>
                <li>❌ Kilo kaybı için daha yavaş sonuçlar verebilir</li>
                </ul>
                </div>
          </div>
        </div>
      </div>
              


    </div>
  );
}

export default Diet;