import React from "react";
import Navbardark from "../../components/Navbardark";
import Sidebar from "./Sidebar";
import Footer from "../../components/Footer";

function about() {
  return (
    <div >
      <div>
        <Navbardark />
      </div>
      <div className="container" style={{display:"flex"}}>
        <div className="col-sm-4">
          <Sidebar />
        </div>
        <div className="col-sm-8" style={{marginTop:"2rem"}}>
        <div class="step1">
          <div class="step2">
            <h2>Üyelik Sözleşmesi</h2>
              <p>
                "Ödeme" butonuna tıklayarak ilan edilen bilgi ve koşulları kabul etmiş olursunuz. Kredi kartı ile yapılan ödeme online olarak ilgili banka tarafından Bilet Zero sistemi üzerinden yapılmaktadır. Sistemimiz “256 bit SSL Sertifikası” ile güvenlik kapsamındadır. Ödeme işlemini onayladıktan sonra bankanın işleminizi onaylaması zaman alabilir. Söz konusu sistemin herhangi bir sorun nedeniyle işlemi gerçekleştirememesi durumunda ödeme sayfası sonucunda ziyaretçimiz bu durumdan haberdar edilmektedir. Ödeme yapıldıktan sonra; siparişleriniz iptal edilemez ve değiştirilemez. Bu nedenle lütfen sepetinizin içeriğini kontrol edip içeriğinden emin olduktan sonra işleminizi onaylayınız. Gün ve saatte kullanılmayan biletler geçersiz olup, iade yapılması ve/veya bilet fiyatı ve hizmet bedelinin değiştirilmesi mümkün değildir. Gün ve saatte kullanılmayan biletlerin iadesi için Biler Zero’ dan talepte bulunulamaz. Etkinlik iptalinden firmamız hiçbir şekilde sorumlu değildir. Ancak etkinliğin iptali veya etkinlik tarihinin ertelenmesi gibi bilgiler, bilet satın alırken kaydettiğiniz telefon numaranız veya e-posta adresiniz aracılığıyla tarafınıza duyurulacaktırAyrıca etkinliklerin beklenen kalitesinin garantisi yoktur. Bilet satışlarında belirlenen hizmet ücretleri; Biletin satıldığı yerdeki organizatörle yapılan sözleşmelerde belirlenir. Biletin satın alındığı etkinliklerde hizmet bedeli bilet bedelinden tahsil edilir veya bilet fiyatına eklenir. Bilet satın alırken, varsa bu ücretleri bilet fiyatı üzerinden ödemeyi kabul edersiniz. Bilet satın alma işlemi sırasında adınız, adresiniz, telefon numaranız, e-posta adresiniz, iletişim tercihleriniz gibi çeşitli bilgileri toplayabiliriz. Bizimle rızanız alınarak paylaşacağınız bu bilgiler başka hiçbir kişi veya şirketle paylaşılmayacak, yalnızca ilgi alanlarınıza yönelik haber ve etkinlikleri sunmak, sitemizdeki yenilik ve etkinliklerden sizi haberdar etmek amacıyla kullanılacaktır. Amacımız sizlere kaliteli ve güvenli hizmet sunmaktır. Görüş ve önerilerinizi info@biletzero.com e-posta adresimiz üzerinden bize iletebilirsiniz.
            </p>
            
          </div>
        </div>

        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default about;
