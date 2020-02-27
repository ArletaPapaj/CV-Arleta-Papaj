var translations = {
    'pl': {
      'm1': 'Doświadczenie zawodowe',
      'm2': 'Młodszy inżynier rozwoju oprogramowania',
      'm3': 'Rockwell Automation | Luty 2018 - obecnie',
      'm4': 'testy manualne',
      'm5': 'system kontroli wersji - GIT',
      'm6': 'doświadczenie w pracy w metodyce SCRUM, Jira',
      'm7': 'programowanie aplikacji - HTML, JS',
      'm8': 'unit testy',
      'm9': 'Organizator wycieczek',
      'm10': 'Biuro podróży BreakPlan | Grudzień 2017 - Luty 2019',
      'm11': 'organizacja wycieczek dostosowanych do klienta',
      'm12': 'pisanie tekstów na stronę internetową',
      'm13': 'Wykształcenie',
      'm14': 'Uniwersytet Ekonomiczny w Katowicach',
      'm15': 'Wydział Informatyki i Komunikacji',
      'm16': 'Kierunek Informatyka - II stopień | 2019 - obecnie',
      'm17': 'Kurs Front-end 4 Beginners',
      'm18': 'DaftAcademy w Warszawie',
      'm19': 'Ukończony z wyróżnieniem | Listopad 2019 - Grudzień 2019',
      'm20': 'Uniwersytet Ekonomiczny w Katowicach',
      'm21': 'Wydział Informatyki i Komunikacji',
      'm22': 'Kierunek Informatyka - I stopień | 2016 - 2019',
      'm23': 'I Liceum Ogólnokształcące im. Mikołaja Kopernika w Bielsku-Białej',
      'm24': 'Profil mat-inf-ang | 2013 - 2016',
      'm25': 'Umiejętności',
      'm26': 'znajomość HTML5 i CSS3',
      'm27': 'znajomość JavaScript',
      'm28': 'znajomość SASS / LESS',
      'm29': 'znajomość systemu kontroli wersji GIT',
      'm30': 'znajomość Jira',
      'm31': 'podstawowa znajomość JQuery i Bootstrap',
      'm32': 'Język angielski: B1',
      'm33': 'Wyrażam zgodę na przetwarzanie danych osobowych zawartych w niniejszym dokumencie do realizacji procesu rekrutacji zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).',
    },
    'eng': {
      'm1': 'Work experience',
      'm2': 'Junior Software Development Engineer',
      'm3': 'Rockwell Automation | February 2018 - present',
      'm4': 'manual tests',
      'm5': 'version control system - GIT',
      'm6': 'experience in work in SCRUM methodology, Jira',
      'm7': 'application programming - HTML, JS',
      'm8': 'unit tests',
      'm9': 'Tour operator',
      'm10': 'BreakPlan travel agency | December 2017 - February 2019',
      'm11': 'organized tours tailored to the customer',
      'm12': 'writing texts on the website',
      'm13': 'Education',
      'm14': 'University of Economics in Katowice',
      'm15': 'Faculty of Computer Science and Communication',
      'm16': 'Computer Science - Master’s degree  | 2019 - present',
      'm17': 'Front-end 4 Beginners course',
      'm18': 'DaftAcademy in Warsaw',
      'm19': 'Finished with distinction November | 2019 - December 2019',
      'm20': 'University of Economics in Katowice',
      'm21': 'Faculty of Computer Science and Communication',
      'm22': 'Computer Science - Bachelor’s degree | 2016 - 2019',
      'm23': 'High School named Nicolaus Copernicus University in Bielsko-Biala',
      'm24': 'Mathematics, IT and English profile | 2013 - 2016',
      'm25': 'Skills',
      'm26': 'knowledge of HTML5 and CSS3',
      'm27': 'JavaScript knowledge',
      'm28': 'knowledge of SASS / LESS',
      'm29': 'knowledge of the GIT version control system',
      'm30': 'knowledge of Jira',
      'm31': 'basic knowledge of JQuery and Bootstrap',
      'm32': 'English: B1',
      'm33': 'I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).',
    }
  }
  
  $("#languageSelect").change(function() {
    
  var langCode = $("#languageSelect option:selected").val();
  
  for (i = 1; i < 34; i++) {
    var a = "m" + i;
    var str = translations[langCode][a];
    var x = "#m" + i;
    var y = str;
    $(x).text(str);
    $(x).text(y);
  }
    
  }).change(); 
