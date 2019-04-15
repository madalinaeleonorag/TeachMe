var text = {
  chapters: [
    {
      id: "1",
      title: "Introducere",
      theory: `Serviciile de securitate sunt o categorie din serviciile de retea, oferite ca module parte din sistemul de operare in multiple tipuri de programe software. Acestea fie fac parte din anumite programe sau sunt oferite independente. De asemenea unele din aceste servicii se pot implementa si direct in circuitele unor componente hardware.
      Aplicarea masurilor de securitate se justifica pentru datele sensibile, care trebuie intr-adevar protejate, deoarece implementarea lor este costisitoare din punct de vedere al preturilor si resurselor. 
      Lucrarea contine o scurta prezentare a unor modele de securitate si aplicarea lor la nivel de retea. 
      Alegerea serviciilor este conditionata de natura informatiilor si de costurile aferente. 
      Alegerea unei strategii eficiente de securizare implica prevenirea riscurilor de expunere si acoperirea punctelor vulnerabile pentru a adapta solutia de securitate la nevoile fiecarei retele si a reduce costurile.
      Cateva din serviciile de securitate sunt: 
      <ul>
      <li><span style="background-color: yellow;">Autentificarea</span> - mecanism de identificare a unui utilizator uman, echipament sau program software;</li> 
      <li>Autorizare – reprezinta incadrarea, delimitarea accesului acordat unui utilizator la date sau programe, dupa ce procesul de autentificare se incheie cu succes;</li> 
      <li>Disponibilitatea - este serviciul care manageriaza accesul utilizatorilor la alte servicii prin intermediul grupurilor;</li> 
      <li>Confidentialitatea - reprezinta protectia datelor cu caracter privat;</li> 
      <li>Integritatea - se refera la pastrarea datelor in stare nealterata;</li> 
      <li>Nerepudierea - reprezinta preventia impersonarii unui alt cont pentru a executa actiuni cu scop de frauda.</li> 
      </ul> 
      `,
      questions: [
        {
          question: "question 1 text",
          type: "fill the gap",
          id: "1",
          answers: [{
            answer: "answer 1",
            correct: false
          },
          {
            answer: "answer 2",
            correct: false
          },
          {
            answer: "answer 3",
            correct: false
          },
          {
            answer: "answer 4",
            correct: true
          }]
        }
      ]
    },
    {
      id: "2",
      title: "Factori si delimitari",
      theory: `
        Cativa din factorii care afecteaza costurile serviciilor de Securitate sunt:
        <ol>
          <li>Mediul de transmisie fizic</li>
          <li>Performantele echipamentelor din retea</li>
          <li>Performantele pachetelor (aplicatii/sistem de operare) software folosite</li>
          <li>Nivelul de securizare prin criptare a datelor.</li>
        </ol>
        Este importanta ierarhizarea si clasificarea datelor stocate sau transferate în retea în vederea securizarii corespunzatoare.
        Dupa criteriul de proprietate, informatiile se împart în:
        <ul>
          <li>informatii de utilizator;</li>
          <li>informatii de retea.</li>
        </ul>
        Dupa criteriul importantei:
        <ul>
          <li>publice;</li>
          <li>private.</li>
        </ul>
        Dupa criteriul locatiei:
        <ul>
          <li>interne;</li>
          <li>externe.</li>
        </ul>
        Dupa criteriul domeniului de utilizare se definesc urmatoarele categorii:
        <ul>
          <li>publicitare;</li>
          <li>comerciale;</li>
          <li>educationale;</li>
          <li>de divertisment;</li>
          <li>cu sau fara plata;</li>
          <li>guvernamentale;</li>
          <li>militare.</li>
        </ul>
      `,
      questions: [
        {
          question: "question 1 text",
          type: "fill the gap",
          id: "1",
          answers: [{
            answer: "answer 1",
            correct: false
          },
          {
            answer: "answer 2",
            correct: false
          },
          {
            answer: "answer 3",
            correct: false
          },
          {
            answer: "answer 4",
            correct: true
          }]
        }
      ]
    },
    {
      id: "3",
      title: "Securitatea fizica",
      theory: `
      Securitatea fizica reprezinta nivelul exterior al modelului de securitate si consta, în general, în protectia "sub cheie" a echipamentelor informatice într-un birou sau într-o alta incinta precum si asigurarea pazei si a controlului accesului.
      Conform statisticilor 80 % din atacuri pornesc din interiorul retelei. Deoarece sistemele din retea sunt complexe si sunt folosite multe echipamente, de regula calculatoare, este greu sa se obtina o imagine completa a tuturor operatiilor si entitatilor active la un moment dat in cadrul retelei. Din acest motiv, retelele de comunicatii prezinta un grad ridicat de dificultate cu privire la administrarea lor in mod eficient, fiind vulnerabile la atacuri interne si externe.
      Aceasta acest grad de complexitate este generat de: administrarea multi-organizatie pentru aceeasi retea, raspandirea geografica, diversitatea tipurilor de echipamente, a sistemelor de operare si numarul ridicat de entitati existente in aceeasi retea. 
      Angajatii care se administreaza reteaua trebuie sa respecte si sa asigure regulile de buna functionare si securitate fizica delimitate de politica de securitate: 
        <ul>
      <li>echipamentele si cablurile folosite in retea trebuie sa fie montate pe perete pentru a le proteja, în locuri nefolosite frecvent, pentru a evita defectarea lor, fie ea intentionata sau accidentala; 
        <li>serverele trebuie amplasate in camere inchise, cu acces restrans, pentru a le protejat de accesul fizic neautorizat; </li>
        <li>echipamentele trebuie protejate de perturbatii de tensiune electrica, prin folosirea de surse de energie electrica care nu pot fi intrerupte (UPS - Uninterruptible Power Supply), care asigura functionarea in permanenta a echipamentelor cu grad ridicat de importanta; </li>
        <li>accesul fizic trebuie securizat prin diverse echipamente, cum sunt dispozitivele cu chei, carduri si coduri de acces, senzori de identificare biometrica si de miscare (voce, amprente digitale, imaginea retinei/fetei, semnatura, forma mâinii etc) </li>
        </ul>
        Securitatea fizica poate fi asigurata prin: amenajarea corespunzatoare a spatiului din retea, controlul , restrictionarea si monitorizarea video a accesului fizic, detectarea persoanelor necunoscute (IDS = Intrusion Detection System) din spatiile nesupravegheate cu ajutorul sistemelor automate de alarmare (RAI = Remote Alarm Indicator). 
      Masurile de securitate fizica a retelei se stabilesc pe baza analizei vulnerabilitatilor si riscurilor de securitate ale retelei, pe baza politicii de securitate adoptate si se implementeaza de catre grupul de administrare folosind diferite produse software si hardware
      
      `,
      questions: [
        {
          question: "question 1 text",
          type: "fill the gap",
          id: "1",
          answers: [{
            answer: "answer 1",
            correct: false
          },
          {
            answer: "answer 2",
            correct: false
          },
          {
            answer: "answer 3",
            correct: false
          },
          {
            answer: "answer 4",
            correct: true
          }]
        }
      ]
    },
    {
      id: "4",
      title: "Securitatea logica",
      theory: `
      Securitatea logica se refera la protectia accesului logic la resursele si serviciile de retea. Aceasta se realizeaza prin metode si facilitati software care asigura controlul drepturilor de acces si utilizare. 
      Se disting doua mari nivele de securitate logica: 
      <ul>
        <li>securitatea logica a accesului (SLA) care se refera la accesul la sistem/retea, contul de utilizator si la documente (fisiere)</li>
        <li>securitatea logica a serviciilor (SLS) care cuprinde accesul la serviciile de sistem/retea pe baza listelor de asteptare, intrare/iesire de pe disc, controlul si gestionarea serviciilor (management). Controlul serviciilor (CS) monitorizeaza si raporteaza starea serviciilor, activeaza sau dezactiveaza serviciile oferite de sistem si de retea. Drepturile la servicii (DS) stabilesc cine si cum foloseste un anumit serviciu</li>
      </ul>
      <br>
      <i>Securitatea logica a accesului</i>
      <br>
      Sistemul de securitate trebuie sa identifice persoanele autorizate, vizitatorii si categoriile de utilizatori indezirabili, neautorizate.
      Parolele sunt folosite pentru a se permite accesul la calculatoare, la nivel de utilizatori sau grupuri de utilizatori. Sistemul parolelor, totusi, nu ofera un nivel de securitate suficient, indiferent de complexitatea sa, depinzând în mod esential de modul de pastrare a caracterului lor secret. 
      Sporirea SLA pentru conturile de utilizator este realizata prin folosirea unor parole care contin combinatii de caractere aleatoare, relativ lungi, schimbate periodic, accesibile doar persoanelor autorizate si de încredere.
      In sistemul de securitate al retelei se recomanda respectarea unor reguli de manageriere, alegere si pastrare a parolelor, stabilite în cadrul politicii de securitate. Astfel, parolele:
      <ol>
        <li>Sa contina si siruri de caractere alfanumerice - cifre, litere mari si mici, alte caractere, ordonate aleator. Se recomanda parolele lungi, de peste 8 caractere;</li>
        <li>Sa fie schimbate periodic, macar o data la 6 luni;</li>
        <li>Orice parola comuna trebuie schimbata imediat ce o persoana paraseste un grup;</li>
        <li>Sa fie inlocuite imediat ce apar unele banuieli legate de persoane neautorizate sau atunci când secretul lor a trebuit sa fie dezvaluit pentru remedierea unei stari de urgenta</li>
        <li>Sa fie tinute minte;</li>
        <li>Sa nu fie afisate pe echipamentele din configuratia sistemului;</li>
        <li>Pentru blocarea operatiunilor de gasire a parolelor si a codurilor de acces prin încercari repetate, de ordinul miilor, echipamentul de retea trebuie sa permita un numar limitat de încercari de introducere a acestora, uzual trei, urmat de perioade de refuz al accesului;</li>
        <li>Odata ce au patruns în sistem, utilizatorilor nu trebuie sa li se permita schimbarea identitatii cu care au efectuat deschiderea sesiunii si nici sa acceseze documente sau resurse alocate altor utilizatori;</li>
        <li>Pentru orice terminal folosit o perioada indelungata, accesul trebuie resetat la intervale regulate de timp pentru a se asigura ca nu este impersonat accesul la sistem;</li>
        <li>La deschiderea unei noi sesiuni de lucru, utilizatorului trebuie sa i se aduca la cunostinta când a fost accesat ultima data sistemul cu parola respectiva.</li>
      </ol>
      <br>
      <i>Securitatea logica a serviciilor</i>
      <br>
      Serverul de autentificare verifica parola (introdusa de la tastatura / pe baza unui card) folosind liste de control de. Folosind un nume de utilizator si o parola, unei persoane i se poate permite accesul garanta respectarea privilegiilor existente la anumite resurse ale sistemului, printre care: drept de citire, scriere, executie, stergere.
      Sistemele de operare recente ofera modalitati de administrare a drepturilor pe fisiere pentru anumiti utilizatori sau grupuri de utilizatori. Aceste sisteme au capacitatea de a controla operatiile ce pot fi realizate asupra fisierelor din sistem. 
      In permanenta trebuie monitorizat accesul la servicii si resurse pentru a identifica eventualele tentative/evenimente cu scop de frauda, prin "depasirea" restrictiilor impuse de catre utilizatorii autorizati ai retelei. Pentru un numar mare de utilizatori activi la un anumit moment în retea, este necesara utilizarea unor programe de securitate cu facilitati de monitorizare automata a accesului la servicii si resurse, precum si de solutionare automata a evenimentelor de securitate, urmata eventual de restrictionarea accesului si chiar excluderea acestora din retea. Restrictiile pot fi impuse pe diferite criterii: adrese de retea, adrese MAC, porturi logice, nume de utilizatori, temporale, ierarhice. 
      `,
      questions: [
        {
          question: "question 1 text",
          type: "fill the gap",
          id: "1",
          answers: [{
            answer: "answer 1",
            correct: false
          },
          {
            answer: "answer 2",
            correct: false
          },
          {
            answer: "answer 3",
            correct: false
          },
          {
            answer: "answer 4",
            correct: true
          }]
        }
      ]
    },
    {
      id: "5",
      title: "Securitatea informatiilor",
      theory: `
      Criptografia reprezinta o ramura a matematicii, care se ocupa cu secretizarea, autentificarea si restrictionarea accesului la informatii într-un sistem informatic. În realizarea acestora se utilizeaza metode matematice, bazate de exemplu pe dificultatea factorizarii numerelor foarte mari. 
      Criptarea (encryption) este procesul de conversie a informatiei initiale (text în clar - plaintext - M) într-un text care nu poate fi citit de oameni (text cifrat - ciphertext - C), cu ajutorul unei chei de criptare (KE).
      Decriptarea (decryption) este inversul criptarii, adica, trecerea de la textul cifrat, neinteligibil, la textul original, cu ajutorul unei chei (KD).
      <i>Criptarea cu cheie secreta</i>
      Sistemele cu criptare conventionale au fost concepute pe principiul cheii secrete, cu o functie de criptare inversabila cunoscuta doar de utilizatori. Cheia secreta reprezinta punctul vulnerabil al sistemului deoarece, odata aflata, securitatea tuturor informatiilor transmise este compromisa. Decriptorul aplica functia inversa pentru deducerea secventei originale, folosind aceeasi cheie ca la criptare.
      <i>Criptarea cu cheie publica</i>
      Acest tip de criptare se mai numeste si criptare asimetrica si utilizeaza o pereche de chei. Una dintre aceste chei, cheia publica (KE), este utilizata pentru criptarea informatiilor si se caracterizeaza prin faptul ca este distribuita în reteaua publica de comunicatii, în timp ce cealalta cheie, numitacheia secreta (KD), folosita pentru decriptarea informatiilor trebuie sa aiba caracter secret. Din cheia publica, este imposibil sa se determine cheia secreta.
      Cheilor publice le corespund chei private, care trebuie securizate întotdeauna si transmise pe canale de comunicatii securizate. Unul dintre mecanismele utilizate pentru stocarea cheii private este cardul inteligent (smart card), un dispozitiv electronic asemanator unei carti de credit. Un card criptografic are abilitatea de a genera si stoca chei. 
      <i>Managementul cheilor</i>
      Modalitatea de distribuire si pastrare în mod securizat a cheilor utilizate pentru criptare si decriptare  este una dintre problemele fundamentale atât în sistemele de criptografice cu cheie publica, cât si în cele cu cheie secreta, o reprezinta. 
      Componenta de gestiune a cheilor include mai multe aspecte: 
      <ul>
        <li>Generarea la secret a cheilor;</li>
        <li>Distributia securizata a cheilor;</li>
        <li>Stocarea, eventual arhivarea cheilor în mod securizat;</li>
        <li>Pastrarea istoricului utilizarii cheilor (cine si ce chei a folosit deja) prin procesul de audit al cheilor;</li>
        <li>Eliminarea cheilor deja compromise.</li>
      </ul>
      Orice sistem de securitate depinde si de capacitatea de a acomoda (scalabilitate) un numar crescut de utilizatori.
      Pentru trimiterea unui mesaj criptat catre mai multi destinatari folosind aceeasi cheie criptata, toti trebuie sa primeasca cheia prin care sa se poata decripta mesajul. Astfel, expeditorul trebuie sa se asigure de faptul ca toti destinatarii receptioneaza cheia, ca aceasta nu este interceptata sau compromisa în timpul tranzitului si ca este pastrata în mod securizat la destinatie. Pentru fiecare mesaj nou trimis, procesul trebuie sa se repete, cu exceptia faptului când se doreste reutilizarea cheii initiale. 
      Nici serverul care intermediaza transferul nu trebuie sa cunoasca secventele-cheie folosite la criptare. Astfel sunt necesare mecanisme specializate de distributie a cheilor. De asemenea, este necesara dubla autentificare, a clientilor catre server si a serverului de chei catre clienti, pentru a se evita patrunderea în retea a unor intrusi neautorizati. 
      <i>Integritatea informatiei</i>
      Termenul semnifica faptul ca informatiile nu pot fi create, modificate sau sterse fara autorizatie. 
      Integritatea informatiei se poate asigura prin mai multe metode: tehnica rezumatului, semnatura digitala , certificatul digital, marcarea continutului. 
      <i>Tehnica Hash</i>
      Functia hash are scopul de a verifica si asigura ca datele transmise la intrarea în retea sunt aceleasi cu cele primite la destinatie. În urma aplicarii unei functii hash la un pachet de date, înainte de transmisie, va rezulta o valoare fixa, care este apoi recalculata la receptie. În cazul în care cele doua valori sunt identice, se trage concluzia ca datele nu au fost alterate. Daca datele sunt modificate în tranzit, la destinatie se va obtine o alta valoare de transformare, ceea ce va indica falsificarea datelor. 
      Functiile hash se clasifica în doua mari categorii: coduri de detectie modificate (MDCs) si coduri de autentificare a mesajelor (message authentication codes -MACs).
      <i>Semnatura digitala</i>
      Sunt un tip de criptare asimetrica, asemanator semnaturilor de mâna, folosite pentru a identifica un individ din punct de vedere legal. Ele pot identifica persoana care a semnat o tranzactie sau un mesaj, dar spre deosebire de semnaturile de mâna, poate ajuta în verificarea faptului ca un document sau o tranzactie nu a fost modificata fata de starea originala din momentul semnarii. 
      Schema unei semnaturi digitale consta din 3 algoritmi: algoritmul de generare a cheii, algoritmul de semnare, algoritmul de verificare a cheii.
      Functiile hash, cu sau fara cheie, pot fi utilizate pentru securizarea accesului la retea, pentru criptarea datelor si verificarea integritatii acestora.
      <i>Certificatul digital</i>
      Este un mecanism care sa stabileste o legatura între cheia publica si utilizatorul real, pentru a avea garantia ca o cheie publica utilizata pentru a crea o semnatura digitala apartine într-adevar unui anumite persoane si ca acea cheie este înca valida, este necesar. Acest serviciu de autenticitate este oferit de certificatele digitale. 
      Certificatele digitale pot fi generate folosind chei publice sau chei private.
      Certificatele digitale pot oferi un nivel ridicat de încredere asupra faptului ca persoana al carei nume apare pe acel certificat are ca si corespondent o anumita cheie publica. Aceasta încredere este realizata prin utilizarea unei terte parti, cunoscuta sub numele de autoritate de certificare (CA - Certificate Authority). O autoritate de certificare semneaza un certificat în calitate de garant pentru identitatea persoanei careia îi apartine certificatul respectiv. 
      Elementele unui certificat digital definite de acest standard sunt urmatoarele: 
      <ul>
        <li>versiunea certificatului (certificate version);</li>
        <li>numarul de serie (serial number); </li>
        <li>numele emitentului (issuer name); </li>
        <li>perioada de valabilitate (period of validity);</li>
        <li>numele proprietarului certificatului (subject); </li>
        <li>cheia publica si algoritmul cheii publice (subject's public key info); </li>
        <li>un câmp optional pentru identificarea subiectului (subject unique identifier); </li>
        <li>un câmp optional utilizat pentru extensii (extensions);</li>
        <li>algoritmul folosit pentru semnarea certificatului (certificate signature algorithm); </li>
        <li>semnatura (signature). 
      </ul>
      <i>Marcarea</i>
      Autenticitatea unui document se poate asigura prin marcaje. Acestea sunt sunt acele elemente distinctive, greu de reprodus, care pot fi folosite deasemenea si pentru identificarea autorului. 
      Marcajele pot fi vizibile sau ascunse, transparente (watermark). Marcajele pentru imaginile digitale sunt tratate ca manipulari ale celor mai putin semnficativi biti din esantioanele de imagine (LSB - Least Significant Bits), coduri ascunse de marcare, texturi invizibile, constrângeri secrete în domenii de transformare etc
      Marcajele sunt generate în mod privat si pot fi detectate folosind chei private sau publice, în functie de întrebuintarea lor. 
      Pentru protejarea dreptului de autor (copyright) se foloseste un marcaj specific, denumit si stampila invizibila, care contine o informatie despre proprietarul legal sau este un semn aleator de unicitate pentru respectivul proprietar. 
      Marcajele pentru protejarea informatiei se folosesc astfel:
      <ul>
        <li>fiecare proprietar de copyright detine un set de numere/un numar unic, care constituie cheia privata a marcajului; </li>
        <li>folosind cheia privata impreuna cu un algoritm public/privat, proprietarul dreptului de autor modifica datele digitale care sunt marcate; </li>
        <li>folosind un algoritm de detectie, proprietarul de copyright poate verifica/decoda modificarile facute de el însusi. </li>
      </ul>
      Marcajele de autenticitate, in cazul produselor digitale, sunt de fapt semnaturile digitale. Autenticitatea face referire la un produs original cu privire la originalitatea continutului, numele autorului, data la care a fost creat, proprietarul dreptului de autor etc. Marcarea cu ajutorul semnaturii digitale asigura autenticitatea sursei din care provine un produs digital sau un mesaj transmis în retea si elimina riscul ca acesta sa fie un fals.
      `,
      questions: [
        {
          question: "question 1 text",
          type: "fill the gap",
          id: "1",
          answers: [{
            answer: "answer 1",
            correct: false
          },
          {
            answer: "answer 2",
            correct: false
          },
          {
            answer: "answer 3",
            correct: false
          },
          {
            answer: "answer 4",
            correct: true
          }]
        }
      ]
    },
    {
      id: "6",
      title: "Politici de Securitate",
      theory: `
      Acestea sunt principiile care stau la baza asigurarii securitatii unei retele de comunicatii si sunt exprimate sub forma unui set de reguli si practici.
      Astfel, trebuie stabilite necesitatile fiecarei categorii de utilizatori cu privire la resursele retelei si drepturile de acces, din interiorul sau din exteriorul acesteia, folosind structura cablata sau accesul wireless la retea. De asemenea, trebuie stabilit care dintre utilizatori au cu adevarat nevoie de acces la reteaua publica de Internet. toate aceste aspecte sunt tratate în cadrul politicii de acces. 
      O bresa în securitatea oricarei retele o reprezinta conexiunea la Internet si la reteaua publica în general deoarece pe aici actioneaza atacurile lansate din afara retelei. Sunt necesare principii clare de securizare a interfetelor dintre reteaua publicasi cea privata. Principiile conform carora se securizeaza caile de acces la Internet si se acorda drepturi în acest sens alcatuiesc politica de acces la Internet (I-AUP - Internet Acceptable Use Policy). 
      Folosirea metodei de autentificare pe baza de nume de utilizator si parola implica aplicarea unor principii de acceptare, gestionare si schimbare a parolelor în cadrul politicii de management a parolelor.
      Drepturile de acces la retea trebuie diferentiate în ceea ce priveste accesul la documente si drepturile asupra acestora (citire, scriere, modificare sau stergere). 
      Cunoasterea în detaliu a tuturor echipamentelor care se conecteaza la retea si a garantiilor pe care le ofera fiecare utilizator constituie premiza unor decizii juste cu privire la privilegiile sau restrictiile care se impun în fiecare caz în parte (politica de conectare). 
      Refuzul accesului la retea pentru acele entitati pentru care se dovedeste intentia de atac, prin monitorizarea traficului, constituie o masura de forta majora, necesara mentinerii functionarii retelei în conditii de siguranta. 
      Vulnerabilitatile de securitate sunt cauzate de diversi factori, printre care neactualizarea sistemelor de operare, programelor antivirus sau a altor programe sau module de securitate. Periodic se impune instalarea celor mai noi versiuni de software, actualizarea bazelor de date cu semnaturile virusilor noi aparuti sau ale altor forme de atac recent identificate. De asemenea, periodic, personalul implicat în asigurarea securitatii retelei trebuie instruit pentru a cunoaste eventualele noi riscuri la care este expusa reteaua si procedurile care trebuie urmate pentru solutionarea problemelor. 
      Periodic trebuie revizuite configurarile diferitelor echipamente din retea pentru a stabili daca ele corespund nevoilor de securitate ale retelei de la un anumit moment, inclusiv parole, liste de control al accesului, adrese MAC, chei de criptare. 
      Criptarea informatiilor se impune ca masura ultima de asigurare a secretului transmisiei, în situatia în care un intrus reuseste sa descarce pachete din reteaua privata. De asemenea, criptarea reprezinta o masura de siguranta în ceea ce priveste secretul unor informatii cu caracter special, care poate fi atacat de persoane din exteriorul dar si din interiorul retelei. Principiile de securizare a informatiilor sunt incluse în politica de protectie a informatiilor.
      Retelele VPN (Virtual Private Network) reprezinta o buna solutie de securitate, adoptata cu precadere de companii cu mai multe sedii raspândite într-o arie geografica larga. Accesul de la distanta prezinta de cele mai multe ori riscuri mari de securitate cauzate de tentative de atac ale unor persoane din afara companiei fiind necesara securizarea pe baza unor principii clare privind drepturile si restrictiile de acces de la distanta (remote access) si tacticile de securitate care trebuie adoptate conform politicii de acces de la distanta. 
      Politici de securitate specifice se pot stabili pentru fiecare serviciu de retea în parte (posta electronica, transfer de fisiere, aflarea informatiilor despre utilizatorii retelei etc). 
      Regulile de securitate pot avea caracter obligatoriu sau facultativ rezultând mai multe categorii de prevederi de securitate: 
      <ul>
        <li>prevederile obligatorii, rezultate ca efect al acordurilor, al regulamentelor si al legilor, exprimate detaliat, cu cât mai multe elemente specifice, în functie de domeniul de utilizare, au rolul de a oferi sigurantasi încredere într-o retea de comunicatii sau o anumita entitate (server, serviciu, program etc);</li>
        <li>prevederile recomandate, desi neobligatorii, sunt motivate de consecintele grave ale neaplicarii lor. Pentru o securitate cât mai buna a retelei, acestea trebuie considerate ca si obligatorii desi costurile implementarii lor sunt în general mari. De exemplu, nu este obligatorie rularea programelor de tip antivirus si nici instalarea tuturor patch-urilor de securitate din sistemele de operare. toate acestea implica unele costuri suplimentare (pret, memorie de sistem, timp de procesare) dar într-o retea fiecare nod nesecurizat corespunzator poate fi o poarta de acces pentru atacatori;</li>
        <li>prevederile informative au rolul de a atentiona (warning) utilizatorii asupra existentei unor vulnerabilitati (de exemplu, neactualizarea listelor cu virusi pentru programele antivirus), asupra riscurilor si consecintelor breselor de securitate ale sistemelor si retelelor. </li>
      <ul>
      `,
      questions: [
        {
          question: "question 1 text",
          type: "fill the gap",
          id: "1",
          answers: [{
            answer: "answer 1",
            correct: false
          },
          {
            answer: "answer 2",
            correct: false
          },
          {
            answer: "answer 3",
            correct: false
          },
          {
            answer: "answer 4",
            correct: true
          }]
        }
      ]
    },
    {
      id: "7",
      title: "Vulnerabilitatea retelelor",
      theory: `
      Deoarece o retea de comunicatii este un sistem complex, eterogen, cu foarte multi utilizatori, ea reprezinta o zona convenabila pentru diferite atacuri. De aceea, securitatea reprezinta un obiectiv operational vital al oricarei retele de comunicatii. 
      Retelele de calculatoare ale diferitelor organizatii sunt utilizate atât pentru realizarea comunicatiilor dintre angajati, cât si pentru comunicatii externe, astfel încât acestea nu mai pot fi izolate si trebuie securizate la nivelul interfetelor de acces dintre reteaua publicasi cea privata. 
      În functie de vulnerabilitatile retelei de comunicatii pe care le pot exploata, atacurile se pot manifesta pe mai multe planuri: 
      <ul>
        <li>accesare neautorizata a retelei sau a unor resurse ale acesteia din interiorul organizatiei sau din afara acesteia;</li>
        <li>tentative de perturbare sau de întrerupere a functionarii retelei la nivel fizic;</li>
        <li>modificarea sau distrugerea informatiei, adica atacul la integritatea fizica datelor;</li>
        <li>tentative de întrerupere sau de încarcare excesiva a traficului din retea prin transmiterea unui numar foarte mare de pachete catre unul sau mai multe noduri din retea (flooding), atacuri soft asupra echipamentelor de retea care concentreaza si dirijeaza fluxurile în noduri critice (switch, router, access point etc) prin modificarea fisierelor de configurare si a drepturilor de acces stabilite de personalul autorizat;</li>
        <li>preluarea si folosirea neautorizata a informatiilor, adica încalcarea confidentialitatii si a dreptului de autor.</li>   
      </ul>
      `,
      questions: [
        {
          question: "question 1 text",
          type: "fill the gap",
          id: "1",
          answers: [{
            answer: "answer 1",
            correct: false
          },
          {
            answer: "answer 2",
            correct: false
          },
          {
            answer: "answer 3",
            correct: false
          },
          {
            answer: "answer 4",
            correct: true
          }]
        }
      ]
    },
    {
      id: "8",
      title: "Tipuri de atacuri",
      theory: `
      Tinând cont de locul de unde se executa, atacurile pot fi: locale (local), de la distanta (remote). 
      O alta clasificare a atacurilor adresate retelelor de comunicatii, în functie de modul în care actioneaza acestea, ca sursa si destinatie, atacurile pot fi centrate pe o singura entitate (de exemplu, este atacat un anumit server din retea de pe un singur echipament) sau pot fi distribuite (lansate din mai multe locatii sau catre mai multe masini simultan). 
      Atacurile distribuite sunt cele mai performante deoarece este dificila identificarea si localizarea autorilor, iar efectele lor sunt maximizate prin atacarea retelei în mai multe noduri simultan. 
      Dupa modul de interactiune a atacatorului cu informatia obtinuta în urma unui atac reusit, se disting doua categorii de atacuri: pasive si active. Este greu de spus care dintre acestea are un risc mai mare. La o prima vedere, s-ar crede ca cele mai periculoase sunt atacurile active. Dar sa nu uitam atacurile pasive prin care se preiau chei de criptare fara ca serverul de chei sa îsi dea seama care sunt cheile compromise. toate informatiile criptate cu acele chei devin astfel complet neprotejate. 
      Cu toate ca nu exista solutii care sa fie capabile sa protejeze reteaua împotriva oricarui tip de atac, exista unele sisteme de securitate care pot reduce substantial sansele si efectele atacurilor. Se impune dezvoltarea unei politici de securitate adecvate fiecarei retele în parte, aplicarea ei simultan cu educatia utilizatorilor si adoptarea unor solutii de securitate, software sau hardware, potrivite vulnerabilitatilor si riscurilor de atac specifice fiecarei retele.
      <i>Atacuri locale</i>
      Atacurile locale presupun spargerea securitatii unei retele de calculatoare de catre o persoana care face parte din aceasta, adica de catre un utilizator local. 
      Acesta dispune de un cont si de o parola de utilizator care îi dau drept de acces la o parte din resursele sistemului. De asemenea, persoana respectiva poate sa aiba cunostinte despre arhitectura sistemului de securitate al retelei, putând astfel lansa atacuri mult mai periculoase.
      Riscul de atac local poate fi redus în diferite moduri: 
      <ul>
        <li>acordarea utilizatorilor locali privilegiile minim necesare efectuarii sarcinilor zilnice, potrivit functiei si rolului fiecaruia în companie; </li>
        <li>monitorizarea activitatilor din retea pentru a sesiza eventualele încercari de depasire a atributiilor, eventual si în afara orelor de program; </li>
        <li>impunerea de restrictii de acces pe cele mai importante echipamente din retea; </li>
        <li>distribuirea responsabilitatilor mari între mai multi angajati. </li>
      </ul>
      <i>Atacuri la distanta</i>
      Atacul la distanta (remote attack) este un atac lansat împotriva unei retele de comunicatii sau a unui echipament din retea, fata de care atacatorul nu detine nici un fel de control.
      Atacul de la distanta se poate realiza în trei etape: 
      <ol>
        <li>Prima etapa este una de informare în care atacatorul trebuie sa descopere informatii despre: administratorul retelei, echipamentele din retea si functiile acestora, sisteme de operare folosite, puncte de vulnerabilitate, topologia retelei, politici de securitate etc. Aceasta etapa este considerata un atac în sine, denumit atac de recunoastere (reconnaissance), si consta în maparea neautorizata a unui sistem informatic, a serviciilor si a vulnerabilitatilor lui. Este un pas precedent oricarui atac informatic, prin care se identifica porturi deschise, serviciile active, sisteme de operare, aplicatii rulate, versiuni de software;</li>
        <li>A doua etapa este una de testare care presupune crearea unei clone a tintei si testarea atacului asupra acesteia, pentru a se vedea modul în care reactioneaza. Realizând aceste experimente pe un calculator-clona, atacatorul nu atrage atentia asupra sa pe durata simularii iar sansele atacului real, care va fi lansat ulterior, vor fi foarte mari. Daca se fac experimente direct pe tinta reala, pentru atacator exista riscul sa fie detectat si se pot alege cele mai eficiente contramasuri;</li>
        <li>Etapa a treia consta în lansarea atacului asupra retelei. Pentru a avea cele mai mari sanse, atacul trebuie sa dureze putin si sa fie efectuat în intervalele când tinta este mai vulnerabila.</li>
      </ol>
      <i>Atacuri active</i>
      Atacurile active au ca scop furtul sau falsificarea informatiilor transmise ori stocate în retea, reducerea disponibilitatii retelei prin supraîncarcarea acesteia cu pachete (flooding), perturbarea sau blocarea comunicatiilor prin atac fizic sau logic asupra echipamentelor din retea si a cailor de comunicatii.
      Un tip aparte de atac de mascare sau de falsa identitate se produce atunci când atacatorul activeaza în reteaua wireless un echipament neautorizat de tip AP (counterfeiting) care reuseste sa preia date valide de identificare ale utilizatorilor autorizati, în scopul folosirii lor ulterioare pentru accesare neautorizata a retelei asupra careia s-a produs atacul. 
      Refuzul serviciului (DoS Denial-of-service attack), lansat eventual în varianta distribuita (DDoS - Distributed Denial-of-Service), consta într-o supraîncarcare a serverelor cu cereri din partea atacatorului si consumarea resurselor, astfel încât acele servicii sa nu poata fi oferite si altor utilizatori. Ca urmare a acestui atac, conexiunile existente se închid, fiind necesara reautentificarea utilizatorilor. Atacatorul profita de acest moment pentru aintercepta date de identificare valide, informatii despre retea si conturi de utilizare autorizata. 
      Repudierea serviciului (repudiation) este un alt tip de atac asupra retelelor de comunicatii care se produce atunci când o entitate sau un utilizator refuza sa recunoasca un serviciu deja executat. Nerepudierea serviciului (non-repudiation) este foarte importanta în aplicatiile cu plata care necesita servicii de taxare (billing). Daca utilizatorul neaga folosirea serviciului si refuza plata acestuia, furnizorul trebuie sa dispuna de dovezi solide care sa împiedice repudierea serviciului în context legal. 
      <i>Atacuri criptografice</i>
      Atacurile criptografice se aplica direct mesajelor cifrate în vederea obtinerii informatiei originale în clar si/sau a cheilor de criptare si de decriptare.
      Prin definitie, criptanaliza este stiinta spargerii cifrurilor. Criptanalistul este persoana care se ocupa cu criptanaliza mesajelor cu caracter secret. 
      Se cunosc mai multe tipuri de atacuri criptografice: 
      <ul>
        <li>brut (brute force), prin încercarea tuturor combinatiilor posibile fie de chei de criptare, fie de simboluri din text pentru deducerea textului în clar;</li>
        <li>asupra textului criptat (cipher text attack) interceptat, prin analiza caruia se încearca gasirea textului original sau a cheii de criptare;</li>
        <li>asupra unui text cunoscut pentru care s-a aflat criptograma si pe baza caruia se face o extrapolare pentru deducerea iterativa a altor portiuni din mesaj;</li>
        <li>asupra unor texte criptate alese (chosen cipher-text attack), pentru care se obtin criptogramele asociate unor texte folosind algoritmi de criptare cu chei publice si se urmareste aflarea cheilor de decriptare. </li>
      </ul>
      `,
      questions: [
        {
          question: "question 1 text",
          type: "fill the gap",
          id: "1",
          answers: [{
            answer: "answer 1",
            correct: false
          },
          {
            answer: "answer 2",
            correct: false
          },
          {
            answer: "answer 3",
            correct: false
          },
          {
            answer: "answer 4",
            correct: true
          }]
        }
      ]
    },
    {
      id: "9",
      title: "Protocoale si servere de Securitate",
      theory: `
      <i>Protocoale TCP/IP</i>
      Serviciile internet au la baza schimbul de mesaje intre o sursa si un destinatar. Principiul comunicarii este inspirat din sistemul postal. Unitatea de date astfel obtinuta se numeste 'pachet', prin analogie cu sistemul postal obisnuit.
      IP asigura livrarea pachetelor numai daca in functionarea retelelor nu apar erori. Daca un mesaj este prea lung, IP cere fragmentarea lui in mai multe pachete. Transmiterea pachetelor IP se face intre calculatoare gazda si nu direct, intre programele de aplicatie. Din aceste motive, protocolul IP este completat cu un altul, numit TCP (Transmission Control Protocol), care face fragmentarea si asigura transmiterea corecta a mesajelor intre utilizatori. Pachetele unui mesaj sunt numerotate, putandu-se verifica primirea lor in forma in care au fost transmise si reconstituirea mesajelor lungi, formate din mai multe pachete.
      Protocoalele sunt grupate pe nivele. Aceasta grupare respecta principiul stratificarii: protocoalele sunt astfel proiectate incat nivelul N al destinatiei sa primeasca (fara modificari) obiectul transmis de nivelul N al sursei. Pentru respectarea acestui principiu, definitia oricarui protocol trebuie sa stabileasca doua aspecte: formatui unitatilor de date manipulate si actiunile posibile ale entitatilor de protocol care concura la realizarea serviciilor specifice protocolului. 
      Aplicatia sursa din sistemul terminal 1 comunica un mesaj modulului TCP. Acesta construieste un pachet pe care nivelul IP il paseaza ca o datagrama subretelei a. in sistemul intermediar, datagrama ajunge la modulul IP care il ruteaza subretelei b. In sistemul terminal 2, IP extrage mesajul si il transmite aplicatiei receptor prin intermediul modulului TCP. Sa observam ca in sistemul intermediar, pentru receptia dirijarea si retransmiterea datagramelor, sunt necesare doar niveiele IP si interfata de retea.
      <i>Protocoale IPv4</i>
      Datele sunt trimise sub forma unor blocuri de caractere, numite datagrame sau pachete. Fiecare pachet este prefatat de un mic ansamblu de octeti, numit header (”antet”), urmat de datele propriu-zise, ce formeaza continutul pachetului. Dupa sosire la destinatie, datele transmise sub forma unor pachete distincte sunt reasamblate in unitati logice de tip fisier, mesaj etc. internet-ul comuta pachetele pe diferite rute de la sursa la destinatie, numindu-se, de aceea, retea cu comutare de pachete.
      Exista trei cai distincte pentru conectarea a doua claculatoare, folosind protocolul IP. Cele doua calculatoare pot fi in aceeasi retea locala (Ethernet sau Token Ring). In acest caz, pachetele sunt incapsulate in pachetele folosite de protocoalele LAN; Cele doua calculatoare sunt direct legate printr-o linie seriala. Pachetele IP sunt transmise folosind unul din protocoalele SLIP (Serial Line Internet Protocol). CSLIP (Compressed SLIP) sau PPP (Point-to Point Protocol). Daca cele doua calculatoare sunt conectate fiecare la cate o retea locala linia telefonica leaga cele doua LAN-uri prin intermediul unor bridge-uri; Pachetele IP pot fi incapsulate in interiorul altor pachete folosite de alte protocoale retea. 
      <i>Securitatea TCP/IP</i>
      Conectarea unui calculator la internet presupune, in general, folosirea sistemului de operare UNIX si a suitei de protocoale TCP/IP. Aceste componente au propriile lor probleme de securitate, evidentiate in sectiunile anterioare ale cartii. Accesul la internet presupune, insa, si folosirea unui set de cateva zeci de servicii, programe, cu numeroase probleme de securitate, fie datorita unor erori in software, fie datorita neincorporarii unor facilitati de securitate potrivite. in general, pentru ca un utilizator sa poata lua masurile de securitate adecvate la conectarea in retea, el trebuie sa inteleaga modul in care sistemul de operare UNIX lucreaza cu internet -ul. Tocmai de aceea, acest paragraf explica cum functioneaza serviciile TCP/IP si evidentiaza care sunt problemele de securitate ale fiecaruia dintre ele.
      <i>Firewall</i>
      Pentru stiinta calculatoarelor, probabil ca cel mai usor este sa descriem, mai intai, ceea ce un firewall nu este: un firewall nu este un simplu ruter sau un calculator gazda care asigura securitatea unei retele. in linii mari, un firewall (numit uneori si pasarela de securitate) este un sistem care impune o politica de control al accesului intre doua retele. Un firewall reprezinta implementarea acestei politici in termeni de configurare a retelei, unul sau mai multe sisteme gazda si ruter-e cu functiuni speciale, alte masuri de securitate, cum ar fi autentificarea prin metode criptografice a clientilor.
      Deoarece un firewall este dispus la intersectia dintre doua retele, acesta poate fi folosit si in alte scopuri decat acela de control al accesului:
      <ul>
        <li>pentru a monitoriza comunicatiile dintre o retea interna si o retea externa. De exemplu, un firewall poate monitoriza seviciile folosite si cantitatea de date transferata prin conexiuni TCP/IP intre propria organizatie si lumea exterioara;</li>
        <li>un firewall poate fi folosit pentru interceptarea si inregistrarea tuturor comunicatiilor dintre reteaua interna si exterior. O linie inchiriata, care permite viteze de pana la 128 Kbps, in conditiile in care ar fi folosita 100% din timp, ar transfera zilnic circa 1,4GB , ceea ce ar permite ca traficul pe cateva zile sa incapa pe o singura banda magnetica digitala de 8mm;</li>
        <li>daca o organizatie are mai multe retele, separate din punct de vedere geografic, fiecare avand cate un firewall, exista posibilitatea programarii acestor firewall-uri pentru a cripta automat continutul pachetelor transmise intre ele. in acest fel, pe suportul internet, organizatia isi poate realiza propria retea virtuala privata.</li>
      </ul>
      <i>Sisteme de detectie a intrusilor</i>
      Sistemele de detectie a intrusilor (IDS - Intrusion Detection System) sunt o completare a activitatii unui firewall în procesul de securitate a unei retele de comunicatii si constau în solutii pasive de analiza, clasificare si raportare a evenimentelor de retea nedorite. 
      Sistemele IDS detecteaza atacurile asupra retelei, alerteaza personalul de administrare si eventual declanseaza actiuni de raspuns, cum ar fi plasarea în carantina a anumitor procese pâna la clarificarea situatiei. Pot exista si alarme false dar procedurile aplicate în prima faza nu vor face decât sa întârzie anumite transmisii. 
      <i>VPN – Retele private virtuale</i>
      Un VPN este o retea de comunicatii privata, folosita de obicei în cadrul uneia sau mai multor organizatii, pentru a comunica în mod confidential, prin intermediul unei retele publice. 
      Mesajele din traficul VPN pot fi transmise prin intermediul infrastructurii unei retele publice de date, precum Internet-ul, folosind protocoalele standard, sau prin intermediul unei retele private a furnizorului de servicii Internet. 
      VPN-ul este o solutie eficienta din punctul de vedere al costurilor, pentru ca diferite organizatii sa poata asigura accesul la reteaua interna pentru angajatii si colaboratorii aflati la distanta, si pentru a 
      Termenul de VPN descrie doua modalitati de abordare a problemei retelelor private care au ca suport o retea publica, din punctul de vedere al accesibilitatii: 
      <ol>
        <li>VPN-uri realizate între mai multe retele locale (LAN-to-LAN VPNs, cunoscute si sub denumirea de Site-to-Site VPNs) care conecteaza la un nod central mai multe LAN-uri diferite aflate la mare distanta unele fata de altele dar care fac parte din acelasi intranet, astfel încât sa asigure conectivitatea între ele;</li>
        <li>VPN-uri de acces de la distanta (Remote Access VPNs) care asigura accesul de la distanta la o retea privata, de exemplu pentru utilizatorii de Internet mobil. </li>
      </ol>
      La nivelul de transport, s-au impus mai multe protocoale de securitate: 
      <ol>
        <li>SSL (Secure Socket Layer) asigura autentificarea si integritatea aplicatiilor bazate pe protocolul tCP, dar are ca dezavantaj major lipsa de flexibilitate si dependenta de nivelul-aplicatie;</li>
        <li>TLS (transport Layer Security) s-a dezvoltat ca o alternativa la SSL care rezolva majoritatea inconvenientelor acestuia. </li>
      </ol>
      `,
      questions: [
        {
          question: "question 1 text",
          type: "fill the gap",
          id: "1",
          answers: [{
            answer: "answer 1",
            correct: false
          },
          {
            answer: "answer 2",
            correct: false
          },
          {
            answer: "answer 3",
            correct: false
          },
          {
            answer: "answer 4",
            correct: true
          }]
        }
      ]
    },
    {
      id: "10",
      title: "Concluzii",
      theory: `
        Exista numeroase probleme control al accesului si de securitate a retelei care trebuie luate in considerare in implementarea si mentinerea unui sistem client-server. Desi exista un numar mare de instrumente pentru functiile de securitate, acestea sunt semnificativ mai putine pentru acest tip de sistem.
	      Pentru a evita eventualele brese de securitate trebuie analizata securitatea modurilor de stocare dar si a canalelor de transfer de date, verificarea criptarii datelor si accesibilitatea acestora catre public.
      `,
      questions: [
        {
          question: "question 1 text",
          type: "fill the gap",
          id: "1",
          answers: [{
            answer: "answer 1",
            correct: false
          },
          {
            answer: "answer 2",
            correct: false
          },
          {
            answer: "answer 3",
            correct: false
          },
          {
            answer: "answer 4",
            correct: true
          }]
        }
      ]
    },
    {
      id: "10",
      title: "Referințe",
      theory: `
      <ol>
      <li>Andersson, F. (2009, 9). Designing a Secure Client-Server System.
      Preluat de pe <a href="http://publications.lib.chalmers.se/records/fulltext/116816.pdf">Chalmers Publication Library</a></li>
      <li>Carl, G., & Ron, T. (1995, 4). Network security in a client/server environment. 
      Preluat de pe <a href="https://www.researchgate.net/publication/234816790_Network_security_in_a_clientserver_environment">ResearchGate</a></li>
      <li>Matthieu, B., Rajesh, N., & Steven, M. (2008, 9). Network Security for Client-Server Architecture Using Wiretap Codes. IEEE Transactions on Information Forensics and Security, 3, pg. 404-413. 
      Preluat de pe <a href="https://ieeexplore.ieee.org/document/4598818">IEEE Xplore Digital Library</a></li>
      <li>SecureBlackbox. (fără an). Securing Your Client-Server or Multi-Tier Application. 
      Preluat de pe <a href="https://www.secureblackbox.com/kb/articles/Securing-client-server-app.rst">SecureBlackbox</a></li>
      <li>Security and reliability of client server systems on the internet. (2006). 
      Preluat de pe <a href="https://dl.acm.org/citation.cfm?id=1269441">ACM Digital Library</a></li>
      </ol> 
      `,
      questions: [
        {
          question: "question 1 text",
          type: "fill the gap",
          id: "1",
          answers: [{
            answer: "answer 1",
            correct: false
          },
          {
            answer: "answer 2",
            correct: false
          },
          {
            answer: "answer 3",
            correct: false
          },
          {
            answer: "answer 4",
            correct: true
          }]
        }
      ]
    }
  ]
}

export default text;