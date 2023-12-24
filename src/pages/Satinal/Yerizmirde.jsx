import React from "react";
import Navbardark from "../../components/Navbardark";
import Footer from "../../components/Footer";
import "./Yerizmirde.css"

function Yerizmirde() {
  return (
    <div>
      <Navbardark />
      <div className="usttaraf">
      <h5>Etkinlik Açıklaması</h5>
      <p>
         Yayınladıkları şarkılarla geniş kitlelere ulaşmayı
        başaran, Alternatif Pop müziğinin güçlü ikilisi ‘Perdenin Ardındakiler’
        yeni albümleri sonrasında gerçekleştirecekleri konser serisi ile
        dinleyicileriyle buluşuyor.
      </p>
      </div>
      <div>
        burasi izmirden satin alınabilecek biletleri gösterir
        useReducerla daha sonra güncelenicek sepet oluşturulucak
      </div>
      <Footer/>
    </div>
  );
}

export default Yerizmirde;
