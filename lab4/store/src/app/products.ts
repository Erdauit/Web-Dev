export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
  img2: string;
  img3: string;
  url: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    name: 'IPhone 11',
    price: 799,
    description: 'A large phone with one of the best screens',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/h14/31489167425566/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h76/hcc/31489168277534/apple-iphone-11-128gb-slim-box-cernyj-100692388-2-Container.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0b/ha1/31489169227806/apple-iphone-11-128gb-slim-box-cernyj-100692388-3-Container.jpg",
    url: "https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/",
    rating: 5
  },
  {
    id: 2,
    name: 'Samsung Galaxy A23',
    price: 699,
    description: 'A great phone with one of the best cameras',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg",
    url: "https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/h8d/49792687636510/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-2.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h80/h70/49792689242142/samsung-galaxy-a23-6-gb-128-gb-cernyj-104348541-7.jpg",
    rating: 4
  },
  {
    id: 3,
    name: 'Macbook Air',
    price: 299,
    description: 'best helper for coding', 
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
    url: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h06/hbb/52177862557726/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-2-Container.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2f/h97/50489392824350/apple-macbook-air-13-mgn63-seryj-100797845-4.jpg",
    rating: 3
  },
  {
    id: 4,
    name: 'Macbook Pro',
    price: 299,
    description: 'also is the best',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h54/hd7/33090953773086/apple-macbook-pro-13-myd82-seryi-100797630-1.jpg",
    url: "https://kaspi.kz/shop/p/apple-macbook-pro-13-myd82-seryi-100797630/",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he9/h6a/66921281028126/apple-macbook-pro-13-myd82-seryi-100797630-2.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hee/h53/66921281290270/apple-macbook-pro-13-myd82-seryi-100797630-3.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: 'ASUS TUF Gaming',
    price: 299,
    description: 'If you want to play games with 60 FPS 4k, buy this',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/h33/62100002701342/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h42/h7a/62100003160094/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-2.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hed/h09/62100003618846/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-3.jpg",
    url: "https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/",
    rating: 5
  },
  {
    id: 6,
    name: 'Dyson',
    price: 299,
    description: 'best gift for your partner',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb1/h08/68296593244190/dyson-hd07-supersonic-426081-01-fen-1600-w-108611587-2.jpg",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h16/h1b/67104330809374/dyson-hs05-airwrap-complete-long-fen-shchetka-1300-w-104498649-1.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hac/haf/67104331825182/dyson-hs05-airwrap-complete-long-fen-shchetka-1300-w-104498649-3.jpg",
    url: "https://kaspi.kz/shop/p/dyson-hd07-fen-1600-w-108611587/",
    rating: 5
  },
  {
    id: 7,
    name: 'Sony Playstation 5',
    price: 299,
    description: 'best gift for me (pleease)',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hca/h70/33035111104542/sony-playstation-5-belyj-100746577-2-Container.jpg",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd1/hbe/49348562681886/sony-playstation-5-belyj-100746577-1-Container.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h80/h7d/33035116019742/sony-playstation-5-belyj-100746577-4-Container.jpg",
    url: "https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/",
    rating: 4
  },
  {
    id: 8,
    name: 'Control : Ultimate Edition',
    price: 299,
    description: 'Good game',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hac/h91/48926465916958/control-ultimate-edition-ps5-101266342-1-Container.jpg",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf2/h63/33774716354590/control-ultimate-edition-ps5-101266342-2-Container.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h87/h63/33774797357086/control-ultimate-edition-ps5-101266342-3-Container.jpg",
    url: "https://kaspi.kz/shop/p/control-ultimate-edition-ps5-101266342/",
    rating: 1
  },
  {
    id: 9,
    name: 'Лето в пионерском галстуке',
    price: 299,
    description: 'Omg! Favourite book!',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/h2a/47571550568478/silvanova-k-malisova-e-leto-v-pionerskom-galstuke-103070416-1.jpg",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h26/h54/62338046558238/silvanova-k-malisova-e-leto-v-pionerskom-galstuke-103070416-2.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4c/h01/62338047016990/silvanova-k-malisova-e-leto-v-pionerskom-galstuke-103070416-3.jpg",
    url: "https://kaspi.kz/shop/p/sil-vanova-k-malisova-e-leto-v-pionerskom-galstuke-103070416/",
    rating: 3
  },
  {
    id: 10,
    name: 'Moleskine',
    price: 299,
    description: 'really good notebook',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h09/he4/33774626832414/moleskine-18m-8053853600257-multikolor-101215830-1.jpg",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcf/hc3/47821390807070/moleskine-notebook-lg-rul-pla-103211381-1.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9b/hf4/47821391265822/moleskine-notebook-lg-rul-pla-103211381-2.jpg",
    url: "https://kaspi.kz/shop/p/moleskine-18m-8053853600257-mul-tikolor-101215830/",
    rating: 4
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/