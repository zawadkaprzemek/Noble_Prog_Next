### API Endpoint ###

1. Stwórz route `/kontakt` a w nim wyrenderuj formularz kontaktowy składający się z pól:
- name
- lastname
- email
- message
- phone

A następnie wyślij go metodą POST na adres: `/api/kontakt`

2. Zwaliduj formularz przy pomocy React.js.
3. Stwórz endpoint `/pages/api/kontakt.js`. Pobierz i zwaliduj dane z formularza. Zadbaj o to żeby walidacja była bardziej restrykcyjna niż w wypadku walidacji frontnedowej. Zapisz dane z formularza do pliku `/data/users.js` i zwróc w response informację o tym czy dane zostały zapisane.
4. Po otrzymaniu odpowiedzi z Api komponent react'owy powinien wyrenderować informację o tym czy udało się wysłać wiadomość czy nie.


