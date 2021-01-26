### Routing ###

1. W pliku `utils/sample-data.ts` znajduje się tablica z danymi reprezentującymi kilka postaci. Stworzmy rozbudowany routing dla aplikacji, który pozwoli nam ich pogrupować:

Stwórz route dla:
- wszystkich postaci `/postacie`
- ludzi i nie ludzi `/postacie/human` `/postacie/non-human`
- reprezentantów różnych profesji np `/postacie/profession/kosmita` itd /postacie/professions/[profession].js
- pojedynczych postaci `/postacie/id` itd /postac/[id].js

Następnie spróbuj z hooka useRouter wyciągnać dane na temat zapytania i na ich podstawie wyszukać w pliku `utils/sample-data.ts` postacie na które wskazuje routing.

Podpowiedz:
``` javascript
const route = useRouter(); //dane z route

const postacie  = require ('../utils/sample-data')

postacie.filter(x => x.human === true) // przykładowe filtrowanie danych

```

