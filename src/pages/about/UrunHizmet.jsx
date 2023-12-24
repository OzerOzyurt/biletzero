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
              <h2>Ürün/Hizmet Alanlara Yönelik Aydınlatma Metni</h2>
              <h6>1. AMAÇ</h6>
              <p>
                6698 sayılı Kişisel Verilerin Korunması Kanunu’nun (“KVKK”) 10.
                maddesine istinaden, ilgili kişinin kişisel verilerinin işlenme
                süreçleri, üçüncü kişilere aktarılması, toplanma yöntemleri,
                hukuki sebepleri ve KVKK’nın 11. maddesinde yer alan hakları
                konularında; : Bilet Zero ’nun (“Veri Sorumlusu”, “Şirket”)
                ilgili kişileri bilgilendirme yükümlülüğü bulunmaktadır.
              </p>
              <h6>2. KAPSAM</h6>
              <p>
                İşbu Ürün/Hizmet Alanlara Yönelik Aydınlatma Metni (“Aydınlatma
                Metni”), ürün/hizmet alan kişilerin kişisel verilerin
                işlenmesine yönelik bilgilendirmeyi kapsamaktadır.
              </p>
              <h6>3. TANIMLAR VE GENEL BİLGİLER</h6>
              <p>
                KVKK, 6698 sayılı Kişisel Verilerin Korunması Kanunu’nu ifade
                eder. Kişisel veri, kimliği belirli veya belirlenebilir gerçek
                kişiye ait her türlü bilgiyi ifade eder. Bu kapsamda isim, soy
                isim, telefon numarası, e-posta adresi gibi kişiyi tanımlayan
                tüm bilgiler kişisel veridir. Kişisel verilerin işlenmesi,
                kişisel verilerin tamamen veya kısmen otomatik olan ya da
                herhangi bir veri kayıt sisteminin parçası olmak kaydıyla
                otomatik olmayan yollarla elde edilmesi, kaydedilmesi,
                depolanması, muhafaza edilmesi, değiştirilmesi, yeniden
                düzenlenmesi, açıklanması, aktarılması, devralınması, elde
                edilebilir hâle getirilmesi, sınıflandırılması ya da
                kullanılmasının engellenmesi gibi veriler üzerinde
                gerçekleştirilen her türlü işlemi ifade eder. Bu kapsamda
                örneğin bilgilerinizin bilet alımı, iadesi, iptali, değişikliği,
                kantin alışverişi vb. süreçlerde işlenmesi bir veri işlemedir.
                Veri Sorumlusu, kişisel kişisel verilerin işleme amaçlarını ve
                vasıtalarını belirleyen, veri kayıt sisteminin kurulmasından ve
                yönetilmesinden sorumlu olan gerçek veya tüzel kişiyi ifade
                eder. Şirketimiz, Veri Sorumluları Sicil Bilgi Sistemi’ne “Bilet
                Zero” ismiyle kayıtlıdır. İlgili kişi, kişisel verisi işlenen
                gerçek kişiyi ifade eder. Kişisel verilerin ilgili kişinin açık
                rızası bulunmaksızın işlenmesi yasaktır (“m.5/1”). Ancak
                kanunlarda açıkça öngörülmesi (“m.5/2-a”), fiili imkânsızlık
                nedeniyle rızasını açıklayamayacak durumda bulunan veya rızasına
                hukuki geçerlilik tanınmayan kişinin kendisinin ya da bir
                başkasının hayatı veya beden bütünlüğünün korunması için zorunlu
                olması (“m.5/2-b”), bir sözleşmenin kurulması veya ifasıyla
                doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına
                ait kişisel verilerin işlenmesinin gerekli olması (“m.5/2-c”),
                veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için
                zorunlu olması (“m.5/2-ç”), bir hakkın tesisi, kullanılması veya
                korunması için veri işlemenin zorunlu olması (“m.5/2-e”) veya
                ilgili kişinin temel hak ve özgürlüklerine zarar vermemek
                kaydıyla, veri sorumlusunun meşru menfaatleri için veri
                işlenmesinin zorunlu olması (“m.5/2-f) hallerinde ilgili kişinin
                açık rızasına başvurulmaz. Özel nitelikli kişisel verilerin de
                ilgilinin açık rızası olmaksızın işlenmesi yasaktır (“m. 6/2”).
                Ancak sağlık ve cinsel hayat dışındaki özel nitelikli kişisel
                veriler, kanunlarda öngörülen hâllerde ilgili kişinin açık
                rızası aranmaksızın işlenebilir. Sağlık ve cinsel hayata ilişkin
                kişisel veriler ise ancak kamu sağlığının korunması, koruyucu
                hekimlik, tıbbî teşhis, tedavi ve bakım hizmetlerinin
                yürütülmesi, sağlık hizmetleri ile finansmanının planlanması ve
                yönetimi amacıyla, sır saklama yükümlülüğü altında bulunan
                kişiler veya yetkili kurum ve kuruluşlar tarafından ilgilinin
                açık rızası aranmaksızın işlenebilir (“m. 6/3”). Bu kapsamda,
                veri işleme hukuki sebeplerinin (örneğin m. 5/2 ve m. 6/3)
                varlığı halinde kişisel verilerin işlenmesi, ilgili kişinin açık
                rızasına tabi değildir.
              </p>
              <h6>4. AYDINLATMA METNİ</h6>
              <h6>
                4.1. Bilgilendirme:Aydınlatma metni başlığında; hangi
                bilgilerinizin a) ne amaçla, b) kimlere ve hangi amaçla
                aktarılabileceği, c) toplama yöntemi ve hukuki sebebi
                konularında tarafınıza bilgi verilecektir. Buna ek olarak
                KVKK’dan doğan haklarınız ve şirketimizin iletişim bilgileri
                konusunda tarafınıza hatırlatma yapılacaktır.
              </h6>
              <h6>
                4.2. Şirketimiz Bünyesinde İşlenen Kişisel Veriler Nelerdir?
              </h6>
              <h6>1-Kimlik</h6>
              <p>
                Ad soyadı ve özel etkinliklerde organizasyon sahibinin talebine
                istinaden kimlik numarası (örneğin kamu kurumları tarafından
                organize edilen bazı etkinliklerde kimlik numarası, ilgili kamu
                kurumu tarafından istenmektedir). Ayrıca yine, kurumsal fatura
                istenmesi halinde vergi kimlik veya T.C. kimlik numarası talep
                edilmektedir.
              </p>
              <h6>2-İletişim</h6>
              <p>Telefon numarası, e-posta adresi, adres.</p>
              <h6>3-Lokasyon</h6>
              <p>Tercih edilen etkinlik lokasyonu (il/ilçe gibi).</p>
              <h6>4-Özlük</h6>
              <p>
                Kurumsal fatura düzenlenmesi durumunda çalışılan kuruma ilişkin
                bilgiler, indirimli satın alımlarda indirimi sağlayan belge
                (örneğin öğrenci belgesi gibi) görseli.
              </p>
              <h6>5-Hukuki işlem</h6>
              <p>
                Adli makamlarla yazışmalardaki bilgiler, dava dosyasındaki
                bilgiler gibi.
              </p>
              <h6>6-Müşteri işlem</h6>
              <p>
                Çağrı merkezi kayıtları, fatura/dekont/makbuz bilgileri,
                etkinlik bilgileri (etkinlik adı, saati, tarihi, koltuk
                numarası, müşteri numarası bilgileri vb.), talep/şikayet
                bilgileri gibi.
              </p>
              <h6>7-Fiziksel mekân güvenliği</h6>
              <p>Kamera kayıtları.</p>
              <h6>8-İşlem Güvenliği</h6>
              <p>
                Elektronik bir şekilde gerçekleştirilen işlemlerde kullanılan
                doğrulama veya güvenlik kodu ile elektronik işlem hareketleri
                (IP adresi, cihaz, internet sitesi giriş – çıkış bilgileri,
                şifre ve parola bilgileri, internet sitesi üzerinden
                gerçekleştirilen alım/iptal/değişiklik/iade hareketleri gibi).
              </p>
              <h6>9-Finans</h6>
              <p>
                Fatura/dekont/makbuzda yer alan ödeme bilgileri, ödemenin kredi
                kartı/havale/EFT gibi yöntemler kullanılarak gerçekleştirilmesi
                durumunda kart/hesap bilgileri gibi.
              </p>
              <h6>10-Pazarlama</h6>
              <p>
                Alışveriş geçmişi bilgileri, anket, çerez kayıtları, kampanya
                çalışmasıyla elde edilen bilgiler gibi.
              </p>
              <h6>4.3. Kişisel Veriler Süreç Bazında Nasıl İşlenmektedir?</h6>
              <h6>4.3.1. Bilet İşlemleri</h6>
              <p>
                Bilet (alım, iade, iptal, değişiklik) işlemlerinde hizmet alan
                kişinin adı, soyadı, e-posta adresi, telefon numarası, etkinlik
                bilgileri, ödeme ve maskeli bir şekilde kredi kartı bilgileri;
                KVKK m. 5/2-c, ç ve e kapsamında organizasyon ve etkinlik
                yönetimi, faaliyetlerin mevzuata uygun yürütülmesi, finans ve
                muhasebe işlemlerinin yürütülmesi, iletişim faaliyetlerinin
                yürütülmesi, iş faaliyetlerinin yürütülmesi / denetimi, iş
                sürekliliğinin sağlanması faaliyetlerinin yürütülmesi, mal /
                hizmet satış süreçlerinin yürütülmesi, mal / hizmet üretim ve
                operasyon süreçlerinin yürütülmesi, müşteri ilişkileri yönetimi
                süreçlerinin yürütülmesi, saklama ve arşiv faaliyetlerinin
                yürütülmesi, sözleşme süreçlerinin yürütülmesi, ücret
                politikasının yürütülmesi, yetkili kişi kurum veya kuruluşlara
                bilgi verilmesi amacıyla kayıt altına alınmaktadır. Bu bilgiler
                bilet satın alan kişiden gişe, uygulama kendi internet sitemiz
                veya hizmet verilen üçüncü kişi aracılığıyla dijital veya sözlü
                olarak elde edilmektedir. İndirimli bilet işlemlerinde yukarıda
                sayılan bilgilere ek olarak indirimi sağlayan belge, görsel
                olarak yetkililerimizin dikkatine KVKK m. 5/2-e kapsamında
                sunulmalıdır. Hizmet alan kişinin iletmiş olduğu iletişim
                bilgileri (telefon numarası veya e-posta adresi); KVKK m. 5/2-ç
                ve f kapsamında iletişim faaliyetlerinin yürütülmesi, bilgi
                güvenliği süreçlerinin yürütülmesi, saklama ve arşiv
                faaliyetlerinin yürütülmesi ve yetkili kişi kurum veya
                kuruluşlara bilgi verilmesi amacıyla kayıt altına alınmakta ve
                biletin satın alınması halinde etkinliğe ilişkin bilet bilgileri
                kişinin iletmiş olduğu iletişim kanallarına gönderilmektedir. Bu
                çerçevede kişinin etkinlik ve iletişim bilgileri; iletişim
                faaliyetlerinin yürütülmesi, organizasyon ve etkinlik yönetimi
                amacıyla bilet alındığında otomatik olarak SMS veya e-posta
                gönderilmek üzere destek alınan üçüncü kişiye (ileti merkezi)
                aktarılmaktadır. Ayrıca iletişim bilgilerinin iletilmesi
                durumunda, belirtilen iletişim kanalına bilgi güvenliğinin
                sağlanması amacıyla doğrulama kodu gönderilmekte ve doğrulama
                kodu ilgili kişiden istenmektedir. Bilet işleminin çevrimiçi
                ortamda (elektronik veya internet sitesi) alınması durumunda
                işlem güvenliği bilgisi (doğrulama veya güvenlik kodu ile IP,
                cihaz, kullanıcı adı, parola ve işlem hareketleri); KVKK m.
                5/2-ç ve f kapsamında bilgi güvenliği süreçlerinin yürütülmesi
                amacıyla işlenmektedir. Bilet işlemlerinde elde edilen ad,
                soyadı, e-posta adresi, telefon numarası, etkinlik bilgileri
                (koltuk numarası, PNR, etkinlik detayı gibi); organizasyon ve
                etkinlik yönetimi amacıyla organizatöre aktarılmaktadır.
              </p>
              <h6>4.3.2. Malî İşlemler</h6>
              <p>
                Bilet işleminden kaynaklı olarak; hizmet alan kişinin adı,
                soyadı, etkinlik bilgileri, ödeme, maskeli bir şekilde kredi
                kartı bilgileri, makbuz/dekont/fatura bilgileri, vergi
                kimlik/T.C. kimlik numarası; faaliyetlerin mevzuata uygun
                yürütülmesi, finans ve muhasebe işlerinin yürütülmesi, yetkili
                kişi kurum veya kuruluşlara bilgi verilmesi, saklama ve arşiv
                faaliyetlerinin yürütülmesi amacıyla KVKK m. 5/2-a, ç ve e
                kapsamında muhafaza edilmektedir. Vergisel yükümlülüklerimiz
                nedeniyle; temel kimlik, ödeme, makbuz/dekont/fatura bilgileri,
                vergi kimlik/T.C. kimlik numarası finans ve muhasebe
                işlemlerinin yürütülmesi ile bilgi verilmesi amacıyla yetkili
                kamu kurum veya kuruluşlarına (vergi dairesi) aktarılmaktadır.
                Online ödeme gerçekleştirilmesi durumunda; temel kimlik, ödeme
                (kredi kartı/hesap kartı vb.) bilgiler, finans ve muhasebe
                işlemlerinin yürütülmesi ile bilgi verilmesi amacıyla özel hukuk
                tüzel kişisi olarak bankaya aktarılmaktadır. İptal/iade
                durumlarında kişinin temel kimlik, ödeme, makbuz/dekont/fatura
                bilgileri, vergi kimlik/T.C. kimlik numarası finans ve muhasebe
                işlemlerinin yürütülmesi ile bilgi verilmesi amacıyla özel hukuk
                tüzel kişisi olarak bankaya ve yetkili kamu kurum veya
                kuruluşlarına (vergi dairesi) aktarılmaktadır. İşlenen temel
                kimlik, ödeme, makbuz/dekont/fatura bilgileri, vergi kimlik/T.C.
                kimlik numarası bilgileri, finans ve muhasebe alanında destek
                aldığımız üçüncü kişiye iş faaliyetlerinin yürütülmesi amacıyla
                aktarılmaktadır.
              </p>
              <h6>4.3.3. Üyelik İşlemleri</h6>
              <p>
                Üyelik işlemlerinde üye olacak kişinin adı, soyadı, e-posta
                adresi, telefon numarası, doğrulama kodu, oturduğu şehir ve
                parola bilgileri; firma / ürün / hizmetlere bağlılık
                süreçlerinin yürütülmesi amacıyla KVKK m. 5/1 (açık rıza)
                kapsamında ilgili kişinin kendisinden elektronik ortamda elde
                edilerek işlenmektedir. Ayrıca üyelik işleminde e-posta adresi
                ve telefon numarası bilgilerinin verilmesi durumunda, bu
                bilgiler bilgi güvenliği süreçlerinin yürütülmesi ve iletişim
                faaliyetlerinin yürütülmesi amacıyla (doğrulama kodu
                gönderilmesi) KVKK m. 5/2-ç ve f kapsamında işlenmektedir.
                Ayrıca, kullanıcının iletişim bilgileri, iletişim
                faaliyetlerinin yürütülmesi amacıyla ileti merkezine ve e-posta
                sunucularına aktarılmaktadır. Üye olmak tamamen ilgili kişinin
                isteğine bağlı olup, üye olmamak, şirketimizin yürüttüğü tüm
                hizmetlerden yararlanılmaması ile sonuçlanmaz. Ancak bazı
                etkinliklerde üye olmak, kişiye bilet önceliği kazanılması gibi
                avantajlar sağlar.
              </p>
              <h6>4.3.4. Ticari Elektronik İleti İşlemleri</h6>
              <p>
                Ticari elektronik işlemlerinde kişinin adı, soyadı, e-posta
                adresi, telefon numarası, ticari elektronik ileti tercihi ve
                doğrulama kodu bilgisi; reklam, kampanya, tanıtım veya promosyon
                süreçlerinin yürütülmesi amacıyla KVKK m. 5/1 (açık rıza)
                kapsamında ilgili kişinin kendisinden elektronik ortamda elde
                edilerek işlenmektedir. İletişim bilgilerinin alınması aynı
                zamanda bu bilgilerin doğrulanmasını gerektirdiğinden; belirtmiş
                olduğunuz e-posta adresinize veya cep telefonu numaranıza;
                ticari elektronik ileti gönderimini onaylamak ve işlem
                güvenliğini sağlamak için bağlantı veya doğrulama kodu
                gönderilecektir. Dolayısıyla belirtmiş olduğunuz iletişim
                adreslerine ve hizmet sağlayıcınıza aktarım
                gerçekleştirilecektir. (Eğer ki belirtmiş olduğunuz e-posta
                adresinizin sunucusu yurt dışında ise, bu durumda yurt dışına
                kişisel veri aktarımında bulunulacaktır. Yurt dışı kişisel veri
                aktarımına onay göstermiyor iseniz lütfen e-posta adresinizin
                sunucularının Türkiye’de konumlandırıldığından emin olunuz).
                İletişim bilgilerinizi iletmenizin ardından,tarafınıza gelen
                doğrulama kodunu kullanarak (veya görevlimize söyleyerek) ticari
                iletişim ve ticari elektronik ileti izninizi verebilirsiniz.
                Ticari iletişim ve elektronik iletilere izin vermeniz halinde
                sizlere pazarlama, kampanya, tanıtım ve promosyon amaçlı SMS
                veya e-posta gönderilmesine onay göstermiş olacaksınız.
                Onayınızı dilediğiniz zaman ve hiçbir sebep göstermeksizin geri
                çekebilir, onayınıza tabi veri işlemeyi sonlandırabilirsiniz.
                İşlemiş olduğumuz kişisel veriler; iş sürekliliğinin sağlanması
                amacıyla ileti merkezi ve e-posta sunucularına aktarılmaktadır.
                Ayrıca tercih bilgilerinin İleti Yönetim Sistemi’nde (İYS) kayıt
                altına alınması sebebiyle, bilgiler İYS’ye aktarılmaktadır. Yine
                bu bilgiler, bilgi güvenliğinin sağlanması amacıyla (doğrulama
                kodu alınması) destek alınan üçüncü kişiye aktarılmaktadır.
                Diğer yandan, yetkili kamu kurum veya kuruluşlara bilgi
                verilmesi ve hukuki yükümlülüğün yerine getirilmesi amacıyla
                yetkili kamu kurum veya kuruluşlarına (Ticaret Bakanlığı, talep
                halinde adliye birimleri, Kişisel Verileri Koruma Kurumu gibi)
                aktarım yapılabilmektedir. Son olarak, işlenen kişisel
                verileriniz normal şartlarda aktarılmamakla birlikte, hukuki bir
                işlemin tesis edilmesi ihtiyacının bulunması durumunda (örneğin
                dava açılması, savunma yapılması, resmî makamlardan bilgi/belge
                istenmesi gibi) hukuk işlerinin takibi ve yürütülmesi amacıyla
                yetkili kamu kurum ve kuruluşları (örneğin mahkeme, savcılık,
                otoriteler gibi) ile hukuk alanında hizmet aldığımız özel hukuk
                kişisine (avukat, arabulucu gibi) aktarılabilir. Ticari
                elektronik ileti izni verilmesi tamamen ilgili kişinin isteğine
                bağlı olup, ileti izni vermemek, hizmetlerimizden
                yararlanılmaması ile sonuçlanmaz. Ticari elektronik ileti izni
                vermeden de hizmetlerimizden faydalanabilirsiniz. E-bülten
                işlemleri, SMS gönderilmesi, e-posta gönderilmesi işlemleri
                ticari elektronik ileti faaliyeti kapsamında
                değerlendirilmektedir.
              </p>
              <h6>4.3.5. Kamera Kayıt İşlemleri</h6>
              <p>
                Hizmet verilen alanlarda ve çevresinde güvenlik kameraları
                aracılığıyla görüntülü kayıt yapılmaktadır. Bu kayıtlar; acil
                durum yönetimi süreçlerinin yürütülmesi, fiziksel mekan
                güvenliğinin sağlanması, hukuk işlerinin takibi ve yürütülmesi,
                risk yönetimi süreçlerinin yürütülmesi, veri sorumlusu
                operasyonlarının güvenliğinin temini amaçlarıyla KVKK m. 5/2-ç,
                e ve f kapsamında işlenmektedir. Elde edilen kayıtlar, talep
                edilmesi halinde veya hukuki bir işlemin tesis edilmesi
                durumunda yetkili kişi kurum veya kurumlara bilgi verilmesi ve
                hukuk işlerinin takibi amacıyla üçüncü kişilerle (emniyet
                güçleri, adliye birimleri, destek alınan avukat gibi)
                paylaşılabilmektedir.
              </p>
              <h6>4.3.6. İletişim / Talep / Şikayet Faaliyetleri</h6>
              <p>
                İletişim faaliyetleri, birden çok amaca hizmet edebilir. Yine,
                iletişim faaliyetlerinde iletişim içeriğine bağlı olarak
                değişebilen kişisel veriler işlenebilir. Ancak temel anlamda;
                ilgili kişinin adı, soyadı, kimlik numarası, telefon numarası,
                e-posta adresi, adresi, iletişim yazılı olarak yürütülüyor ise
                evrak numarası ve evrakın içeriğindeki diğer bilgiler, başkası
                adına iletişim kuruluyorsa vekaletname, yetki belgesi gibi
                bilgiler işlenmektedir. Bu bilgiler; iletişim faaliyetlerinin
                yürütülmesi, bilgi güvenliği süreçlerinin yürütülmesi, talep /
                şikayetlerin takibi, hukuk işlerinin takibi ve yürütülmesi, risk
                yönetimi süreçlerinin yürütülmesi, yetkili kişi kurum veya
                kuruluşlara bilgi verilmesi, iş faaliyetlerinin yürütülmesi,
                saklama ve arşiv faaliyetlerinin yürütülmesi, faaliyetlerin
                mevzuata uygun yürütülmesi amacıyla KVKK m. 5/2-a, ç, e, f
                kapsamında işlenmektedir. Bazı durumlarda kimlik doğrulaması
                yapılması (bilgi güvenliği süreçlerinin yürütülmesi) amacıyla
                kimlik belgesi örneği istenebilmektedir. İşlenen bilgiler;
                ilgili kişi, kurum kaynakları ve kurum dışı kaynaklar
                (veli/vasi/temsilci, diğer özel kurumlar, kamu kurumları,
                organizatör vb.) aracılığıyla fiziksel, dijital veya sözlü
                olarak elde edilmektedir. İşlenen bilgiler; iletişimin türüne ve
                nedenine göre değişebilmekle birlikte, üçüncü kişi olarak
                iletişimin muhatabına veya ilgilisine, iletişim faaliyetlerinin
                yürütülmesi ve yetkili kişi kurum veya kuruluşlara bilgi
                verilmesi amacıyla aktarılabilmektedir. Örneğin talep / şikayet
                sürecinin sonuçlanması için gerekli olduğu kadarıyla bilgi
                verilmesi amacıyla, hukuk işlerinin takibi ve yürütülmesi
                amacıyla, faaliyetlerin mevzuata uygun yürütülmesi amacıyla,
                talep / şikayetlerin yürütülmesi amacıyla yetkili kamu kurum
                veya kuruluşlarına ve diğer üçüncü kişilere (vekaletnamede açık
                bir şekilde yazması durumunda temsilciye veya yetkili
                veli/vasi'ye) aktarım yapılabilmektedir. Ayrıca iş
                sürekliliğinin sağlanması ve iletişim faaliyetlerinin
                yürütülmesi amacıyla e-posta sunucularına aktarım
                yapılabilmektedir.
              </p>
              <h6>4.3.7. Çağrı Merkezi İşlemleri</h6>
              <p>
                Çağrı merkezimiz aracılığıyla yaptığınız görüşmeler, hukuk
                işlemlerinin takibi ve yürütülmesi, iş faaliyetlerinin
                yürütülmesi / denetimi, risk yönetim süreçlerinin yürütülmesi,
                müşteri ilişkileri yönetim süreçlerinin yürütülmesi amaçlarıyla
                KVKK m. 5/2-e ve f kapsamında dijital olarak elde edilerek kayıt
                altına alınmaktadır. Yapacağınız görüşmelerde ad, soyadı,
                müşteri işlem bilgisi, pazarlama bilgisi gibi bilgiler yer
                aldığı takdirde söz konusu kişisel verileriniz de işlenecektir.
                Elde edilen kayıtlar, gündeme gelirse hukuk işlerinin takibi ve
                yürütülmesi amacıyla ve bilgi verilmesi amacıyla yetkili kamu
                kurum veya kuruluşlarına ve hukuk alanında hizmet alınan kişiye
                aktarılabilir. Ayrıca çağrı merkezimiz aracılığıyla bir
                talep/şikayette bulunmanız durumunda, talep/şikayete ilişkin
                bilgileriniz talep/şikayetin çözümlenmesi için gerektirdiği
                ölçüde ilgili ve yetkili üçüncü kişilerle paylaşım yapılabilir.
              </p>
              <h6>
                4.3.8. İnternet Sitesi Aracılığıyla Çerezlere Yönelik Veri
                İşlenmesi
              </h6>
              <p>
                İnternet sitemizde bulunan çerezlerle ilgili olarak, yine
                internet sitemizde çerez aydınlatma metni bulunmaktadır.
              </p>
              <h6>4.3.9. Hukuk İşlemleri</h6>
              <p>
                Şirketimizde bulunan kişisel veriler; hukuk kurallarının ihlal
                edildiğinden şüphelenilmesi halinde, üçüncü kişiler tarafından
                şirketimiz ya da iş ilişkisi içerisinde bulunduğumuz kişiler
                aleyhine dava açılması, suç duyurusunda bulunulması gibi
                durumlarda veya savunma ya da iddiada bulunulması gibi hukuki
                durumlarda hukuk işlerinin takibi ve yürütülmesi, faaliyetlerin
                mevzuata uygun yürütülmesi, yetkili kişi kurum veya kuruluşlara
                bilgi verilmesi amaçlarıyla işlenebilmekte ve aynı amaçlara ek
                olarak iş sürekliliğinin sağlanması amacıyla hukuki işlemin
                ilgili olduğu ve yetkili bulunan üçüncü kişilere, destek
                alınması sebebiyle hukuk alanında faaliyet gösteren kişilere ya
                da destek alınan kişilerin kullanmış olduğu hukukla ilgili
                yazılım ve programlara kişisel veri aktarımı yapılabilmektedir.
                Hukuk işlemlerinin yürütülmesi dahilinde kişisel veriler KVKK m.
                5/2-a, ç, e ve f kapsamında işlenmektedir. Belirtmek isteriz ki,
                kişisel verilerin millî savunmayı, millî güvenliği, kamu
                güvenliğini, kamu düzenini veya ekonomik güvenliği sağlamaya
                yönelik olarak kanunla görev ve yetki verilmiş kamu kurum ve
                kuruluşları tarafından yürütülen önleyici, koruyucu ve istihbari
                faaliyetler kapsamında işlenmesi ile kişisel verilerin
                soruşturma, kovuşturma, yargılama veya infaz işlemlerine ilişkin
                olarak yargı makamları veya infaz mercileri tarafından işlenmesi
                durumları KVKK m. 28/1 uyarınca tam istisna durumudur. Aynı
                şekilde, kişisel veri işlemenin suç işlenmesinin önlenmesi veya
                suç soruşturması için gerekli olması, kişisel veri işlemenin
                kanunun verdiği yetkiye dayanılarak görevli ve yetkili kamu
                kurum ve kuruluşları ile kamu kurumu niteliğindeki meslek
                kuruluşlarınca, denetleme veya düzenleme görevlerinin
                yürütülmesi ile disiplin soruşturma veya kovuşturması için
                gerekli olması ve kişisel veri işlemenin bütçe, vergi ve mali
                konulara ilişkin olarak Devletin ekonomik ve mali çıkarlarının
                korunması için gerekli olması durumları KVKK m. 28/2 uyarınca
                kısmî istisna halini oluşturmaktadır.
              </p>
              <h6>
                4.4. İlgili Kişinin Hakları Nelerdir? Bu Haklar Nasıl
                Kullanılabilir?
              </h6>
              <p>
                İlgili kişinin hakları, 6698 sayılı Kanun’un 11. Maddesinde yer
                almaktadır. Bu madde kapsamındaki haklarınızı Veri Sorumlusuna
                Başvuru Usul ve Esasları Hakkında Tebliğ’e uygun bir şekilde
                tarafımıza başvuruda bulunarak kullanabilirsiniz. İnternet
                sitemizin “KVKK” bölümünde başvuru formuna ilişkin bilgi
                bulabilirsiniz.
              </p>
              <h6>
                4.5. Kişisel Verilerin İşlenmesiyle İlgili Daha Detaylı Bilgi
                İçin Başka Nereye Başvurabilirim?
              </h6>
              <p>
                Kişisel verilerin işlenmesiyle ilgili daha detaylı bilgi için
                4.4.’te bulunan yöntemin izlenmesi gerekmektedir. Ancak ilgili
                kişi kendisine sözlü olarak bilgilendirme yapılmasını isterse,
                banko/gişede bulunan şirket görevlimizden sözlü bilgilendirme
                talep edebilir.
              </p>
              <h6>4.6. Veri Sorumlusunun Kimliği / İletişim Bilgileri</h6>
              <p>Adı : Bilet Zero</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default about;
