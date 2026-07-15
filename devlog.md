# damla_portfolio — devlog (instagram build-in-public)

geliştirme sürecini paylaşıyoruz. her giriş bir içerik: 30-60 sn'lik, **hook'u olan**
bir reels (ya da carousel/post). sınır yok. lowercase, dürüst, "bakışını ikinci
saniyede yakala" enerjisi.

format:
- **hook (ilk 2 sn):** kaydırmayı durduran cümle.
- **anlatı (~30-60 sn):** ne yaptım + neden (tr, damla'nın sesi).
- **EN (text-on-video):** aynı fikrin ingilizce ekran yazısı, kısa güçlü.
- **görsel:** ekranda ne göstereceğin.
- **format:** reel / carousel / post.

---

## reel 1 — yedi tasarım denedim, hiçbiri ben değildim
**hook:** kendi portfolyomu 7 kere baştan tasarladım. yedisini de sildim.
**anlatı:** mart'ta basit bir html'di. sonra terminal teması, sonra "bear" düzeni, editorial krem, whimsy grid, suluboya gece gökyüzü, süzülen bulut kartları. hepsi güzeldi ama hiçbiri "bu benim" demedi. kör iterasyon yapıyordum: beğenmiyorum, hemen yenisini üretiyorum. yedincide durdum ve fark ettim — sorun tasarım değil, kime hizmet ettiğini yanlış tanımlamamdı.
**EN (text-on-video):** "i redesigned my portfolio 7 times. deleted all 7. the problem was never the design."
**görsel:** 7 tasarımın hızlı before/after geçişi (git history'den ekran kayıtları).
**format:** carousel

## reel 2 — bir İK insanı 3 saniye bakıyor, hepsi bu
**hook:** işe alımcı portfolyonu 3 saniye görüyor. o 3 saniyede ne alıyor?
**anlatı:** güzel sayfa yapmaya çalışıyordum. yanlıştı. asıl iş: 3 saniye bakan biri "3. sınıf, 40 ürün, iOS + web, üretim makinesi" mesajını anında almalı. bu yüzden sayfayı iki katmana böldüm: üstte havadar, kısa, tek ekranlık İK katmanı. altta sıkı, yoğun, 40 projenin duvarı — nerd katmanı. az içerik + boşluk = üst. çok içerik + sıkılık = alt.
**EN (text-on-video):** "recruiters scan for 3 seconds. design for the 3 seconds, not for yourself."
**görsel:** sayfa açılışı, üst katman → aşağı kaydırma → duvar.
**format:** reel

## reel 3 — 40 projeyi elle güncellemeyi bıraktım
**hook:** portfolyoma her yeni proje eklemek angaryaydı. bir script yazdım, bir daha dokunmadım.
**anlatı:** duvarda 40+ proje var. eskiden her yeni proje için html'i elle açıp satır ekliyordum. üçüncüsünde dedim ki bu ölçeklenmiyor. bir github action yazdım: her gün 11'de tüm public repolarımı tarıyor, son commit tarihi, teknoloji stack'i, açıklama. değişikliği doğrudan main'e commit'liyor, site kendini güncelliyor. ben merge bile yapmıyorum.
**EN (text-on-video):** "40 projects. i stopped updating them by hand. a daily bot does it now."
**görsel:** github action log akışı + duvarın kendiliğinden değişmesi.
**format:** reel

## reel 4 — botun yapamayacağı tek şey
**hook:** portfolyomu bir bot güncelliyor. ama bir şeyi asla ona bırakmadım.
**anlatı:** script her şeyi otomatik çekiyor: tarih, teknoloji, dosya ağacı, commit sayısı. ama "live" etiketini asla bota vermiyorum. bir ürünü canlı ilan etmek benim kararım. çünkü "bu çalışıyor" iddiası ölçülmüş olmalı, otomatik atanmamalı. landing'i olan proje link alır ama durumu "wip" kalır, ben canlı diyene kadar.
**EN (text-on-video):** "automate the busywork. never automate the judgment. 'it works' is a human's call."
**görsel:** wip satırı → benim elle 'live' yeşiline çevirmem.
**format:** reel

## reel 5 — dosya ağaçları gerçek, uydurma değil
**hook:** çoğu portfolyo "App / Views / Models" diye sahte dosya ağacı gösterir. benimki gerçek.
**anlatı:** her projenin detay sayfasında gerçek repo ağacı var — 41 repodan canlı github'dan çekilmiş, budanmamış. dil dağılımı, commit sayısı, ilk/son commit tarihi — hepsi gerçek api'den. uydurma placeholder yok. çünkü bir mühendisin portfolyosu, o mühendisin dürüstlüğünü de gösterir. sahte ağaç, sahte iş demektir.
**EN (text-on-video):** "no fake 'App/Views' trees. real repos, real commit counts, real dates. honesty is a feature."
**görsel:** bir proje overlay'i açılıyor, gerçek ağaç + gerçek rakamlar.
**format:** reel

## reel 6 — üç tema, çünkü bir tanesi herkese uymuyor
**hook:** portfolyoma tek renk seçmedim. ziyaretçiye üç tema bıraktım.
**anlatı:** gece / beyaz / menekşe — üçü de kullanıcının seçebildiği tema. seçim localStorage'da kalıyor. tek bir "doğru" palet seçmek yerine geçişi kullanıcıya verdim, ben o geçişi seviyorum. terminal ruhu duruyor: monospace, ascii kelebek, yıldız alanı. bold yok, kenarlık yok, keskin köşeler. renk anlam taşıyor — durum renkleri (canlı yeşil, wip sarı, üni mavi).
**EN (text-on-video):** "one 'correct' color? no. i gave visitors 3 themes and let them pick. color means status, not decoration."
**görsel:** tema değiştirici, gece→beyaz→menekşe canlı geçiş.
**format:** reel

## reel 7 — bir markayı taşımak = her linki curl'lemek
**hook:** markamı taşıdım. asıl iş isim değiştirmek değildi — 4646 linkti.
**anlatı:** github kullanıcı adım, domain'im, ekosistemim — hepsi değişti. portfolyo merkez üssüydü. bir ismi değiştirmek, o ismin gömülü olduğu her düğümü bulmak demek: her wall linki, her önizleme, canonical, json-ld şema, sitemap, twitter card. her linki curl'le tek tek denedim, hepsi 200 dönene kadar. kırık bir link, karşındaki için "işini bitirmiyor" demektir.
**EN (text-on-video):** "rebrand isn't renaming. it's making every single link return 200. i curl'd all of them."
**görsel:** terminal, curl döngüsü, 200 200 200 akışı.
**format:** reel

## reel 8 (tech diary) — em-dash yüzünden AI sandılar
**hook:** yazımı okuyanlar "bunu AI yazdı" dedi. suçlu tek bir karakterdi.
**anlatı:** portfolyodaki metinlerde uzun tire (—) kullanıyordum. fark ettim ki bu tek karakter yazıyı "AI gibi" gösteriyor. tüm portfolyoda uzun tireyi kısa tireyle (-) değiştirdim, hem kopyada hem arayüzde. küçük detay ama marka algısını değiştiriyor. insan, insan yazısına güvenir. ayrıntı işin parçası.
**EN (text-on-video):** "one character made my writing look AI-generated: the em-dash. i replaced every single one."
**görsel:** find/replace, — → - , metnin 'insanlaşması'.
**format:** reel
