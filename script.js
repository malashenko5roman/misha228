let phrases = [
  { text: 'делать уроки', image: 'https://emakar.ru/wp-content/uploads/2020/06/1-26.jpg' },
  { text: 'готовиться к контрольной', image: 'http://900igr.net/up/datas/219671/012.jpg' },
  { text: 'спать', image: 'https://clearbody.org/images/2/tips-for-a-healthy-immune-system_3.jpg' },
  { text: 'гулять на улице', image: 'https://newsgomel.by/upload/sotbit.htmleditoraddition/eb2/eb24278ea4b9c23e685c0dd41d93e6dd.jpg' },
  { text: 'смотреть в стену', image: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1613686937_41-p-fon-dlya-prezentatsii-kirpichnaya-stena-56.jpg' },
  { text: 'играть одному', image: 'https://avatars.mds.yandex.net/get-zen_doc/1692094/pub_5e26e93e78125e00b19c2511_5e26ec45e6cb9b00b04b972c/scale_1200' },
  { text: 'делать дз в ШАГ', image: 'http://gorbibl.gomel.by/uploads/posts/2018-09/1536071103_kompyuternaya-akademiya-shag.jpg' },
  { text: 'мыться', image: 'https://i.ytimg.com/vi/t22CA5AGzpo/maxresdefault.jpg' },
  { text: 'кушать', image: 'https://kartinkin.net/uploads/posts/2021-03/1617171837_4-p-appetitnaya-yeda-krasivo-5.jpg' },
  { text: 'идти на тренеровку', image: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1614262829_57-p-chernaya-kartinka-bez-fona-76.jpg' }
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text)
  smoothly(image, 'src', randomElement.image)

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});

for (let i = 0; i <= 2; i = i + 1) {
  // выводите элементы массива в консоль, используя i
 // console.log(phrases[i]);
  smoothly(phrase, 'textContent', phrases[i].text); 
  smoothly(image, 'src', phrases[i].image); 
} 