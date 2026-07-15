# damla_portfolio — linkedin (essay stock)

300-500+ word "damla-essays": numbered build-chain, decision by decision, honest tr.
Each essay is a topic that came up in building this portfolio, explained with a takeaway.
Damla writes/approves every word; this is the material stock.

---

## DAMLA-ESSAY 1 — bir portfolyoyu altı kere reddettim, sonunda anladım neden

Kendi portfolyomu Mart'ta yapmaya başladım. Basit bir HTML dosyasıydı, "lala lala la" gibi commit mesajlarıyla ilerleyen bir hafta sonu işi. Sonra bir terminal teması denedim, bebek mavisi. Sonra "bear inspired" bir düzen, pastel etiketler. Sonra editorial krem-gül, serif başlıklar. Sonra whimsy doodle grid. Sonra suluboya gece gökyüzü, yıldızlar, ay. Ardından proje kartlarını süzülen bulutlara çevirdim.

Yedi tasarım. Hepsi çöp değildi — ama hiçbiri "bu benim" demedi. Kör iterasyon yapıyordum: bir şey beğenmiyorum, hemen yenisini üretiyorum, onu da beğenmiyorum. İki-üç turdan sonra durup somut bir referans almam gerektiğini geç öğrendim.

Kırılma noktası şuydu: portfolyonun kime hizmet ettiğini yanlış tanımlamıştım. Ben "güzel bir sayfa" yapmaya çalışıyordum. Oysa asıl iş, üç saniye bakan bir İK insanının "3. sınıf, 40 ürün, iOS + web, üretim makinesi" mesajını anında alması. Sayfa güzel olabilir ama önce iletmeli.

Temmuz'da baştan kurdum. Bir yoğunluk formülü koydum: az içerik + havalı boşluk = İK katmanı (kısa, tek ekran); çok içerik + sıkı yerleşim = nerd katmanı (duvar, herkesin okumadığı ama hacmi hisseden yer). Aynı sayfada iki farklı yoğunluk, çünkü iki farklı okuyucu var.

Takeaway: portfolyo kendini anlatmaz, karşındakinin ihtiyacını anlatır. Önce "kim bakıyor ve neyi 3 saniyede almalı" — tasarım ondan sonra gelir. Yedi denemem gereken şey buydu.

---

## DAMLA-ESSAY 2 — 40 projeyi elle güncellemek yerine sisteme bağladım

Duvarda kırk küsur proje var. İlk versiyonda her yeni proje için index.html'i elle açıp bir satır ekliyordum: isim, tek cümle, teknolojiler, durum. Bir kere yaptım, iki kere yaptım, üçüncüde fark ettim: bu ölçeklenmiyor. Bir portfolyo canlıysa, onu güncellemek angarya olmamalı.

Bir sync script yazdım (scripts/sync.mjs) ve bir GitHub Action'a bağladım. Her gün 11:00'de tüm public repolarımı tarıyor: son commit tarihi, teknoloji stack'i (GitHub languages API'den), repo açıklaması. Yeni bir repo bir cümlelik açıklama kazanınca duvara "wip" satırı olarak düşüyor — ama açıklaması yoksa asla placeholder satır canlıya çıkmıyor. Değişiklik doğrudan main'e commit'leniyor, PR bekletmeden, ki site kendini güncellesin ve ben merge'lemek zorunda kalmayayım.

Ama otomasyona bir sınır koydum: "live" etiketini asla script vermiyor. Bir ürünü canlı ilan etmek benim kararım. Landing sayfası olan bir proje landing linkini alır ama duvar durumu "wip" kalır. Çünkü "çalışıyor" iddiası ölçülmüş olmalı, otomatik atanmamalı.

Detay overlay'lerdeki dosya ağaçları da gerçek — 41 repodan canlı GitHub üzerinden çekiliyor, budanmamış. Uydurma "App/Views" placeholder'ı yok. Rakamlar (dil dağılımı, commit sayısı, ilk/son tarih) da gerçek API'den.

Takeaway: bir sistemi otomatikleştirirken hangi kararın insanda kalması gerektiğini bil. Veri toplamak, tarih güncellemek — makine işi. "Bu ürün gerçekten çalışıyor" demek — insan işi. Otomasyon angaryayı alır, yargıyı değil.

---

## DAMLA-ESSAY 3 — bir markayı taşımak sadece isim değiştirmek değil

Temmuz ortasında bütün markamı taşıdım: GitHub kullanıcı adım, domain'im, ekosistemim. Portfolyo bunun merkez üssüydü — çünkü portfolyo tek bir sayfa değil, tüm ürünlerin buluştuğu hub.

İş şuradan çıktı: markanın adı büyüdükçe eski isim her yere gömülü hale gelmişti. Duvardaki her satırın linki, her overlay önizlemesi, canonical URL, JSON-LD person şeması, sitemap, twitter card — hepsi eski ada işaret ediyordu. Bir ismi değiştirmek, o ismin gömülü olduğu her düğümü bulup düzeltmek demek. Kırık bir link, İK insanının gözünde "bu kişi işini bitirmiyor" demek.

Domain tarafında bir ders daha aldım. Portfolyoya custom domain bağladım, sonra kaldırdım — apex ve github.io ikisi de aynı sayfayı sunuyordu ama redirect zinciri bayat gösteriyordu. Her wall/overlay linkini curl'le tek tek denedim, hepsi 200 dönene kadar. Bir tanesi vercel tarafında 404'tü; onu github.io'da bıraktım. Kırık linki gizlemek yerine gerçek durumu kabul ettim.

Takeaway: rebrand görünürden çok altyapı işi. Görünen kısım tagline; asıl iş her linkin hâlâ 200 dönmesi. Bir marka, tutarlılığı kadar güçlü — ve tutarlılık curl çıktısında yaşıyor, sloganda değil.
