/* ===== AKADEMIA LIDEROW SPRZEDAZY - CZESC: 03_budowanie_zespolu ===== */

CONTENT.rekrutacja = `
<img class="mod-icon reveal" src="https://media.base44.com/images/public/69cd0d788375531a373c98b1/af44347dd_generated_image.png" alt="" loading="lazy">
<span class="eyebrow">Moduł 9 · Budowanie zespołu</span>
<h2>Rekrutacja dobrego handlowca</h2>
<p class="lede">Dobra rekrutacja oszczędza miesiące frustracji później. Kluczem nie jest szukanie idealnego CV, tylko sprawdzenie konkretnych zachowań w symulowanych sytuacjach.</p>

<h3>Czego szukać poza doświadczeniem</h3>
<div class="tiles">
  <div class="tile"><div class="big">Odporność</div><div class="lbl">jak kandydat mówi o dawnych porażkach i odmowach — z refleksją czy z obroną</div></div>
  <div class="tile"><div class="big">Ciekawość</div><div class="lbl">czy zadaje pytania o firmę i klientów, czy tylko o warunki finansowe</div></div>
  <div class="tile"><div class="big">Autentyczność</div><div class="lbl">czy brzmi naturalnie, czy recytuje wyuczone frazesy sprzedażowe</div></div>
</div>
<p>Doświadczenie w sprzedaży bywa mylące — ktoś mógł mieć dobre wyniki dzięki dobrym leadom, nie dzięki własnym umiejętnościom. Ważniejsze jest to, jak kandydat radzi sobie z trudnością: poproszony o opowiedzenie o poważnej porażce zawodowej, czy mówi o niej z konkretną refleksją („nauczyłem się, że..."), czy raczej się broni i obwinia okoliczności.</p>

<h3>Symulacja zamiast samego wywiadu</h3>
<p>Najlepszym testem jest krótka symulacja realnej sytuacji — np. „zagrajmy scenkę, ja jestem trudnym klientem, który mówi że to za drogie, co powiesz?". To pokazuje więcej niż jakiekolwiek pytanie o przeszłe doświadczenie, bo widzisz reakcję w czasie rzeczywistym, nie tylko opowieść o niej.</p>

<div class="scene">
  <div class="scene-title">Źle — ocena tylko na podstawie CV</div>
  <div class="bubble c"><span class="who">Manager</span>(zatrudnia na podstawie samego CV z dobrymi liczbami z poprzedniej pracy, bez symulacji)</div>
  <div class="scene-title">Dobrze — symulacja realnej sytuacji</div>
  <div class="bubble c"><span class="who">Manager</span>Zagrajmy scenkę — jestem klientem, który mówi, że to za drogie. Co Pan powie?</div>
  <div class="bubble k"><span class="who">Kandydat</span>(reaguje w czasie rzeczywistym, pokazując swój naturalny styl rozmowy)</div>
  <div class="note">Symulacja pokazuje realne zachowanie kandydata pod presją, czego samo CV i opowieści o przeszłości nigdy nie pokażą.</div>
</div>

<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">Przykład z życia — Tomasz i kandydat z idealnym CV <span class="ico">+</span></div>
  <div class="acc-b"><p>Tomasz miał kandydata z imponującym CV i świetnymi liczbami z poprzedniej firmy. Podczas krótkiej symulacji trudnej rozmowy z klientem kandydat wyraźnie się pogubił i zaczął reagować defensywnie na sprzeciw. Tomasz zatrudnił mimo to innego kandydata, ze skromniejszym CV, ale znacznie spokojniejszą, bardziej naturalną reakcją w symulacji — ta druga osoba okazała się dużo skuteczniejsza w realnej pracy niż sugerowałoby jej CV.</p></div>
</div>

<div class="quiz">
  <div class="q">Masz dwóch kandydatów: jeden z imponującym CV, drugi ze skromniejszym, ale spokojną reakcją w symulacji trudnej rozmowy. Co jest lepszym predyktorem sukcesu?</div>
  <button class="opt" data-ok="0" onclick="quizPick(this,false,'','Same liczby z CV mogą wynikać z dobrych leadów w poprzedniej pracy, nie z realnych umiejętności kandydata.')">Samo CV z lepszymi liczbami z poprzedniej pracy</button>
  <button class="opt" data-ok="1" onclick="quizPick(this,true,'Dobrze — realna reakcja w symulowanej trudnej sytuacji pokazuje więcej niż jakiekolwiek CV.','')">Spokojna, naturalna reakcja w symulacji trudnej rozmowy</button>
  <div class="fb"></div>
</div>
`;

