import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     tasitTipi: "",
     Marka: "",
     model: "",
     tasitIsmi: "",
     tasitYili: "",
     sonBakim: "",
     tuvalet: "",
     tamKapasite: "",
     tasitUzunlugu: "",
     bayrak: "",
     yapimMalzemesi: "",
     Sehir: "",
     bulunduguLiman: "",
     farkliLiman: "",
     saatlikUcret: "",
     gecelikUcret: "",
     iptalSuresi: "",
     kiralmaSuresi: "",
     OzelGun: "",
     imkanlar: [],
     guvenlikEkipmanlari: [],
     kullanimKosullari: [],
     organizasyonlar: [],
     hizmetler: [],
     yemekMenuleri: [],
     aciklama: "",
     fotograflar: [],

}

const YatEkleBilgileriSlice = createSlice({
     name: "YatBilgi",
     initialState,
     reducers: {
          AddtasitTipi: (state, actions) => {
               state.tasitTipi = actions.payload;
          },
          AddMarka: (state, actions) => {
               state.Marka = actions.payload;
          },
          Addmodel: (state, actions) => {
               state.model = actions.payload;
          },
          AddtasitIsmi: (state, actions) => {
               state.tasitIsmi = actions.payload;
          },
          AddtasitYili: (state, actions) => {
               state.tasitYili = actions.payload;
          },
          AddsonBakim: (state, actions) => {
               state.sonBakim = actions.payload;
          },
          Addtuvalet: (state, actions) => {
               state.tuvalet = actions.payload;
          },
          AddtamKapasite: (state, actions) => {
               state.tamKapasite = actions.payload;
          },
          AddtasitUzunlugu: (state, actions) => {
               state.tasitUzunlugu = actions.payload;
          },
          AddBayrak: (state, action) => {
               state.bayrak = action.payload;
          },
          AddYapimMalzemesi: (state, action) => {
               state.yapimMalzemesi = action.payload;
          },
          AddSehir: (state, action) => {
               state.Sehir = action.payload;
          },
          AddBulunduguLiman: (state, action) => {
               state.bulunduguLiman = action.payload;
          },
          AddFarkliLiman: (state, action) => {
               state.farkliLiman = action.payload;
          },
          AddSaatlikUcret: (state, action) => {
               state.saatlikUcret = action.payload;
          },
          AddGecelikUcret: (state, action) => {
               state.gecelikUcret = action.payload;
          },
          AddiptalSuresi: (state, action) => {
               state.iptalSuresi = action.payload;
          },
          AddKiralamaSuresi: (state, action) => {
               state.kiralmaSuresi = action.payload;
          },
          AddOzelGun: (state, action) => {
               state.OzelGun = action.payload;
          },
          AddImkanlar: (state, action) => {
               state.imkanlar = action.payload;
          },
          AddGuvenlik: (state, action) => {
               state.guvenlikEkipmanlari = action.payload;
          },
          AddKullanimKosullari: (state, action) => {
               state.kullanimKosullari = action.payload;
          },
          AddOrganizasyonlar: (state, action) => {
               state.organizasyonlar = action.payload;
          },
          AddHizmetler: (state, action) => {
               state.hizmetler = action.payload;
          },
          AddYemekMenuleri: (state, action) => {
               state.yemekMenuleri = action.payload;
          },
          AddAciklama: (state, action) => {
               state.aciklama = action.payload;
          },
          AddFotograflar: (state, action) => {
               state.fotograflar = action.payload;
          },

     }
})

export default YatEkleBilgileriSlice.reducer;
export const
     { AddtasitTipi, AddBayrak, AddMarka, AddYapimMalzemesi, Addmodel, AddsonBakim, AddtamKapasite, AddtasitIsmi, AddtasitUzunlugu, AddtasitYili, Addtuvalet, AddBulunduguLiman, AddFarkliLiman, AddSehir, AddGecelikUcret, AddSaatlikUcret, AddKiralamaSuresi, AddOzelGun, AddiptalSuresi,
          AddGuvenlik, AddImkanlar, AddKullanimKosullari, AddHizmetler, AddOrganizasyonlar, AddYemekMenuleri, AddAciklama, AddFotograflar,
     }
          = YatEkleBilgileriSlice.actions;