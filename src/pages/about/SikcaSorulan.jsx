import React from "react";
import Navbardark from "../../components/Navbardark";
import Sidebar from "./Sidebar";
import Footer from "../../components/Footer";

function about() {
  return (
    <div>
      <div>
        <Navbardark />
      </div>
      <div className="container" style={{ display: "flex" }}>
        <div className="col-sm-4">
          <Sidebar />
        </div>
        <div className="col-sm-8" style={{ marginTop: "2rem" }}>
          <div class="step1">
            <div class="step2">
              <h2>Sıkça Sorulan Sorular</h2>
              <h6>
                Satın almış olduğum biletlerle ilgili e-posta ya da sms gelmedi,
                ne yapmalıyım?
              </h6>
              <p>
                Öncelikle kutusunda e-postamızı bulamıyorsanız, gereksiz
                kutusunu da kontrol ediniz. Eğer gereksiz kutusunda da yok ise
                info@biletzero.com adresinden bizlere ulaşabilirsiniz.
              </p>
              <h6>
                İnternet sitesi üzerinden yapılan alışverişlerde zamanla ilgili
                olan 10 dakikalık kısıtlama neden uygulanıyor?
              </h6>
              <p>
                Bu süre bilet satın almak isteyen başka insanların hakkını
                korumak için uygulanmaktadır. Biletleri sepetine atan kişi 10 dk
                içerisinde satın alma işlemini tamamlamazsa seçilmiş olan
                biletler sepetten otomatik olarak düşer ve tekrar satışa
                sunulur.
              </p>
              <h6>
                Farklı etkinlikler için aynı işlem içerisinde bilet alabilir
                miyim yoksa ayrı ayrı işlemler mi yapmalıyım?
              </h6>
              <p>
                Hayır, aynı işlem içerisinde farklı etkinlikler için bilet
                alamazsınız. Ayrı işlemeler yapmanız gerekir.
              </p>
              <h6>Müşteri hizmetlerine nasıl ulaşabilirim?</h6>
              <p>info@biletzero.com e-posta adresinden bize ulaşabilirsiniz.</p>
              <h6>Hangi kredi kartlarını kullanabilirim?</h6>
              <p>
                Master – Visa Kredi kartları, Sanal kartlar, Debit özellikli
                banka kartlarını kullanabilirsiniz. Kartınızın internet
                alımlarına ve 3D Secure işlemlerine açık olması gereklidir
              </p>
              <h6>
                Yanlış tarihe / Yanlış etkinliğe bilet aldım ne yapabilirim?
              </h6>
              <p>
                Bilet satın almadan önce lütfen sepet içeriğinizi tekrar tekrar
                gözden geçiriniz. Biletleme işlemi tamamlandıktan sonra
                biletinizin iptal-iade ve değişim kurallarını öğrenmek için
                'Müşteri Hizmetleri' ekibimize ulaşmanızı veya 'Etkinlik
                Kuralları' bölümünden kontrol etmenizi rica ederiz.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default about;