CONTENT.onboarding_30 = `
<img class="mod-icon reveal" src="https://media.base44.com/images/public/69cd0d788375531a373c98b1/3cba7b498_generated_image.png" alt="" loading="lazy">
<span class="eyebrow">Moduł 10 · Budowanie zespołu</span>
<h2>Pierwsze 30 dni — skuteczny onboarding nowego sprzedawcy</h2>
<p class="lede">Pierwszy miesiąc decyduje, czy nowa osoba zostanie w firmie na lata, czy odejdzie sfrustrowana po kilku tygodniach. To nie czas na rzucanie kogoś na głęboką wodę bez wsparcia.</p>

<h3>Trzy fazy pierwszych 30 dni</h3>
<div class="tiles">
  <div class="tile"><div class="big">Tydzień 1</div><div class="lbl">obserwacja — nowa osoba towarzyszy doświadczonemu koledze, nie działa sama</div></div>
  <div class="tile"><div class="big">Tydzień 2-3</div><div class="lbl">wspólna praca — pierwsze samodzielne rozmowy z asystą i bieżącym feedbackiem</div></div>
  <div class="tile"><div class="big">Tydzień 4</div><div class="lbl">samodzielność z regularnym check-inem — pierwsze podsumowanie miesiąca</div></div>
</div>
<p>Rzucanie nowej osoby od razu na samodzielną pracę „bo tak się nauczyła" jest jednym z najczęstszych powodów wczesnej rotacji. Struktura obserwacja → wspólna praca → samodzielność z regularnym wsparciem daje nowej osobie czas na naukę bez poczucia, że zawodzi już od pierwszego dnia.</p>

<h3>Regularne krótkie check-iny</h3>
<p>Codzienna, krótka (5-10 minut) rozmowa w pierwszym tygodniu, potem co drugi dzień w kolejnych tygodniach — to buduje poczucie wsparcia i pozwala szybko wyłapać problemy, zanim urosną. Pytanie „co było dla Ciebie najtrudniejsze dzisiaj?" jest lepsze niż samo „jak leci?", bo prowadzi do konkretnej rozmowy.</p>

<div class="scene">
  <div class="scene-title">Źle — rzucenie na głęboką wodę</div>
  <div class="bubble c"><span class="who">Manager</span>(pierwszego dnia) Masz tu listę adresów, powodzenia, wpadnij jeśli coś.</div>
  <div class="scene-title">Dobrze — stopniowe wdrożenie z asystą</div>
  <div class="bubble c"><span class="who">Manager</span>Pierwszy tydzień pojedziesz z Kasią, będziesz obserwować, jak ona to robi — potem porozmawiamy, co zauważyłaś.</div>
  <div class="note">Stopniowe wdrożenie z obserwacją i regularnym wsparciem znacznie zmniejsza ryzyko wczesnej rezygnacji nowej osoby.</div>
</div>

<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">Przykład z życia — zespół Adama i spadek rotacji po zmianie onboardingu <span class="ico">+</span></div>
  <div class="acc-b"><p>Zespół Adama miał wysoką rotację nowych osób w pierwszym miesiącu — ludzie odchodzili, mówiąc że czuli się zostawieni sami sobie. Po wprowadzeniu struktury z asystą w pierwszym tygodniu i codziennymi krótkimi check-inami, liczba osób rezygnujących w pierwszym miesiącu wyraźnie spadła — nowi ludzie czuli, że mają na kogo liczyć, zamiast uczyć się wszystkiego metodą prób i błędów w pojedynkę.</p></div>
</div>

<div class="quiz">
  <div class="q">Zatrudniłeś nową osobę do zespołu. Jak najlepiej wygląda jej pierwszy tydzień pracy?</div>
  <button class="opt" data-ok="0" onclick="quizPick(this,false,'','Rzucenie nowej osoby od razu na samodzielną pracę bez wsparcia jest jednym z głównych powodów wczesnej rotacji.')">Od razu samodzielna praca, żeby szybko się nauczyła w praktyce</button>
  <button class="opt" data-ok="1" onclick="quizPick(this,true,'Dobrze — obserwacja doświadczonego kolegi w pierwszym tygodniu daje bezpieczny start bez poczucia porażki od pierwszego dnia.','')">Towarzyszenie doświadczonemu koledze i obserwacja, zanim zacznie działać samodzielnie</button>
  <div class="fb"></div>
</div>
`;

