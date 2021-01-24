### Data fetching ###

Zapoznaj się ze stroną:
np.kazikkoduje.pl to cms do naszego backendu:
dane do logowania: nis
dane do bazy danych: mysql -u nis -pnis -h 134.209.244.72 baza `wordpress`
api znajduje się pod adresem: np.kazikkoduje.pl/wp-json/wp/v2

Przećwiczmy różne warianty pobierania danych

1. Stwórz route  `/podcasts`. W pliku `/data/podcasts.json` znajdziesz listę podcastów. Twoim celem jest stworzenie listy podcastów w zadanym route. Użyj strategii SSG. Treść pliku `/data/podcasts.json` łatwo pobieżesz przy pomocy standardowego modułu node'a `fs`. Pamiętaj o asynchronicznym kodzie.

2. Stwórz route  `/podcasts/reportaz`. W pliku `/data/podcast.json` znajdziesz listę tracków. Twoim celem jest stworzenie listy tracków w zadanym route. Użyj strategii SSR. Treść pliku `/data/podcast.json` łatwo pobieżesz przy pomocy standardowego modułu node'a `fs`. Pamiętaj o asynchronicznym kodzie. Możesz pokusić się o wczytanie plików audio.

3. Stwórz route  `/posts`. Tym razem obierzemy strategię SSG wraz z rewalidacją. Dane pobierz bezpośrednio z publicznej bazy danych mysql - tabela `wp_posts`. Naszym celem jest wyrenderowanie listy 10 ostatnich postów.
Użyjemy do tego standardowej biblioteki https://www.npmjs.com/package/mysql

4. Stwórz route `/ramowka`. Odpytaj endpoint `http://apipr.polskieradio.pl/api/schedule/?Program=1` aby pobrać aktualny program radiowej Jedynki. Na stronie pokaż listę dzisiejszych programów. Skorzystaj ze strategii SSR.

5. Stwórz route `/index.js`. Odpytaj endpoint np.kazikkoduje.pl/wp-json/wp/v2/pages. Tym razem pobierz dane przy pomocy CSR - użyj do tego hooka `useSWR`. Stwórz listę 10 ostatnich stron.

5. Stwórz route `/[id].js`. Odpytaj endpoint np.kazikkoduje.pl/wp-json/wp/v2/pages/\<id\>. Tym razem pobierz dane przy pomocy SSR. W tym wypadku sytuacja jest o tyle trudniejsza, że musimy pobierać dane z dynamicznego routingu. Przypomnij sobie o parametrze `context` funkcji `getServerSideProps`.

6. Stwórz route `/posts/[id].js`. Odpytaj endpoint np.kazikkoduje.pl/wp-json/wp/v2/posts/\<id\>. Tym razem pobierz dane przy pomocy SSG. W tym wypadku sytuacja jest o tyle trudniejsza, że musimy pobierać dane z dynamicznego routingu. Przypomnij sobie o parametrze `context` funkcji `getStaticProps` oraz o funkcji `getStaticPaths`.


