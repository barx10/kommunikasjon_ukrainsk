# Norsk-ukrainsk kommunikasjonsverktøy

## Hensikt
Dette programmet er laget for at barn fra Ukraina som ikke snakker norsk, skal kunne kommunisere på en trygg og enkel måte med lærere og medelever. Målet er å senke terskelen for deltakelse og bidra til en inkluderende skolehverdag.

## Funksjoner
- Temabaserte fraser på norsk og ukrainsk
- Favorittmarkering
- Lydavspilling av norsk tekst
- Mulighet for å velge stemme for opplesing
- Enkelt og brukervennlig grensesnitt


## Bruk

**Anbefalt:** Bruk løsningen direkte på nett via GitHub Pages (se under), eller start en enkel lokal webserver for å teste på egen maskin.

### Lokal bruk (for utvikling og testing)
Åpne en terminal i prosjektmappen og kjør:

```
python3 -m http.server 8000
```

Deretter kan du åpne [http://localhost:8000/](http://localhost:8000/) i nettleseren.

**NB:** Å åpne `index.html` direkte i nettleseren (dobbeltklikk) vil ofte ikke fungere som forventet, fordi moderne nettlesere blokkerer lasting av lokale filer (JS, bilder, osv.).

### Stemmevalg og kvalitet
Du kan velge mellom tilgjengelige norske stemmer for opplesing i programmet. Kvaliteten og antallet stemmer avhenger av hvilke stemmer som er installert på din PC eller Mac.

**Tips:** For bedre kvalitet og flere alternativer, kan du laste ned forbedrede norske stemmer via systeminnstillingene på din datamaskin:
- **Mac:** Systeminnstillinger → Tilgjengelighet → Tale → «Legg til stemme» (velg norsk, gjerne «Forbedret kvalitet»)
- **Windows:** Innstillinger → Tid og språk → Tale → «Legg til stemme» (velg norsk og eventuelt «Forbedret»)
Start nettleseren på nytt etter installasjon for å få tilgang til nye stemmer.

## Oversettelse til ukrainsk
Når du legger til nye fraser, kan du bruke Google Translate, DeepL eller lignende oversettelsesverktøy for å oversette fra norsk til ukrainsk. For best kvalitet anbefales det å få en ukrainsktalende til å kontrollere oversettelsen før bruk i klasserommet.

Skriv både norsk og ukrainsk tekst i frasetabellen i `ord/fraser.js`.

## Tilpasning og egne fraser
Du kan enkelt tilpasse programmet ved å legge til eller endre fraser i mappen `ord/`.

Alle fraser og kategorier ligger nå i filen `ord/fraser.js` som en JavaScript-tabell kalt `DATA`. Hver frase har norsk og ukrainsk tekst, emoji, kategori og eventuelt alternative søkeord. For å legge til nye fraser, kopier en eksisterende linje og endre innholdet etter behov.

Eksempel på en frase:
```js
{ no: "Jeg er sulten", uk: "Я голодний", emoji: "🍽️", cat: "Потреби", alt: ["mat", "spise", "hungry"] },
```

Du kan også lage egne kategorier ved å legge til nye kategorinavn i `cat`-feltet og oppdatere filterknappene i HTML-delen.

Hvis du ønsker å bruke piktogrammer, kan du legge til en ny egenskap (f.eks. `piktogram: "sti/til/bilde.png"`) for hver frase og vise bildet i grensesnittet.

## Skjermbilder

![Hovedbilde](main_screenshot.png)

## Piktogrammer
Det er for øyeblikket ikke brukt piktogrammer fra Widgit i denne løsningen. Ved eventuell utvidelse anbefales det å bruke Widgit-piktogrammer for å sikre enhetlig og gjenkjennelig visuell støtte. Husk at Widgit-piktogrammer må brukes i henhold til Widgits lisensvilkår.

## Publisere som nettside (GitHub Pages)

Du kan gjøre denne løsningen tilgjengelig for elever via GitHub Pages:

1. Gå til repoet på github.com.
2. Klikk på "Settings" (Innstillinger).
3. Velg "Pages" i menyen til venstre.
4. Under "Build and deployment", velg "Deploy from a branch".
5. Velg branch (vanligvis `main`) og rotmappe (`/ (root)`).
6. Trykk "Save".

Etter kort tid får du en URL, f.eks. `https://brukernavn.github.io/kommunikasjon_ukrainsk/`, hvor nettsiden er tilgjengelig for alle.

Startfilen må hete `index.html` og ligge i rotmappen. Alt innhold (JS, bilder, ord/fraser) må ligge i repoet.

## Lisens
Dette prosjektet er kun til bruk i skolesammenheng. Piktogrammer fra Widgit må brukes i henhold til deres lisensvilkår.
