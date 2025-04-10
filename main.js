const shippingData = [
    { orgName: "Новосинявське", city: "с.Стара Синява", obl: "Хмельницька", branch: "1", repName: "Кравчук Сергій", phone: "+380 67 402 04 22", edrpou: "38595035" },
    { orgName: "Форест Бар", city: "м.Бар", obl: "Віницька", branch: "1", repName: "Богдан", phone: "+380 95 345 93 21", edrpou: "-" },
    { orgName: "Іванівське", city: "м.Теребовля", obl: "Тернопільська", branch: "1", repName: "Михайло", phone: "+380 67 350 41 26", edrpou: "00953668" },
    { orgName: "Штадлер ЛТД", city: "м.Рахів", obl: "Закарпатьська", branch: "1", repName: "Івасюк Ервін", phone: "+380 67 350 41 26", edrpou: "00953668" },
    { orgName: "Глинка Роман", city: "смт.Перегінське", obl: "Івано-Франківська", branch: "1", repName: "Глинка Ростислав", phone: "+380 68 036 77 77", edrpou: "-" },
    { orgName: "Еко Прайм", city: "м.Рівне", obl: "Рівненська", branch: "1", repName: "Олександр", phone: "+380 98 597 73 26", edrpou: "45266311" },
    { orgName: "ФГ Стріла", city: "м.Муровані Курилівці", obl: "Віницька", branch: "1", repName: "-", phone: "+380 96 503 38 38", edrpou: "31599101" },
    { orgName: "Аспект Пласт", city: "м.Київ", obl: "Київська", branch: "2", repName: "Матявін Олександр", phone: "+380 97 195 20 24", edrpou: "41140848" },
    { orgName: "Ольги Кобилянської", city: "м.Чернівці", obl: "Чернівецька", branch: "1", repName: "-", phone: "+380 66 190 08 88", edrpou: "-" },
    { orgName: "Лідекс", city: "м.Київ", obl: "Кииївська", branch: "1", repName: "Кривуля Євген", phone: "+380 67 373 29 76 ", edrpou: "39080172" },
    { orgName: "Мяспром", city: "м.Теребовля", obl: "Тернопільська", branch: "1", repName: "Симак Василь", phone: "+380 98 259 57 23 ", edrpou: "-" },
    { orgName: "ВВТ Грейн", city: "м.Ярмолинці", obl: "Хмельницька", branch: "1", repName: "-", phone: "+380 67 743 99 50 ", edrpou: "38884893" },
    { orgName: "Оршівське", city: "м.Снятин", obl: "Івано-Франківська", branch: "1", repName: "-", phone: "+380 95 384 30 33 ", edrpou: "03801730" },
    { orgName: "Холдер Агро (Документи)", city: "м.Гусятин", obl: "Тернопільська", branch: "1", repName: "Слободян Наталя", phone: "+380 50 060 30 02 ", edrpou: "37938319" },
    { orgName: "Далар", city: "м.Київ", obl: "Київська", branch: "253", repName: "Якименко Сергій", phone: "+380 68 792 45 22 ", edrpou: "21558373" },
    { orgName: "Хайтед Україна", city: "м.Київ", obl: "Київська", branch: "вул.Автозаводська 18", repName: "Даценко Володимир", phone: "+380 67 440 17 52 ", edrpou: "34807286" },
    { orgName: "Роса Агро (ПП Югро)", city: "с.Кельменці", obl: "Чернівецька", branch: "2", repName: "Безерко Богдан", phone: "+380 68 945 21 94 ", edrpou: "34584480" },
    { orgName: "Зімертал", city: "м.Теофіполь", obl: "Хмельницька", branch: "1", repName: "Гончарук Олександр", phone: "+380 97 344 35 34 ", edrpou: "37896337" },
    { orgName: "Гуменецьке", city: "м.Камянець Подільськ", obl: "Хмельницька", branch: "7", repName: "Михайло", phone: "+380 98 481 92 85 ", edrpou: "31392008" },
    { orgName: "Теслугівське", city: "с.Козин", obl: "Рівненська", branch: "1", repName: "Фаєвський Назар", phone: "+380 96 642 58 11 ", edrpou: "35314583" },
    { orgName: "Манятин", city: "с.Берездів", obl: "Хмелницька", branch: "1", repName: "Олександр", phone: "+380 96 012 88 04 ", edrpou: "03728860" },
    { orgName: "Агрофірма Маяк", city: "с.Полоне", obl: "Хмелницька", branch: "1", repName: "Максимчук Микола", phone: "+380 98 759 94 42 ", edrpou: "03789324" },
    { orgName: "Роднік Плюс", city: "м.Снятин", obl: "Івано-Франківська", branch: "1", repName: "Печенюк Олександр", phone: "+380 67 649 70 82 ", edrpou: "37112925" },
    { orgName: "Літинський Плем Завод", city: "м.Літин", obl: "Віницька", branch: "1", repName: "Швець Олександр", phone: "+380 50 263 38 36 ", edrpou: "30560754" },
    { orgName: "Буковел Валерій", city: "с.Паляниця", obl: "Івано-Франківська", branch: "1", repName: "Книшук Михайло", phone: "+380 97 967 85 85 ", edrpou: "-" },
    { orgName: "Агро Еко ХХІ", city: "м.Камянець Подільськ", obl: "Хмельницька", branch: "1", repName: "Білецький Ігор", phone: "+380 96 972 96 30 ", edrpou: "34422244" },
    { orgName: "Агро Еко ХХІ Плюс", city: "м.Камянець Подільськ", obl: "Хмельницька", branch: "1", repName: "Білецький Ігор", phone: "+380 96 972 96 30 ", edrpou: "37000430" },
    { orgName: "Колодницька Вербина", city: "м.Дуліби", obl: "Львівська", branch: "1", repName: "Когут Олег", phone: "+380 96 748 18 43 ", edrpou: "40693835" },
    { orgName: "Староконстанттинів Цукор", city: "м.Староконстанттинів", obl: "Хмельницька", branch: "1", repName: "Процюк Василь", phone: "+380 97 909 59 36 ", edrpou: "36397241" },
    { orgName: "Агро В",city: "с.Козин", obl: "Рівненська", branch: "1", repName: "Чуліпа Василь", phone: "+380 67 531 63 33 ", edrpou: "35882909" },
    { orgName: "Шепетівка Цукор",city: "м.Шепетівка", obl: "Хмельницька", branch: "1", repName: "Грищук Михайло", phone: "+380 97 418 47 12 ", edrpou: "00373391" },
    { orgName: "Таурус Агро",city: "м.Славута", obl: "Хмельницька", branch: "1", repName: "Косик Михайло", phone: "+380 67 383 46 86 ", edrpou: "41589110" },
    { orgName: "Богородчани",city: "смт.Богородчании", obl: "Івано Франківська", branch: "1", repName: "Захарчук Михайло", phone: "+380 67 343 16 51 ", edrpou: "-" },
    { orgName: "-",city: "с.Заліщики", obl: "Тернопільська", branch: "1", repName: "Лучак Іван", phone: "+380 96 346 19 68 ", edrpou: "-" },
    { orgName: "Борошномельна",city: "м.Дунаївці", obl: "Хмельницька", branch: "1", repName: "Биндю Андрій", phone: "+380 67 000 16 40 ", edrpou: "-" },
    { orgName: "Агрофірма Комунар",city: "с.Вільногірсььк", obl: "Днепропетровска", branch: "1", repName: "Стрижак Алла", phone: "+380 97 893 66 72 ", edrpou: "3109830" },
    { orgName: "-",city: "м.Луцьк", obl: "Волинська", branch: "4", repName: "Акбулут Сулейман", phone: "+380 66 537 93 98 ", edrpou: "-" },
    { orgName: "Сав Тракс",city: "с.Монастерище", obl: "Черкаська", branch: "1", repName: "Сигидюк Андрій", phone: "+380 67 266 97 97 ", edrpou: "38543830" },
    { orgName: "Агро Вест Груп",city: "м. Звягель", obl: "Житомирська", branch: "1", repName: "Наталя Миколаївна", phone: "+380 68 161 60 94 ", edrpou: "375729" },
    { orgName: "Бона + М",city: "с.Гнилички", obl: "Тернопільська", branch: "1", repName: "Базюк Тарас", phone: "+380 98 945 79 36 ", edrpou: "-" },
    { orgName: "Юзипівка",city: "м.Сокаль", obl: "Львовска", branch: "1", repName: "Ходор Сергій", phone: "+380 97 477 15 31 ", edrpou: "33572720" },
    { orgName: "Дарлія-Вакула",city: "м.Бар", obl: "Віницька", branch: "1", repName: "Римський Олександр", phone: "+380 68 306 12 95 ", edrpou: "38343585" },
    { orgName: "Рікат",city: "м.Сокаль", obl: "Львовска", branch: "1", repName: "Марія", phone: "+380 98 729 57 77 ", edrpou: "22329551" },
    { orgName: "Імпекс",city: "с.Розтоки", obl: "Чернівецька", branch: "1", repName: "Нагірняк Дмитро", phone: "+380 96 974 05 10 ", edrpou: "23248814" },
    { orgName: "-",city: "с.Усатово", obl: "Одеська", branch: "1", repName: "Іванов Олександр", phone: "+380 67 485 12 43 ", edrpou: "-" },
    { orgName: "Яремче Маніу",city: "м.Косів", obl: "Івано-Франківська", branch: "2", repName: "Труфен Василь", phone: "+380 67 306 09 93 ", edrpou: "-" },
    { orgName: "Дан Мілк",city: "с.Черняхи", obl: "-", branch: "1", repName: "Сахенко Олександр", phone: "+380 50 463 48 45 ", edrpou: "34378714" },
    { orgName: "Топ-Топс",city: "с.Жовтанці", obl: "Львівська", branch: "1", repName: "Римський Микола", phone: "+380 67 846 20 70 ", edrpou: "40750713" },
    { orgName: "Городоцькиий Елеватор Суфле",city: "м.Городок", obl: "Хмельницька", branch: "1", repName: "Євгеній", phone: "+380 50 376 25 43 ", edrpou: "00952479" },
    { orgName: "ЛТЄ Фрут",city: "м.Бар", obl: "Віницька", branch: "1", repName: "Блашук Михайло", phone: "+380 96 601 53 22 ", edrpou: "44117125" },
    { orgName: "Тимофійчук",city: "м.Снятн", obl: "Івано Франківська", branch: "1", repName: "Тимофійчук Ярослав", phone: "+380 67 372 50 35 ", edrpou: "-" },
    { orgName: "Династія",city: "с.Старий Остропіль", obl: "Хмелницький", branch: "1", repName: "-", phone: "+380 67 673 05 15 ", edrpou: "32445385" },
    { orgName: "Ситний Двір",city: "м.Дунаївці", obl: "Хмелницький", branch: "1", repName: "Фурмановч Олег", phone: "+380 67 709 10 74 ", edrpou: "40429022" },
    { orgName: "Планета Юність",city: "м.Ізяслав", obl: "Хмелницький", branch: "1", repName: "-", phone: "+380 96 339 91 37 ", edrpou: "39057536" },
    { orgName: "-",city: "м.Почаїв", obl: "Тернопілська", branch: "2", repName: "Римський Віктор", phone: "+380 96 184 97 78 ", edrpou: "-" },
    { orgName: "ПКПФ Україна",city: "с.Понінка", obl: "Хмельницький", branch: "1", repName: "Гаврлюк Віталій", phone: "+380 97 701 24 95 ", edrpou: "41085075" },
    { orgName: "БНМ",city: "с.Кременець", obl: "Тернопілська", branch: "2", repName: "Борак Анатолій", phone: "+380 96 839 33 33 ", edrpou: "38117379" },
    { orgName: "СВК Зоря",city: "с.Кіцьман", obl: "Чернівецька", branch: "1", repName: "Москалюк Василь", phone: "+380 95 741 28 55 ", edrpou: "03801675" },
    { orgName: "Буковиинський Зерно Продукт",city: "с.Романківці", obl: "Чернівецька", branch: "1", repName: "Бучка Ігор", phone: "+380 96 702 60 23 ", edrpou: "43713225" },
    { orgName: "Летичів Агро",city: "м.Бар", obl: "Віницька", branch: "1", repName: "Сергій", phone: "+380 68 760 07 37 ", edrpou: "34978673" },
    { orgName: "ДЛС Компані",city: "м.Жмернка", obl: "Віницька", branch: "1", repName: "Лесков Мхайло", phone: "+380 67 630 32 85 ", edrpou: "42717192" },
    { orgName: "Вязовець",city: "с.Ямпіль", obl: "Хмельницька", branch: "1", repName: "Назарук Микола", phone: "+380 97 497 68 26 ", edrpou: "30557157" },
    { orgName: "СФГ Манятин",city: "с.Берездів", obl: "Хмельницька", branch: "1", repName: "Олександр", phone: "+380 96 012 88 04 ", edrpou: "3728860" },
    { orgName: "ДЛС Партс",city: "м.Київ", obl: "Київська", branch: "18", repName: "Кривенький Олександр", phone: "+380 97 897 65 66 ", edrpou: "43902552" },
    { orgName: "ФГ Ілаш",city: "смт.Келььменці", obl: "Чернівецка", branch: "1", repName: "Ілаш Денис", phone: "+380 97 572 00 62 ", edrpou: "35194382" },
    { orgName: "Краєвид Поділля",city: "м.Бар", obl: "Віницька", branch: "1", repName: "Коломійчук Руслан", phone: "+380 67 430 01 40 ", edrpou: "34918499" },
    { orgName: "СВК Лабунське",city: "с.Новолабун або Полоне", obl: "Хмельницька", branch: "1", repName: "Яськов Анатолій", phone: "+380 67 264 40 31 ", edrpou: "03789198" },
    { orgName: "Євромагістраль",city: "м.Рівно", obl: "Рівненська", branch: "14", repName: "Галянтковський Ю.М.", phone: "+380 99 918 77 28 ", edrpou: "43481546" },
    { orgName: "Герром Інвест Україна",city: "м.Хмельнцький", obl: "Хмелницька", branch: "6", repName: "Ходак Інна", phone: "+380 97 767 87 18 ", edrpou: "34175746" },
    { orgName: "Вороняцькі Лани",city: "м.Золочів", obl: "Львівська", branch: "1", repName: "Масник Михайло", phone: "+380 97 934 34 95 ", edrpou: "35130486" },
    { orgName: "Захід Агро Техніка",city: "с.Рованці", obl: "Волинська", branch: "1", repName: "Осаволюк Володимер", phone: "+380 50 433 00 47 ", edrpou: "37128662" },
    { orgName: "Френдлі Логістик",city: "м.Ужгород", obl: "Закарпатська", branch: "8", repName: "Ісаков Олександр", phone: "+380 50 474 81 15 ", edrpou: "37683680" },
    { orgName: "-",city: "с.Усатове", obl: "Одеська", branch: "1", repName: "Іванов Олександр", phone: "+380 67 485 12 43 ", edrpou: "-" },
    { orgName: "Фінпром",city: "смт.Тоашпіль", obl: "Віницька", branch: "1", repName: "Савлук Марія", phone: "+380 68 006 87 38 ", edrpou: "36629177" },
    { orgName: "-",city: "с.Цебрикове", obl: "Одеська", branch: "1", repName: "Королевят Оксана", phone: "+380 99 450 14 55 ", edrpou: "-" },
    { orgName: "ЛАН",city: "м.Теребовля", obl: "Тернопілська", branch: "1", repName: "Гундзик Олександр", phone: "+380 97 391 62 07 ", edrpou: "30343672" },
    { orgName: "ДП Пасічна",city: "м.Староконстантинів", obl: "Хмельницька", branch: "1", repName: "Таєнчук Віталій", phone: "+380 67 380 99 10 ", edrpou: "30925481" },
    { orgName: "-",city: "с.Турятка", obl: "Чернівецька", branch: "1", repName: "Малофій Дмитро", phone: "+380 97 734 79 82 ", edrpou: "-" },
    { orgName: "Агро Ормс",city: "м.Староконстантинів", obl: "Хмельницька", branch: "1", repName: "Дарчук Віталій", phone: "+380 50 335 01 23 ", edrpou: "31328990" },
    { orgName: "Матейків Інвест",city: "м.Бар", obl: "Хмельницька", branch: "1", repName: "Андрій", phone: "+380 50 814 20 15", edrpou: "34918614" },
    { orgName: "Дитяки",city: "смт.Іванків", obl: "Київська", branch: "1", repName: "Лиманюк Анатолій", phone: "+380 67 372 43 89 ", edrpou: "41094273" },
    { orgName: "Міша Буковел",city: "с.Паляниця", obl: "Івано-Франківська", branch: "1", repName: "Симак Михайло", phone: "+380 67 351 02 76 ", edrpou: "-" },
    { orgName: "Захід Агро 2015",city: "м.Шепеівка", obl: "Хмельницька", branch: "1", repName: "Довбня Віктор", phone: "+380 67 381 16 17 ", edrpou: "39915047" },
    { orgName: "Рікат",city: "м.Золочів", obl: "Львівська", branch: "1", repName: "Володимер", phone: "+380 67 344 12 23 ", edrpou: "22329551" },
    { orgName: "ВіаБуд",city: "м.Київ", obl: "Київська", branch: "39", repName: "Вовк Ольга", phone: "+380 97 962 77 91 ", edrpou: "42055649" },
    { orgName: "Бондар + М",city: "м.Хмельницький", obl: "Хмельницька", branch: "поштомат 34261", repName: "Плахтінська", phone: "+380 68 990 01 01 ", edrpou: "ОТРИМУВАЧ ПРИВАТНА ОСОБА ОПЛАТА ОТРИМУВАЧА" },
];

function loadTableData() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; 
    shippingData.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.orgName}</td>
            <td>${entry.city}</td>
            <td>${entry.obl}</td>
            <td>${entry.branch}</td>
            <td>${entry.repName}</td>
            <td>${entry.phone}</td>
            <td>${entry.edrpou}</td>
        `;
        tableBody.appendChild(row);
    });
}

function filterTable() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const rows = document.querySelectorAll('#tableBody tr');

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        let rowContainsFilter = Array.from(cells).some(cell => cell.innerText.toLowerCase().includes(filter));
        row.style.display = rowContainsFilter ? '' : 'none';
    });
}


document.addEventListener('DOMContentLoaded', loadTableData);