CONTENT.edmondson = `
<img class="mod-icon reveal" src="https://media.base44.com/images/public/69cd0d788375531a373c98b1/492b840c0_generated_image.png" alt="" loading="lazy">
<span class="eyebrow">Moduł 11 · Budowanie zespołu</span>
<h2>Amy Edmondson: bezpieczeństwo psychologiczne w zespole</h2>
<p class="lede">Profesorka Harvard Business School odkryła, że najlepsze zespoły łączy jedna cecha — ludzie nie boją się przyznać do błędu ani zadać „głupiego" pytania.</p>

<h3>Czym jest bezpieczeństwo psychologiczne</h3>
<p>Amy Edmondson zdefiniowała bezpieczeństwo psychologiczne jako wspólne przekonanie w zespole, że można podjąć ryzyko interpersonalne — przyznać się do błędu, zadać pytanie, zgłosić problem — bez obawy przed upokorzeniem czy karą. To nie oznacza braku wysokich standardów — najlepsze zespoły łączą wysokie standardy z wysokim bezpieczeństwem psychologicznym.</p>

<div class="tiles">
  <div class="tile"><div class="big">Zgłaszanie błędów</div><div class="lbl">zespół z bezpieczeństwem psychologicznym zgłasza problemy szybciej, zanim urosną</div></div>
  <div class="tile"><div class="big">Wysokie standardy</div><div class="lbl">bezpieczeństwo psychologiczne NIE oznacza obniżania oczekiwań co do wyników</div></div>
</div>

<h3>Jak budować to w zespole sprzedaży</h3>
<p>Gdy handlowiec popełni błąd i sam go zgłosi, zareaguj najpierw doceniając to, że powiedział o tym otwarcie, dopiero potem omawiając samą sytuację. Jeśli reakcją na każdy zgłoszony błąd jest wyłącznie krytyka, zespół szybko nauczy się ukrywać problemy zamiast je zgłaszać — a to znacznie gorsze niż sam błąd.</p>

<div class="scene">
  <div class="scene-title">Źle — kara za przyznanie się do błędu</div>
  <div class="bubble c"><span class="who">Handlowiec</span>Szefie, chyba źle przekazałem klientowi warunki umowy, muszę to sprostować.</div>
  <div class="bubble c"><span class="who">Manager</span>(zirytowany) Jak mogłeś to spartolić, to poważny problem!</div>
  <div class="scene-title">Dobrze — docenienie otwartości</div>
  <div class="bubble c"><span class="who">Handlowiec</span>Szefie, chyba źle przekazałem klientowi warunki umowy, muszę to sprostować.</div>
  <div class="bubble c"><span class="who">Manager</span>Dobrze, że od razu mi to zgłosiłeś — zastanówmy się razem, jak to naprawić.</div>
  <div class="note">Docenienie otwartego zgłoszenia błędu, zanim przejdziesz do jego rozwiązania, buduje zespół, który zgłasza problemy szybko, zamiast je ukrywać.</div>
</div>

<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">Przykład z życia — zespół Marty i ukryty problem <span class="ico">+</span></div>
  <div class="acc-b"><p>W zespole Marty przez pewien czas panowała kultura ostrej krytyki za każdy błąd. Efekt był odwrotny do zamierzonego — ludzie zaczęli ukrywać drobne pomyłki, które z czasem urosły do poważniejszych problemów, zanim ktokolwiek się o nich dowiedział. Po świadomej zmianie reakcji na błędy — docenianie zgłoszenia, zanim przejdzie się do naprawy — zespół zaczął zgłaszać problemy dużo wcześniej, co pozwoliło rozwiązywać je, zanim urosły.</p></div>
</div>

<div class="quiz">
  <div class="q">Handlowiec sam zgłasza Ci, że popełnił błąd w rozmowie z klientem. Jak reagujesz zgodnie z ideą bezpieczeństwa psychologicznego?</div>
  <button class="opt" data-ok="0" onclick="quizPick(this,false,'','Ostra krytyka za zgłoszony błąd uczy zespół ukrywania problemów zamiast ich zgłaszania, co szkodzi długoterminowo.')">Krytykuję ostro, żeby taki błąd się więcej nie powtórzył</button>
  <button class="opt" data-ok="1" onclick="quizPick(this,true,'Dobrze — docenienie otwartego zgłoszenia buduje zespół, który zgłasza problemy szybko, zanim urosną.','')">Doceniam, że od razu mi zgłosił, i wspólnie ustalamy jak to naprawić</button>
  <div class="fb"></div>
</div>
`;

