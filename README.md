
# mobile

## Descrição

Este projeto é um aplicativo móvel desenvolvido com React Native e Expo, que exibe graficamente os repasses da Secretaria de Educação do estado de Sergipe para os municípios. Atualmente, os dados exibidos são mockados e correspondem aos repasses de 2018.

## Estrutura do Projeto

- **Expo**: Utilizado para facilitar o desenvolvimento e a execução do projeto.
- **React Navigation**: Gerenciamento de navegação dentro do aplicativo.
- **Styled Components**: Utilizado para estilização de componentes.
- **Victory Native**: Utilizado para criar os gráficos que exibem os repasses.

## Dependências

- `@expo-google-fonts/inter`: Fonte do Google para melhorar a aparência do texto.
- `@react-navigation/native`, `@react-navigation/native-stack`, `@react-navigation/stack`: Navegação entre telas.
- `expo`: Framework e plataforma para aplicativos universais.
- `expo-font`: Gerenciamento de fontes.
- `expo-status-bar`: Barra de status do Expo.
- `react`: Biblioteca para construir interfaces de usuário.
- `react-native`: Framework para desenvolvimento de aplicativos móveis.
- `react-native-safe-area-context`: Gerenciamento de áreas seguras na tela.
- `react-native-screens`: Utilizado para melhor performance nas telas.
- `react-native-svg`: Suporte para SVGs no React Native.
- `styled-components`: Estilização de componentes.
- `victory-native`: Criação de gráficos.

## Scripts

- `start`: Inicia o projeto com Expo.
- `android`: Inicia o projeto no dispositivo ou emulador Android.
- `ios`: Inicia o projeto no dispositivo ou emulador iOS.
- `web`: Inicia o projeto no navegador.

## Instruções de Uso

### Pré-requisitos

- Node.js
- Expo CLI

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/mobile.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd mobile
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

### Executando o Projeto

- Para iniciar o aplicativo, execute:
  ```bash
  npm start
  ```
- Para iniciar no Android:
  ```bash
  npm run android
  ```
- Para iniciar no iOS:
  ```bash
  npm run ios
  ```
- Para iniciar no navegador:
  ```bash
  npm run web
  ```

## Estrutura de Pastas

```plaintext
/mobile
├── assets
├── components
├── navigation
├── screens
├── services
└── App.js
```

- **assets**: Arquivos estáticos, como imagens e fontes.
- **components**: Componentes reutilizáveis.
- **navigation**: Configuração de navegação.
- **screens**: Telas do aplicativo.
- **services**: Serviços como chamadas de API e lógica de negócios.
- **App.js**: Arquivo principal do aplicativo.

## Contato

Para mais informações, entre em contato através de [seu-email@dominio.com](mailto:seu-email@dominio.com).

---

**Nota**: Este projeto é apenas uma demonstração e os dados utilizados são mockados.
