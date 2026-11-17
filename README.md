<div align="center">

# 🛒 Sahibinden Clone

**Türkiye'nin en büyük ilan sitelerinden biri olan sahibinden.com'un arayüzünü React ile yeniden inşa eden, eğitim amaçlı bir ön yüz (front-end) projesi.**

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Rolldown-646CFF?logo=vite&logoColor=white)
![Ant Design](https://img.shields.io/badge/Ant%20Design-6-0170FE?logo=antdesign&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-7-CA4245?logo=reactrouter&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint&logoColor=white)

</div>

> ⚠️ **Yasal Uyarı:** Bu proje yalnızca **eğitim ve portföy amaçlıdır**. sahibinden.com ile hiçbir resmî bağı yoktur; marka, logo ve tasarım hakları ilgili sahiplerine aittir. Gösterilen ilanlar, fiyatlar ve satıcı bilgileri tamamen **kurgusal örnek verilerdir**.

---

## 📑 İçindekiler

- [Proje Hakkında](#-proje-hakkında)
- [Özellikler](#-özellikler)
- [Ekran Görüntüleri](#-ekran-görüntüleri)
- [Kullanılan Teknolojiler](#-kullanılan-teknolojiler)
- [Kurulum ve Çalıştırma](#-kurulum-ve-çalıştırma)
- [Kullanılabilir Komutlar](#-kullanılabilir-komutlar)
- [Proje Yapısı](#-proje-yapısı)
- [Sayfalar ve Rotalar](#-sayfalar-ve-rotalar)
- [Mimari ve Tasarım Kararları](#-mimari-ve-tasarım-kararları)
- [Veri Modeli](#-veri-modeli)
- [Kimlik Doğrulama Akışı](#-kimlik-doğrulama-akışı)
- [Mevcut Durum ve Bilinen Sınırlamalar](#-mevcut-durum-ve-bilinen-sınırlamalar)
- [Yol Haritası](#-yol-haritası)
- [Katkıda Bulunma](#-katkıda-bulunma)
- [İletişim](#-iletişim)

---

## 📖 Proje Hakkında

**Sahibinden Clone**, sahibinden.com'un ana sayfa, ilan detay, giriş ve kayıt ekranlarının görünümünü ve temel kullanıcı akışlarını yeniden oluşturan bir tek sayfa uygulamasıdır (SPA).

Projenin amaçları:

- Gerçek dünyadaki karmaşık bir ilan sitesi arayüzünü **bileşen tabanlı** düşünerek parçalara ayırmayı pratik etmek,
- **React Context API** ile global durum (kimlik doğrulama) yönetimini öğrenmek,
- **React Router** ile çok sayfalı bir uygulamanın rotalama yapısını kurmak,
- **Ant Design** bileşen kütüphanesini özelleştirerek mevcut bir markanın görsel diline yaklaşmak.

Uygulama şu an bir arka uç (backend) kullanmaz; tüm içerik `src/data/listings.json` dosyasından beslenir.

---

## ✨ Özellikler

### 🏠 Ana Sayfa
- Sol tarafta **kategori yan menüsü**: Acil Acil, Son 48 Saat, Oto360, Emlak360 ve alt kategorileriyle birlikte ilan sayıları (Emlak, Vasıta, Yedek Parça, İkinci El ve Sıfır Alışveriş vb.)
- **Anasayfa Vitrini**: Responsive grid yapısında vitrin ilan kartları (ekran genişliğine göre 2'den 7 sütuna kadar)
- **Servisler**, **Konut Projeleri**, **İlginç İlanlar** ve **Popüler İçerik** bölümleri
- Mobil ve küçük ekranlarda yan menünün gizlenmesi (responsive davranış)

### 📄 İlan Detay Sayfası
- Breadcrumb (sayfa yolu) navigasyonu
- Başlık alanında *Favorilerime Ekle*, *Paylaş* ve *Yazdır* aksiyon butonları
- **Galeri**: Büyük görsel alanı ve küçük resim şeridi (thumbnail)
- **Bilgi Tablosu**: Fiyat, konum, ilan no, ilan tarihi, marka, seri, model ve yıl bilgileri
- **Satıcı Paneli**: Satıcı adı, hesap açma tarihi, telefon, mesaj gönderme butonu ve güvenlik ipuçları
- **Sekmeli Açıklama Alanı**: *İlan Detayları* ve *Konumu ve Sokak Görünümü* sekmeleri
- Geçersiz ilan ID'si için varsayılan "İlan Bulunamadı" görünümü

### 🔐 Kimlik Doğrulama
- **Giriş Yap** sayfası: E-posta/şifre doğrulaması, "Oturumum açık kalsın" seçeneği, Google/Apple giriş butonları (görsel)
- **Hesap Aç** sayfası: Sahibinden'e benzer **iki aşamalı form** — önce e-posta doğrulanır, ardından ad, soyad, şifre ve sözleşme onayı alanları genişleyerek açılır
- Form doğrulamaları (zorunlu alanlar, e-posta formatı, minimum 6 karakterli şifre, sözleşme onayı)
- **LocalStorage** ile oturumun sayfa yenilense de korunması
- Giriş yapılınca Navbar'da kullanıcı adı ve açılır menü (İlanlarım, Mesajlarım, Favori İlanlarım, Çıkış Yap)

### 🧭 Genel
- Giriş/Kayıt sayfalarında Navbar'ı gizleyen **akıllı layout** yapısı
- Navbar'da arama kutusu (Enter ile `?q=` parametresiyle arama sayfasına yönlendirme)
- Ortak Footer
- React Compiler ile otomatik performans optimizasyonu

---

## 🧰 Kullanılan Teknolojiler

| Teknoloji | Sürüm | Kullanım Amacı |
|---|---|---|
| [React](https://react.dev/) | ^19.2 | Kullanıcı arayüzü |
| [Vite (Rolldown)](https://vite.dev/guide/rolldown) | rolldown-vite 7.2 | Hızlı geliştirme sunucusu ve build aracı |
| [React Router DOM](https://reactrouter.com/) | ^7.10 | Sayfa yönlendirme |
| [Ant Design](https://ant.design/) | ^6.0 | UI bileşen kütüphanesi (Form, List, Card, Tabs, Dropdown, Descriptions vb.) |
| [@ant-design/icons](https://ant.design/components/icon) | — | İkon seti |
| [React Compiler](https://react.dev/learn/react-compiler) | babel-plugin-react-compiler ^1.0 | Otomatik memoizasyon |
| [ESLint](https://eslint.org/) | ^9.39 | Kod kalitesi (react-hooks ve react-refresh eklentileriyle) |
| CSS | — | Bileşen/sayfa bazlı özel stiller ve CSS değişkenleri |

---

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler

- [Node.js](https://nodejs.org/) **18 veya üzeri** (LTS önerilir)
- npm (Node ile birlikte gelir)

### Adımlar

1. **Depoyu klonla**

   ```bash
   git clone https://github.com/busraksakalli7/sahibinden-clone.git
   ```

2. **Proje klasörüne gir**

   Uygulama kodu, depo içindeki `sahibinden-clone` alt klasöründe yer alır:

   ```bash
   cd sahibinden-clone/sahibinden-clone
   ```

3. **Bağımlılıkları yükle**

   ```bash
   npm install
   ```

4. **Geliştirme sunucusunu başlat**

   ```bash
   npm run dev
   ```

5. Tarayıcında terminalde görünen adresi aç (varsayılan: [http://localhost:5173](http://localhost:5173)).

### Üretim (Production) Build

```bash
npm run build     # dist/ klasörüne derler
npm run preview   # derlenen çıktıyı yerelde önizler
```

---

## 📜 Kullanılabilir Komutlar

| Komut | Açıklama |
|---|---|
| `npm run dev` | Vite geliştirme sunucusunu (HMR ile) başlatır |
| `npm run build` | Uygulamayı üretim için derler |
| `npm run preview` | Üretim build'ini yerelde önizler |
| `npm run lint` | ESLint ile kod denetimi yapar |

---

## 🗂 Proje Yapısı

```
sahibinden-clone/
└── sahibinden-clone/
    ├── index.html
    ├── package.json
    ├── vite.config.js            # React + React Compiler yapılandırması
    ├── eslint.config.js
    └── src/
        ├── main.jsx              # Uygulama giriş noktası, favicon ayarı
        ├── App.jsx               # AuthProvider + Router + MainLayout sarmalayıcıları
        ├── assets/
        │   └── icons/            # logo.png, kutuLogo.png
        ├── components/
        │   ├── Navbar/           # Üst menü, arama, kullanıcı açılır menüsü
        │   ├── Footer/           # Alt bilgi
        │   ├── HomeModules/      # Ana sayfa bölümleri
        │   │   ├── HomeSidebar.jsx
        │   │   ├── HomeShowcase.jsx
        │   │   ├── HomeServices.jsx
        │   │   ├── HousingProjects.jsx
        │   │   ├── FooterListings.jsx
        │   │   └── HomePopularContent.jsx
        │   └── ListingDetail/    # İlan detay parçaları
        │       ├── Gallery.jsx
        │       ├── InfoTable.jsx
        │       ├── SellerSidebar.jsx
        │       └── DescriptionTabs.jsx
        ├── context/
        │   └── AuthContext.jsx   # Kimlik doğrulama durumu (Context API)
        ├── data/
        │   └── listings.json     # Tüm örnek veriler
        ├── layout/
        │   └── MainLayout.jsx    # Navbar/Footer'ı sayfaya göre gösteren iskelet
        ├── pages/
        │   ├── Home/
        │   ├── Listings/
        │   ├── Details/
        │   ├── Categories/
        │   ├── Auth/             # Login.jsx, Register.jsx
        │   └── Profile/
        ├── router/
        │   └── AppRouter.jsx     # Rota tanımları
        └── styles/               # Sayfa/bileşen bazlı CSS dosyaları
            ├── variables.css
            ├── globals.css
            ├── navbar.css
            ├── footer.css
            ├── home.css
            ├── login.css
            ├── listingDetail.css
            └── descriptionTabs.css
```

## 🏗 Mimari ve Tasarım Kararları

**Bileşen odaklı yapı.** Ana sayfa ve ilan detay sayfası, her biri tek bir sorumluluğa sahip küçük bileşenlere ayrılmıştır (`HomeSidebar`, `HomeShowcase`, `Gallery`, `InfoTable` vb.). Sayfa bileşenleri yalnızca veriyi toplar ve bu parçaları bir araya getirir.

**Veri ile arayüzün ayrılması.** Menü, kategori ve ilan içerikleri bileşenlerin içine gömülmek yerine `listings.json` içinde tutulur ve `props` ile aşağı aktarılır. Böylece veri kaynağı ileride bir REST API ile değiştirildiğinde bileşenlerin büyük bölümünün değişmesi gerekmez.

**Context API ile oturum yönetimi.** `AuthProvider`, tüm uygulamayı sarar; `useAuth()` özel hook'u ile `currentUser`, `isAuthenticated`, `login`, `register` ve `logout` değerlerine her yerden erişilir.

**Layout katmanı.** `MainLayout`, geçerli rotaya bakarak Navbar'ı gösterir veya gizler (giriş/kayıt sayfaları sade görünür). Footer tüm sayfalarda ortaktır.

**İkon eşleme (icon map).** JSON'daki metin tabanlı ikon anahtarları (`"home"`, `"car"` vb.), `HomeSidebar` içinde Ant Design ikon bileşenlerine eşlenir; böylece veri dosyası React'e bağımlı olmadan kalır.

**Responsive tasarım.** Ant Design `Row/Col` grid sistemi ve `List` bileşeninin `grid` özelliği ile farklı ekran boyutlarına uyum sağlanır.

---


## 🔐 Kimlik Doğrulama Akışı

> **Not:** Kimlik doğrulama şu an **tamamen simülasyondur**; gerçek bir sunucu ve güvenli şifre doğrulaması yoktur.

```
Giriş Yap ──► form doğrulanır ──► login(mockUser) ──► state + localStorage güncellenir ──► Ana Sayfa
Hesap Aç  ──► e-posta doğrulanır ──► form genişler ──► register(formData) ──► state + localStorage ──► Ana Sayfa
Çıkış Yap ──► logout() ──► state ve localStorage temizlenir
Sayfa yenileme ──► AuthProvider localStorage'daki "user" kaydını okuyup oturumu geri yükler
```

- Giriş yapıldığında kullanıcı bilgisi `localStorage` içinde `user` anahtarıyla saklanır.
- Kayıt sırasında girilen ad ve soyad birleştirilerek kullanıcı adı olarak kullanılır; **şifre saklanmaz**.
- Gerçek bir uygulamada bu katman; API isteği, JWT/oturum çerezi ve şifre hashleme ile değiştirilmelidir.

---
</div>
