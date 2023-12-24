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
              <h2>Çerez Politikası</h2>
              <p>
                Biz, Bilet Zero, olarak güvenliğinize önem veriyor ve bu Çerez
                Politikası ile siz sevgili ziyaretçilerimizi, web sitemizde
                hangi çerezleri, hangi amaçla kullandığımız konularında kısaca
                bilgilendirmeyi hedefliyoruz. Sizlere daha iyi hizmet verebilmek
                adına, çerezler vasıtasıyla, ne tür kişisel verilerinizin hangi
                amaçla toplandığı ve nasıl işlendiği konularında, kısaca bilgi
                sahibi olmak için lütfen bu Çerez Politikasını okuyunuz.
              </p>
              <h6>Çerez Nedir?</h6>
              <p>
                Çerezler, kullanıcıların web sitelerini daha verimli bir şekilde
                kullanabilmeleri adına, cihazlarına kaydedilen küçük
                dosyacıklardır. Çerezler vasıtasıyla kullanıcıların bilgilerinin
                işleniyor olması sebebiyle, 6698 sayılı Kişisel Verilerin
                Korunması Kanunu gereğince, kullanıcıların bilgilendirilmeleri
                ve onaylarının alınması gerekmektedir. Bizler de siz sevgili
                ziyaretçilerimizin, web sitemizden en verimli şekilde
                yararlanabilmelerini ve siz sevgili ziyaretçilerimizin kullanıcı
                deneyimlerinin geliştirilebilmesini sağlamak adına, çeşitli
                çerezler kullanmaktayız.
              </p>
              <h6>1. Zorunlu Çerezler</h6>
              <p>
                Zorunlu çerezler, web sitesine ilişkin temel işlevleri
                etkinleştirerek web sitesinin kullanılabilir hale gelmesini
                sağlayan çerezlerdir. Web sitesi bu çerezler olmadan düzgün
                çalışmaz.
              </p>
              <h6>2. Performans Çerezleri</h6>
              <p>
                Performans çerezleri, ziyaretçilerin web sitesine ilişkin
                kullanım bilgilerini ve tercihlerini anonim olarak toplayan ve
                bu sayede web sitesinin performansının geliştirilmesine olanak
                sağlayan çerezlerdir.
              </p>
              <h6>3. Fonksiyonel Çerezler</h6>
              <p>
                Fonksiyonel çerezler, kullanıcıların web sitesine ilişkin geçmiş
                kullanımlarından yola çıkılarak gelecekteki ziyaretlerinde
                tanınmalarını ve hatırlanmalarını sağlayan ve bu sayede web
                sitelerinin kullanıcılara dil, bölge vb. gibi kişiselleştirilmiş
                bir hizmet sunmasına olanak tanıyan çerezlerdir.
              </p>
              <h6>4. Reklam Çerezleri</h6>
              <p>
                Reklam çerezleri, üçüncü taraflara ait çerezlerdir ve web
                sitelerinde ziyaretçilerin davranışlarını izlemek için
                kullanılırlar. Bu çerezlerin amaçları, ziyaretçilerin
                ihtiyaçlarına yönelik ilgilerini çekecek reklamların
                gösterilmesine yardımcı olmaktır ve sorumluluğu çerez sahibi
                üçüncü taraflara aittir.
              </p>
              <h6>Çerezler İle İşlenen Kişisel Veriler Nelerdir?</h6>
              <p>
                Kimlik (isim, soy isim, doğum tarihi vb.) ve iletişim (adres,
                e-posta adresi, telefon, IP, konum vb.) bilgileriniz
                tarafımızca, çerezler (cookies) vasıtasıyla, otomatik veya
                otomatik olmayan yöntemlerle ve bazen de analitik sağlayıcılar,
                reklam ağları, arama bilgi sağlayıcıları, teknoloji
                sağlayıcıları gibi üçüncü taraflardan elde edilerek,
                kaydedilerek, depolanarak ve güncellenerek, aramızdaki hizmet ve
                sözleşme ilişkisi çerçevesinde ve süresince, meşru menfaat
                işleme şartına dayanılarak işlenecektir.
              </p>
              <h6>Çerezler Hangi Amaçla Kullanılmaktadır?</h6>
              <p>
                Web sitemizde, şüpheli eylemlerin tespiti yoluyla güvenliğin
                sağlanması, kullanıcıların tercihleri doğrultusunda işlevsellik
                ve performansın artırılması, ürünlerin ve hizmetlerin
                geliştirilmesi ve kişiselleştirilmesi ile bu hizmetlere ulaşımın
                kolaylaştırılması, sözleşmesel ve hukuki sorumlulukların yerine
                getirilmesi amaçlı çerezler kullanmaktadır. Ayrıca
                kullanıcıların daha geniş kapsamlı hizmet sağlayıcılar ile
                buluşturulabilmesi amacıyla reklam çerezleri ve üçüncü
                taraflarla bilgi paylaşımı da söz konusudur.
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
