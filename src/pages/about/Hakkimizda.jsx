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
            <h2>Hakkımızda</h2>
              <p>
                Bilet Zero olarak eğlence sektörünü yüksek teknolojiyle birleştirerek, organizatörlere ve katılımcılara unutulmaz deneyimler sunan bir bilet satış platformuyuz. Konserlerden festivallere, tiyatro gösterilerinden kurumsal etkinliklere kadar geniş bir yelpazede, herkesin ilgi alanına uygun etkinliklere erişimini sağlamak için çaba sarf ediyoruz.
            </p>
            <h6>Organizatörler İçin</h6>
            <p> •	Etkinliklerinizi planlamayı ve biletlerinizi satmayı kolaylaştırmak için organizasyonunuza özel sayfalar sunuyoruz.
            </p>
            <p>  •	Yapay zekâ araçlarımız sayesinde; etkinlik yönetimi, reklam stratejileri ve pazarlama bütçeleri, gibi alanlarda size destek oluyoruz.
            </p>
            <p>•	Detaylı raporlama ve analiz araçları ile etkinliklerinizi daha iyi anlamanıza yardımcı oluyoruz.</p>
            <h6>Katılımcılar İçin</h6>
            <p>
              •	Kullanıcı dostu ara yüzlerimiz sayesinde ve sayısız güvenli ödeme seçeneklerimizle kolayca bilet satın almanızı sağlıyoruz.
            </p>
            <p>•	Etkinliklere özel sayfalarımız aracılığıyla detaylı bilgi sunarak, deneyiminizi önceden planlamanıza yardımcı oluyoruz.</p>
            <h6>Topluma Katkı ve Değişim</h6>
            <p>
              Eğlence sektöründeki deneyimimizle, topluma ve etkinlik dünyasına teknolojinin getirilerini taşıyarak, herkes için unutulmaz anlar yaratmaya devam ediyoruz. Sanatın, kültürün ve eğlencenin erişilebilirliğini artırarak, değer katmayı amaçlıyoruz.
            </p>
            <h6>Sizlerle İlerliyoruz</h6>
            <p>Bilet Zero olarak, organizatörler ve katılımcılar için etkinlik dünyasını teknolojinin getirdiği olanaklarla buluşturarak, deneyimlerinizi daha etkileyici hale getirmek ve herkese unutulmaz anlar yaşatmak için buradayız. Sizlerle birlikte büyümek, etkinlik dünyasına yön vermek ve teknolojinin getirdiği değişimi en iyi şekilde kullanmak için buradayız.</p>
          </div>
        </div>

        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default about;