CONTENT.lencioni = `
<img class="mod-icon reveal" src="https://media.base44.com/images/public/69cd0d788375531a373c98b1/8ccd8457b_generated_image.png" alt="" loading="lazy">
<span class="eyebrow">Moduł 12 · Budowanie zespołu</span>
<h2>Patrick Lencioni: pięć dysfunkcji zespołu</h2>
<p class="lede">Autor bestsellera o zespołach pokazał, że dysfunkcje układają się w piramidę — każda wyższa warstwa problemu wynika z tej poniżej, nierozwiązanej.</p>

<h3>Piramida pięciu dysfunkcji</h3>
<div class="tiles">
  <div class="tile"><div class="big">1. Brak zaufania</div><div class="lbl">fundament — ludzie ukrywają słabości i obawy przed sobą nawzajem</div></div>
  <div class="tile"><div class="big">2. Strach przed konfliktem</div><div class="lbl">bez zaufania nikt nie odważy się na zdrową, otwartą debatę</div></div>
  <div class="tile"><div class="big">3. Brak zaangażowania</div><div class="lbl">bez debaty decyzje nie są w pełni akceptowane przez zespół</div></div>
  <div class="tile"><div class="big">4. Unikanie odpowiedzialności</div><div class="lbl">bez zaangażowania nikt nie rozlicza się z ustaleń</div></div>
</div>
<p>Patrick Lencioni, autor „The Five Dysfunctions of a Team", pokazał w formie piramidy, że problemy z wynikami zespołu (piąta, najwyższa dysfunkcja) niemal zawsze wynikają z nierozwiązanego problemu na niższym poziomie — a najczęściej wszystko zaczyna się od braku prawdziwego zaufania między ludźmi.</p>

<h3>Jak budować zaufanie jako fundament</h3>
<p>Zaufanie w zespole buduje się, gdy ludzie widzą, że mogą pokazać słabość — przyznać się, że czegoś nie wiedzą lub popełnili błąd — bez utraty szacunku innych. Manager, który sam przyznaje się do własnych pomyłek na forum zespołu, daje innym pozwolenie na to samo.</p>

<div class="scene">
  <div class="scene-title">Źle — ignorowanie fundamentu zaufania</div>
  <div class="bubble c"><span class="who">Manager</span>(skupia się wyłącznie na wynikach, ignorując napięte relacje w zespole)</div>
  <div class="scene-title">Dobrze — budowanie zaufania od podstaw</div>
  <div class="bubble c"><span class="who">Manager</span>(na spotkaniu zespołu) Chcę przyznać, że w zeszłym miesiącu źle oszacowałem prognozę — czego się z tego nauczyłem...</div>
  <div class="note">Manager, który sam pokazuje słabość, daje zespołowi pozwolenie na budowanie prawdziwego zaufania, fundamentu zdrowych relacji.</div>
</div>

<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">Przykład z życia — zespół Grzegorza i cicha rywalizacja <span class="ico">+</span></div>
  <div class="acc-b"><p>Zespół Grzegorza miał dobre wyniki liczbowe, ale wyraźnie brakowało w nim otwartości — ludzie unikali podważania pomysłów innych, nawet gdy widzieli w nich problem, co prowadziło do słabych decyzji zespołowych. Grzegorz zaczął od siebie — regularnie dzielił się własnymi niepewnościami i błędami na forum zespołu. Po kilku miesiącach zespół zaczął otwarciej się ze sobą nie zgadzać, co realnie poprawiło jakość wspólnych decyzji.</p></div>
</div>

<div class="quiz">
  <div class="q">Zgodnie z piramidą Lencioniego, co jest fundamentem, od którego zależą wszystkie wyższe poziomy funkcjonowania zespołu?</div>
  <button class="opt" data-ok="0" onclick="quizPick(this,false,'','Same wyniki to najwyższy poziom piramidy - wynikają one z rozwiązania wszystkich niższych dysfunkcji, poczynając od zaufania.')">Same wyniki liczbowe zespołu</button>
  <button class="opt" data-ok="1" onclick="quizPick(this,true,'Dokładnie — prawdziwe zaufanie jest fundamentem, bez którego niemożliwy jest zdrowy konflikt, zaangażowanie i odpowiedzialność.','')">Prawdziwe zaufanie między członkami zespołu</button>
  <div class="fb"></div>
</div>
`;
