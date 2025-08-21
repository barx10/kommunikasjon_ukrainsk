// Liste over fraser og ord til bruk i kommunikasjon_ukrainsk
const DATA = [
  { no: "Jeg er sulten", uk: "Я голодний", emoji: "🍽️", cat: "Потреби", alt: ["mat", "spise", "hungry", "їжа", "хочу їсти", "голодний"] },
  { no: "Jeg er tørst", uk: "Я хочу пити", emoji: "💧", cat: "Потреби", alt: ["drikke", "vann", "thirsty", "пити", "вода", "спрага"] },
  { no: "Jeg må på do", uk: "Мені потрібно в туалет", emoji: "🚻", cat: "Потреби", alt: ["toalett", "wc", "bathroom", "туалет", "в туалет"] },
  { no: "Jeg trenger en pause", uk: "Мені потрібна перерва", emoji: "⏸️", cat: "Потреби", alt: ["hvile", "break", "перерва"] },
  { no: "Jeg er sliten", uk: "Я втомився", emoji: "😴", cat: "Потреби", alt: ["trøtt", "slapp", "tired", "втома", "втомився"] },
  { no: "Kan jeg hente vann", uk: "Чи можна взяти води", emoji: "🚰", cat: "Потреби", alt: ["drikke", "vann", "вода", "пити"] },
  { no: "Kan jeg gå ut litt", uk: "Чи можна вийти на хвилинку", emoji: "🚪", cat: "Потреби", alt: ["ute", "gå ut", "вийти", "на вулицю"] },
  { no: "Dette er bra", uk: "Це добре", emoji: "👍", cat: "Почуття", alt: ["fint", "ok", "bra", "добре"] },
  { no: "Dette er dårlig", uk: "Це погано", emoji: "👎", cat: "Почуття", alt: ["ikke bra", "bad", "погано"] },
  { no: "Dette er gøy", uk: "Це весело", emoji: "😄", cat: "Почуття", alt: ["morsomt", "fun", "весело"] },
  { no: "Dette er kjedelig", uk: "Це нудно", emoji: "😐", cat: "Почуття", alt: ["ikke gøy", "boring", "нудно"] },
  { no: "Jeg er glad", uk: "Я радий", emoji: "🙂", cat: "Почуття", alt: ["happy", "glad", "радісний"] },
  { no: "Jeg er trist", uk: "Мені сумно", emoji: "😢", cat: "Почуття", alt: ["lei seg", "sad", "сумно"] },
  { no: "Jeg er sint", uk: "Я злюся", emoji: "😠", cat: "Почуття", alt: ["sur", "arg", "sint", "злий"] },
  { no: "Jeg er redd", uk: "Мені страшно", emoji: "😨", cat: "Почуття", alt: ["frykt", "engstelig", "redd", "страшно"] },
  { no: "Jeg forstår", uk: "Я розумію", emoji: "✅", cat: "У школі", alt: ["skjønner", "understand", "розумію"] },
  { no: "Jeg forstår ikke", uk: "Я не розумію", emoji: "❓", cat: "У школі", alt: ["vet ikke", "don't understand", "не розумію"] },
  { no: "Kan du hjelpe meg", uk: "Чи можете ви мені допомогти", emoji: "🙋", cat: "У школі", alt: ["hjelp", "help", "допомога"] },
  { no: "Kan du si det en gang til", uk: "Повторіть, будь ласка", emoji: "🔁", cat: "У школі", alt: ["gjenta", "repeat", "ще раз"] },
  { no: "Kan jeg jobbe alene", uk: "Чи можна працювати самому", emoji: "🙇", cat: "У школі", alt: ["selv", "alone", "сам"] },
  { no: "Kan jeg jobbe sammen", uk: "Чи можна працювати разом", emoji: "👥", cat: "У школі", alt: ["gruppe", "sammen", "разом"] },
  { no: "Det er for vanskelig", uk: "Це занадто складно", emoji: "🧩", cat: "У школі", alt: ["ikke lett", "difficult", "складно"] },
  { no: "Det er for lett", uk: "Це занадто легко", emoji: "🟢", cat: "У школі", alt: ["enkelt", "easy", "легко"] }
];
  // Legg til høflighetsfraser hvis de ikke finnes
  const hoflighet = [
    { emoji: '👋', uk: 'Привіт!', no: 'Hei!', cat: 'Høflighet' },
    { emoji: '👋', uk: 'Бувай!', no: 'Hadet!', cat: 'Høflighet' },
    { emoji: '🙏', uk: 'Дякую!', no: 'Takk!', cat: 'Høflighet' },
    { emoji: '😊', uk: 'Будь ласка', no: 'Vær så snill', cat: 'Høflighet' },
    { emoji: '😅', uk: 'Вибач', no: 'Unnskyld', cat: 'Høflighet' },
    { emoji: '🌅', uk: 'Доброго ранку', no: 'God morgen', cat: 'Høflighet' },
    { emoji: '🍽️', uk: 'Дякую за їжу', no: 'Takk for maten', cat: 'Høflighet' },
    { emoji: '🎉', uk: 'Вітаю!', no: 'Gratulerer!', cat: 'Høflighet' },
    { emoji: '🤝', uk: 'Можна з вами?', no: 'Kan jeg få være med', cat: 'Høflighet' },
    { emoji: '❔', uk: 'Як тебе звати?', no: 'Hva heter du?', cat: 'Høflighet' }
  ];
  hoflighet.forEach((x, i) => {
    if (!DATA.some(d => d.no === x.no && d.cat === 'Høflighet')) {
      x.idx = DATA.length + i;
      DATA.push(x);
    }
  });

  // Legg til aktivitetsfraser hvis de ikke finnes
  const aktiviteter = [
    { emoji: '🤸', uk: 'Я хочу гратися', no: 'Jeg vil leke', cat: 'Aktiviteter' },
    { emoji: '🚶', uk: 'Я хочу піти на прогулянку', no: 'Jeg vil gå en tur', cat: 'Aktiviteter' },
    { emoji: '🎨', uk: 'Я хочу малювати', no: 'Jeg vil tegne', cat: 'Aktiviteter' },
    { emoji: '🧩', uk: 'Я хочу складати пазли', no: 'Jeg vil pusle', cat: 'Aktiviteter' },
    { emoji: '🎧', uk: 'Я хочу слухати музику', no: 'Jeg vil høre på musikk', cat: 'Aktiviteter' },
    { emoji: '🎲', uk: 'Я хочу грати в ігри', no: 'Jeg vil spille spill', cat: 'Aktiviteter' },
    { emoji: '📖', uk: 'Я хочу читати', no: 'Jeg vil lese', cat: 'Aktiviteter' }
  ];
  aktiviteter.forEach((x, i) => {
    if (!DATA.some(d => d.no === x.no && d.cat === 'Aktiviteter')) {
      x.idx = DATA.length + i;
      DATA.push(x);
    }
  });
