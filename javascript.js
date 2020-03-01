function downloadVersion() {
  
  var selectedValue = document.getElementById("languageSelect").value;
  var convert = document.getElementById("convert");
  var convertButton = document.getElementById("convert_button");
  
  
  if (selectedValue == "pl") {
    convert.setAttribute("href", "./Arleta Papaj - Curriculum Vitae pl.pdf");
    convertButton.setAttribute("href", "./Arleta Papaj - Curriculum Vitae pl.pdf");
  } 
  else {
    convert.setAttribute("href", "./Arleta Papaj - Curriculum Vitae eng.pdf");
    convertButton.setAttribute("href", "./Arleta Papaj - Curriculum Vitae eng.pdf");
  }
}

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
      'm17': 'Uniwersytet Ekonomiczny w Katowicach',
      'm18': 'Wydział Informatyki i Komunikacji',
      'm19': 'Kierunek Informatyka - I stopień | 2016 - 2019',
      'm20': 'I Liceum Ogólnokształcące im. Mikołaja Kopernika w Bielsku-Białej',
      'm21': 'Profil mat-inf-ang | 2013 - 2016',
      'm22': 'Umiejętności',
      'm23': 'znajomość HTML5 i CSS3',
      'm24': 'znajomość JavaScript',
      'm25': 'znajomość SASS / LESS',
      'm26': 'znajomość systemu kontroli wersji GIT',
      'm27': 'znajomość Jira',
      'm28': 'podstawowa znajomość JQuery i Bootstrap',
      'm29': 'Język angielski: B1',
      'm30': 'Wyrażam zgodę na przetwarzanie danych osobowych zawartych w niniejszym dokumencie do realizacji procesu rekrutacji zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).',
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
      'm17': 'University of Economics in Katowice',
      'm18': 'Faculty of Computer Science and Communication',
      'm19': 'Computer Science - Bachelor’s degree | 2016 - 2019',
      'm20': 'High School named Nicolaus Copernicus University in Bielsko-Biala',
      'm21': 'Mathematics, IT and English profile | 2013 - 2016',
      'm22': 'Skills',
      'm23': 'knowledge of HTML5 and CSS3',
      'm24': 'JavaScript knowledge',
      'm25': 'knowledge of SASS / LESS',
      'm26': 'knowledge of the GIT version control system',
      'm27': 'knowledge of Jira',
      'm28': 'basic knowledge of JQuery and Bootstrap',
      'm29': 'English: B1',
      'm30': 'I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).',
    }
  }
  
  $("#languageSelect").change(function() {
    
  var langCode = $("#languageSelect option:selected").val();
  
  for (i = 1; i < 31; i++) {
    var a = "m" + i;
    var str = translations[langCode][a];
    var x = "#m" + i;
    var y = str;
    $(x).text(str);
    $(x).text(y);
  }
    
  }).change(); 