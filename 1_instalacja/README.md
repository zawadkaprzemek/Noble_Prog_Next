### Instalacja ###
1. Zainstaluj aplikację korzystając z node.js na twoim komputerze
`npm install` albo `yarn install`
`yarn add --dev typescript @types/react @types/node`

Warto sprawdzić jaką masz wersję node.js na komputerze a także czy masz zainstalowanego TypeScripta globalnie

2. Zainstaluj aplikację z użyciem docker-compose
`docker-compose run next yarn install`
`docker-compose run next yarn add --dev typescript @types/react @types/node`
`docker-compose up -d --build`

Pamiętaj, że używając next.js z docker musisz instlaować paczki npm wewnątrz contenera dockerowego a nie na swojej maszynie.

3. Jeśli zaznajomiłeś się już ze strukturą plików w next.js spróbuj dodać dwie nowe strony `/about` i `/contact` do projektu.
