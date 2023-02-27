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
  likes: number;
  category: string;
}

export const products = [
  {
    category: 'Electronics',
    likes: 0,
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
    category: 'Electronics',
    likes: 0,
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
    category: 'Electronics',
    likes: 0,
    id: 3,
    name: 'Macbook Air',
    price: 599,
    description: 'best helper for coding', 
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
    url: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h06/hbb/52177862557726/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-2-Container.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2f/h97/50489392824350/apple-macbook-air-13-mgn63-seryj-100797845-4.jpg",
    rating: 3
  },
  {
    category: 'Electronics',
    likes: 0,
    id: 4,
    name: 'Macbook Pro',
    price: 799,
    description: 'also is the best',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h54/hd7/33090953773086/apple-macbook-pro-13-myd82-seryi-100797630-1.jpg",
    url: "https://kaspi.kz/shop/p/apple-macbook-pro-13-myd82-seryi-100797630/",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he9/h6a/66921281028126/apple-macbook-pro-13-myd82-seryi-100797630-2.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hee/h53/66921281290270/apple-macbook-pro-13-myd82-seryi-100797630-3.jpg",
    rating: 5,
  },
  {
    category: 'Cosmetics',
    likes: 0,
    id: 5,
    name: 'The Ordinary Niacinamide',
    price: 799,
    description: 'поры чистые будут',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h63/h05/33287281410078/the-ordinary-niacinamide-10-zinc-1-syvorotka-30-ml-100703687-1.jpg",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hec/h15/33287286980638/the-ordinary-niacinamide-10-zinc-1-syvorotka-30-ml-100703687-2.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4a/haf/33287293042718/the-ordinary-niacinamide-10-zinc-1-syvorotka-30-ml-100703687-3.jpg",
    url: "https://kaspi.kz/shop/p/the-ordinary-niacinamide-10-zinc-1-syvorotka-30-ml-100703687/",
    rating: 5
  },
  {
    category: 'Electronics',
    likes: 0,
    id: 6,
    name: 'Dyson',
    price: 499,
    description: 'best gift for your partner',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb1/h08/68296593244190/dyson-hd07-supersonic-426081-01-fen-1600-w-108611587-2.jpg",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h16/h1b/67104330809374/dyson-hs05-airwrap-complete-long-fen-shchetka-1300-w-104498649-1.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hac/haf/67104331825182/dyson-hs05-airwrap-complete-long-fen-shchetka-1300-w-104498649-3.jpg",
    url: "https://kaspi.kz/shop/p/dyson-hd07-fen-1600-w-108611587/",
    rating: 5
  },
  {
    category: 'Cosmetics',
    likes: 0,
    id: 7,
    name: 'Cooling Sun SPF50',
    price: 499,
    description: 'best gift for me (pleease)',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb3/h62/68670974197790/deoproce-hyaluronic-cooling-sun-gel-spf-50-pa-gel-50-ml-100267131-1.jpg",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb3/h62/68670974197790/deoproce-hyaluronic-cooling-sun-gel-spf-50-pa-gel-50-ml-100267131-1.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb3/h62/68670974197790/deoproce-hyaluronic-cooling-sun-gel-spf-50-pa-gel-50-ml-100267131-1.jpg",
    url: "https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/",
    rating: 4
  },
  {
    category: 'Cosmetics',
    likes: 0,
    id: 8,
    name: 'Kombucha Tea крем-гель',
    price: 30,
    description: 'Good game',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h12/h48/51068503293982/dr-ceuracle-vegan-kombucha-tea-gel-cream-75-ml-102019813-1-Container.jpg",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h34/h8a/51068503490590/dr-ceuracle-vegan-kombucha-tea-gel-cream-75-ml-102019813-2-Container.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb0/hd6/51068503719966/dr-ceuracle-vegan-kombucha-tea-gel-cream-75-ml-102019813-3-Container.jpg",
    url: "https://kaspi.kz/shop/p/control-ultimate-edition-ps5-101266342/",
    rating: 1
  },
  {
    category: 'Books',
    likes: 0,
    id: 9,
    name: 'Лето в пионерском галстуке',
    price: 2,
    description: 'Omg! Favourite book!',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/h2a/47571550568478/silvanova-k-malisova-e-leto-v-pionerskom-galstuke-103070416-1.jpg",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h26/h54/62338046558238/silvanova-k-malisova-e-leto-v-pionerskom-galstuke-103070416-2.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4c/h01/62338047016990/silvanova-k-malisova-e-leto-v-pionerskom-galstuke-103070416-3.jpg",
    url: "https://kaspi.kz/shop/p/sil-vanova-k-malisova-e-leto-v-pionerskom-galstuke-103070416/",
    rating: 3
  },
  {
    category: 'Cosmetics',
    likes: 0,
    id: 10,
    name: 'NIVEA Care',
    price: 5,
    description: 'terrible',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/h8d/31545731579934/nivea-care-uvlaznausij-100-ml-17600531-1-Container.jpg",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/h8d/31545731579934/nivea-care-uvlaznausij-100-ml-17600531-1-Container.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/h8d/31545731579934/nivea-care-uvlaznausij-100-ml-17600531-1-Container.jpg",
    url: "https://kaspi.kz/shop/p/nivea-care-uvlazhnjajuschii-krem-100-ml-17600531/",
    rating: 0
  },
  {
    category: 'Cosmetics',
    likes: 0,
    id: 11,
    name: 'Dr. Jart Ctrl-A Teatreement',
    price: 29,
    description: 'really good',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2a/h83/49917508124702/dr-jart-teatreement-moisturizer-hydratant-50-ml-100669442-1-Container.jpg",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0e/hea/51557888393246/dr-jart-ctrl-a-teatreement-krem-50-ml-100669442-2.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hda/hd6/51557888851998/dr-jart-ctrl-a-teatreement-krem-50-ml-100669442-3.jpg",
    url: "https://kaspi.kz/shop/p/dr-jart-ctrl-a-teatreement-krem-50-ml-100669442/",
    rating: 4
  },
  {
    category: 'Books',
    likes: 0,
    id: 12,
    name: 'Грокаем Алгоритмы',
    price: 699,
    description: 'A great phone with one of the best cameras',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h14/h50/32357531090974/bhargava-a-grokaem-algoritmy-illustrirovannoe-posobie-dla-programmistov-i-lubopytstvuusih-100124576-1.jpg",
    url: "https://kaspi.kz/shop/p/bhargava-a-grokaem-algoritmy-illjustrirovannoe-posobie-dlja-programmistov-i-ljubopytstvujuschih-100124576/",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h14/h50/32357531090974/bhargava-a-grokaem-algoritmy-illustrirovannoe-posobie-dla-programmistov-i-lubopytstvuusih-100124576-1.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1d/h48/32357534367774/bhargava-a-grokaem-algoritmy-illustrirovannoe-posobie-dla-programmistov-i-lubopytstvuusih-100124576-2.jpg",
    rating: 4
  },
  {
    category: 'Books',
    likes: 0,
    id: 13,
    name: 'Убийство в Восточном экспрессе',
    price: 699,
    description: 'A great phone with one of the best cameras',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0d/hdd/31992848056350/kristi-a-ubijstvo-v-vostocnom-ekspresse-100015045-1-Container.jpg",
    url: "https://kaspi.kz/shop/p/kristi-a-ubiistvo-v-vostochnom-ekspresse-100015045/",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0d/hdd/31992848056350/kristi-a-ubijstvo-v-vostocnom-ekspresse-100015045-1-Container.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0d/hdd/31992848056350/kristi-a-ubijstvo-v-vostocnom-ekspresse-100015045-1-Container.jpg",
    rating: 4
  },
  {
    category: 'Books',
    likes: 0,
    id: 14,
    name: 'О чем молчит ласточка',
    price: 699,
    description: 'A great phone with one of the best cameras',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h58/hb0/62396940746782/malisova-e-silvanova-k-o-cem-molcit-lastocka-106412172-1.jpg",
    url: "https://kaspi.kz/shop/p/malisova-e-sil-vanova-k-o-chem-molchit-lastochka-106412172/",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h58/hb0/62396940746782/malisova-e-silvanova-k-o-cem-molcit-lastocka-106412172-1.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h58/hb0/62396940746782/malisova-e-silvanova-k-o-cem-molcit-lastocka-106412172-1.jpg",
    rating: 4
  },
  {
    category: 'Books',
    likes: 0,
    id: 15,
    name: 'Оруэлл Дж.: 1984',
    price: 699,
    description: 'Всемирная классика',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h81/h34/51390686953502/oruell-dz-1984-105221802-1.jpg",
    url: "https://kaspi.kz/shop/p/oruell-dzh-1984-105221802/",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h67/hcc/51390687412254/oruell-dz-1984-105221802-2.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h67/hcc/51390687412254/oruell-dz-1984-105221802-2.jpg",
    rating: 4
  },
  {
    category: 'Notebooks',
    likes: 0,
    id: 16,
    name: 'Ежедневник Office, A5, 120 листов',
    price: 699,
    description: 'A great phone with one of the best cameras',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h37/h12/63307614126110/ezednevnik-19982-16k-106916100-1.jpg",
    url: "https://kaspi.kz/shop/p/ezhednevnik-office-a5-120-listov-mul-tikolor-106916100/",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5b/h26/63307614584862/ezednevnik-19982-16k-106916100-2.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/hdd/63307615043614/ezednevnik-19982-16k-106916100-3.jpg",
    rating: 4
  },
  {
    category: 'Notebooks',
    likes: 0,
    id: 17,
    name: 'Moleskine еженедельник',
    price: 699,
    description: 'A great phone with one of the best cameras',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1e/hf6/63809484783646/moleskine-ezhenedel-nik-12m-wkly-ntbk-lg-sap-blue-hard-a5-144-listov-sinii-107120205-1.jpg",
    url: "https://kaspi.kz/shop/p/moleskine-ezhenedel-nik-12m-wkly-ntbk-lg-sap-blue-hard-a5-144-listov-sinii-107120205/",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h63/h89/63809493499934/moleskine-ezhenedel-nik-12m-wkly-ntbk-lg-sap-blue-hard-a5-144-listov-sinii-107120205-2.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h85/h83/63809502347294/moleskine-ezhenedel-nik-12m-wkly-ntbk-lg-sap-blue-hard-a5-144-listov-sinii-107120205-3.jpg",
    rating: 4
  },
  {
    category: 'Notebooks',
    likes: 0,
    id: 18,
    name: 'Moleskine Le Nb Pinocchio',
    price: 699,
    description: 'A great phone with one of the best cameras',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h64/ha1/48266700292126/moleskine-le-nb-pinocchio-the-dogfish-103439218-1.jpg",
    url: "https://kaspi.kz/shop/p/moleskine-le-nb-pinocchio-the-dogfish-103439218/",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7b/he0/48266700750878/moleskine-le-nb-pinocchio-the-dogfish-103439218-2.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h92/hdf/48266701209630/moleskine-le-nb-pinocchio-the-dogfish-103439218-3.jpg",
    rating: 4
  },
  {
    category: 'Notebooks',
    likes: 0,
    id: 19,
    name: 'Moleskine Limited Collection',
    price: 699,
    description: 'A great phone with one of the best cameras',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8c/h97/32671571935262/moleskine-limited-collection-denim-large-this-yours-seryj-100452398-1.jpg",
    url: "https://kaspi.kz/shop/p/moleskine-limited-collection-denim-large-this-yours-seryi-100452398/",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/h4b/32671577505822/moleskine-limited-collection-denim-large-this-yours-seryj-100452398-2.jpg",
    img3 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbd/hec/32671584026654/moleskine-limited-collection-denim-large-this-yours-seryj-100452398-3.jpg",
    rating: 4
  },
  {
    category: 'Notebooks',
    likes: 0,
    id: 20,
    name: 'Канц-Эксмо скетчбук',
    price: 699,
    description: 'A great phone with one of the best cameras',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9b/h65/49198369439774/kanc-eksmo-sketcbuk-v-oblakah-a5-100-listov-104009384-1.jpg",
    url: "https://kaspi.kz/shop/p/kants-eksmo-sketchbuk-v-oblakah-a5-100-listov-104009384/",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb1/h7b/49198369898526/kanc-eksmo-sketcbuk-v-oblakah-a5-100-listov-104009384-2.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he0/h15/49198370357278/kanc-eksmo-sketcbuk-v-oblakah-a5-100-listov-104009384-3.jpg",
    rating: 4
  },
  {
    category: 'Cosmetics',
    likes: 0,
    id: 21,
    name: 'Paw Paw Cherry',
    price: 699,
    description: 'A great phone with one of the best cameras',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he1/h19/61575147487262/vosstanavlivausij-balzam-c-aromatom-visni-pure-paw-paw-cherry-15-ml-105977184-1.jpg",
    url: "https://kaspi.kz/shop/p/pure-paw-paw-pure-paw-paw-cherry-bal-zam-105977184/",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he1/h19/61575147487262/vosstanavlivausij-balzam-c-aromatom-visni-pure-paw-paw-cherry-15-ml-105977184-1.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he1/h19/61575147487262/vosstanavlivausij-balzam-c-aromatom-visni-pure-paw-paw-cherry-15-ml-105977184-1.jpg",
    rating: 4
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/