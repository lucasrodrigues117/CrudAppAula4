# 📱 MeuCrud — Aplicativo CRUD em React Native

> Aplicativo mobile desenvolvido com React Native e Expo, consumindo uma API local com json-server.

## 🎬 Demonstração

🔗 [Assistir no YouTube](https://www.youtube.com/watch?v=Z9-YNG0jwHQ)

---

## ✅ Funcionalidades

- 📋 Listagem de pessoas cadastradas
- ➕ Cadastro de nova pessoa (nome, sobrenome, email e telefone)
- ✏️ Edição de pessoa existente
- 🗑️ Exclusão de pessoa
- 🔍 Busca por nome em tempo real
- 🔄 Atualização da lista por pull to refresh
- 🧭 Navegação entre telas com React Navigation

---

## 🛠️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [json-server](https://github.com/typicode/json-server)
- [expo-linear-gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- Node.js instalado
- Expo Go instalado no celular
- Celular e computador na mesma rede Wi-Fi

### Passo a passo

**1. Clone o repositório:**
```bash
git clone SEU_REPOSITORIO
cd MeuCrud
```

**2. Instale as dependências:**
```bash
npm install
```

**3. Configure a API no arquivo `src/servers/configApi.js`:**
```javascript
export const API_URL = "http://SEU_IP_LOCAL:3000";
```
> Para descobrir seu IP local, rode `ipconfig` no terminal e procure pelo IPv4.

**4. Em um terminal, inicie o json-server:**
```bash
npx json-server database.json --port 3000
```

**5. Em outro terminal, inicie o Expo:**
```bash
npx expo start --clear
```

**6. Escaneie o QR code com o Expo Go no celular.**

---

## 📁 Estrutura do Projeto

```
MeuCrud/
├── src/
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   └── AddEditScreen.js
│   ├── servers/
│   │   ├── configApi.js
│   │   └── peopleCrud.js
│   ├── components/
│   │   └── GradientBackground.js
│   └── styles/
│       └── styles.js
├── App.js
└── database.json
```
