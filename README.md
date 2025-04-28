# Coffee Shop Angular Application

Aceasta este o aplicație web pentru un coffee shop, dezvoltată folosind Angular.

## Funcționalități

- Afișare meniu de cafele
- Căutare cafele după nume
- Selectare cafea pentru comandă
- Design responsive și modern
- Rutare lazy-loading
- Manipulare date prin servicii

## Tehnologii folosite

- Angular
- TypeScript
- SCSS
- Angular Signals

## Structura proiectului

```
src/
  ├── app/
  │   ├── components/
  │   │   ├── header/
  │   │   ├── coffee-list/
  │   │   ├── coffee-card/
  │   │   └── search/
  │   └── services/
  │       └── coffee.service.ts
  └── assets/
      └── images/
```

## Instalare și rulare

1. Clonează repository-ul
2. Instalează dependențele: `npm install`
3. Rulează aplicația: `ng serve`
4. Deschide browserul la `http://localhost:4200`

## Cerințe îndeplinite

- [x] Minim 3 componente standalone
- [x] Rutare lazy-loading
- [x] Manipularea datelor prin serviciu
- [x] Search după nume de cafea
- [x] Folosirea decoratorilor @Input() și @Output()
- [x] Folosirea signals
- [x] Folosirea @for pentru afișarea cardurilor
- [x] Afișarea cafelei selectate în header
