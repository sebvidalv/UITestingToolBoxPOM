UITestingToolBoxPom

Descripción

Pruebas de UI con Cypress
Configuración de un entorno de pruebas escalable
Requisitos

Para ejecutar el proyecto y las pruebas, debes tener lo siguiente instalado:

Node.js versión 14 o+
npm
Clona el repositorio

(CMD o terminal Visual Studio Code) git clone https://github.com/sebvidalv/UITestingToolBox.git cd UITestingToolBox

Para ejecutar las pruebas y poder visualizar el reporte ejecutar el siguiente comando en el terminal de Visual Studio Code:

cypress run --headed

(Esto ejecutara en orden los CP y generara un reporte en formato HTML en la ruta ToolBoxUI\cypress\reports\html)

**En caso de tener problemas con el sistema de reporte, instalarlo en Visual Studio Code bajo un terminal con el siguiente comando:**

npm install cypress-mochawesome-reporter

