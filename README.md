# WebdriverIO CucumberJS, Typescript e Selenium

## Introdução
Projeto criado com o intuito de facilitar a automação de testes dos projetos baseados em Web e Mobile, bem como, demonstrar as melhores práticas e ferramentas para o desenvolvimento e execução dos testes.

#### Funcionalidades:
-   Allure Reporter
-   Typescript PageObjects
-   Typescirpt Cucumber step decorators
-   Chai For assertions
-   Selenium Standalone with chrome and firefox capabilties in headless mode
-   Vscode launch configuration to debug tests

## Para começar:

#### Pré-requisito

1. NodeJS instalado globalmente no sistema operacional. Instale sempre a versão estável.

2. Git instalado;

3. Navegador Chrome instalado;

4. JAVA SDK;

5. Editor de texto (Opcional) instalado => Sublime/VSCode/Atom/Sublime

**Editor padrão:** *VSCode (Visual Studio Code). Instalar os plugins [Cucumber (Gherkin)] by Alexandre Krechik e [vscode-icons] by Roberto Huertas.*

6. Para SO MacOs, instale [Xcode](https://developer.apple.com/xcode/) ou na loja App Store

**ATENÇÃO - Xcode:** *É necessário ACEITAR os termos do CONTRATO após a instalação*

**Aceitar os termos do Xcode (by Salla para MacOS):**
```
sudo rm -rf /Library/Developer/CommandLineTools
xcode-select --install
sudo xcodebuild -license accept
```
**Siga os passos de configuração do link [nodejs/node-gyp](https://github.com/nodejs/node-gyp/blob/HEAD/macOS_Catalina.md)**

7. Instalar o [Allure Framework](https://docs.qameta.io/allure/) para que possa ser gerado o relatório com os resultados dos testes em HTML, após a execução dos teste. Execute o comando abaixo para Mac. Demais SO, acesse o modo de instalação no site.

**Atenção** é necessário instalar o [Homebrew](https://brew.sh/index_pt-br)

```
brew install allure
```

## Usage
    
    npm install

    npm run test:debug
    
    npm run allure-report

### Dependencies

Java must be installed to run allure reports
