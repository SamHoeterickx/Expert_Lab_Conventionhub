# JavaScript Code Conventions

> **Doel:** Consistente, leesbare en onderhoudbare JavaScript-code binnen het project verzekeren.

---

## 🧱 Basisprincipes

- Schrijf **duidelijke, consistente en logische** code.
- Vermijd onnodige complexiteit.
- Code moet leesbaar zijn voor andere ontwikkelaars, niet enkel voor jezelf.

---

## ✍️ Naamgevingsregels

### Variabelen en functies
- Gebruik **camelCase** voor variabelen en functies.
  ```js
  let userAge = 25;
  function getUserName() { ... }
  ```
- Namen moeten beschrijvend zijn, geen afkortingen:
  ```js
  // ❌ Niet doen
  let usrNm;
  // ✅ Wel doen
  let userName;
  ```

### Klassen
- Gebruik **PascalCase** voor klassen en constructor-functies.
  ```js
  class UserProfile { ... }
  ```

### Constanten
- Gebruik **SCREAMING_SNAKE_CASE** voor constante waarden.
  ```js
  const MAX_USERS = 10;
  ```

---

## 📄 Structuur en opmaak

### Indentatie
- Gebruik **2 spaties** per indentatieniveau (geen tabs).

### Puntkomma’s
- Gebruik **puntkomma’s altijd expliciet**.
  ```js
  const user = "Alex";
  console.log(user);
  ```

### Aanhalingstekens
- Gebruik **enkele aanhalingstekens** voor strings.
  ```js
  const greeting = 'Hello world';
  ```

### Spaties en lege lijnen
- Laat een **lege regel** tussen logische blokken van code.
- Voeg **spaties** toe rond operators en na komma’s.
  ```js
  const total = price + tax;
  ```

---

## 🧠 Best Practices

### Gebruik `const` en `let`
- Gebruik `const` standaard.
- Gebruik `let` enkel als de waarde opnieuw wordt toegewezen.
  ```js
  const PI = 3.14;
  let counter = 0;
  ```

### Gebruik strikte gelijkheid
- Gebruik altijd `===` en `!==` in plaats van `==` of `!=`.
  ```js
  if (value === 0) { ... }
  ```

### Vermijd globale variabelen
- Gebruik modules of functies om scope te beperken.

### Gebruik duidelijke functie-namen
- Een functie moet beginnen met een werkwoord:
  ```js
  function calculateTotal() { ... }
  function fetchUserData() { ... }
  ```

---

## 📦 Import en export

- Gebruik ES6 modules.
  ```js
  import { getUser } from './user.js';
  export function createUser() { ... }
  ```

---

## 🔍 Commentaarstijl

### Enkele regel
```js
// Bereken totaalbedrag inclusief BTW
```

### Meerdere regels
```js
/**
 * Verwerkt de bestelling van een gebruiker.
 * @param {Object} order - De ordergegevens.
 * @returns {boolean} True als succesvol verwerkt.
 */
```

---

## 🚫 Vermijd

- `var` — gebruik `let` of `const`
- Magische getallen of strings:
  ```js
  // ❌ Niet doen
  if (status === 3) { ... }

  // ✅ Wel doen
  const STATUS_ACTIVE = 3;
  if (status === STATUS_ACTIVE) { ... }
  ```

---

## ✅ Voorbeeld

```js
// ✅ Correcte stijl
const MAX_USERS = 10;

class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}

function createUsers(names) {
  return names.map((name) => new User(name));
}

const users = createUsers(['Alex', 'Jamie']);
users[0].greet();
```

---

**Laatst bijgewerkt:** November 2025  
**Auteur:** [Naam van team of organisatie]
