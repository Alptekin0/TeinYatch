# TeinYatch ⛵  
React Native + Expo ile geliştirilen TeinYatch, kullanıcıların giriş yapabildiği, kayıt oluşturabildiği ve ana sayfada çeşitli sayfalar arasında gezinebildiği bir mobil uygulamadır.
  
## 📌 Proje Açıklaması  
TeinYatch; modern navigasyon yapısı, Redux state yönetimi, özel tasarım komponentleri ve tip güvenli TypeScript yapısıyla oluşturulmuş bir mobil uygulama altyapısıdır.  
Uygulama; giriş/kayıt ekranları, sayfa geçişleri, kullanıcı yetkilendirme sistemi ve özel UI bileşenleri içerir.
  
  
## 🚀 Özellikler
- Modern Expo + React Native mimarisi  
- TypeScript ile güçlü tip desteği  
- Redux Toolkit ile state yönetimi  
- Çoklu Stack Navigation yapısı  
- Custom komponent mimarisi (Input, Button, LoginComp, RegisterComp vb.)  
- Yetkilendirme (isAuth kontrolü, kullanıcı tipleri, slice yapısı)  
- Yüklenme ekranları ve göz ikonları gibi kullanıcı dostu UI çözümleri  
- Font ve ikon yönetimi

## 🛠️ Kullanılan Teknolojiler  
- **React Native**  
- **Expo**  
- **TypeScript**  
- **Redux Toolkit**  
- **React Navigation**  
- **Expo Font Loader**  
- **React Native Components**  
  
## 📂 Klasör Açıklamaları  
### Components  
Uygulamada kullanılan tekrar kullanılabilir komponentleri içerir.  
Örn: LoginComp, MainPageComp, RegisterComp, AppComp bileşenleri.
  
### Navigation    
Auth, Pages ve Root navigasyon yapılanmalarını içerir.  
  
### Redux   
Global state için store.ts ve tüm slice yapıları burada yönetilir.  
  
### Screens    
Login, Register, Pages gibi ekranların bulunduğu temel UI katmanıdır.  
  
### assets    
Uygulamada kullanılan fontlar, ikonlar ve statik görsellerin bulunduğu klasördür.  
  