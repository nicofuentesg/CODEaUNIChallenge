# Proyecto React Native

Este es un proyecto **React Native** creado con [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Requisitos previos
Antes de continuar, asegúrate de haber configurado correctamente tu entorno siguiendo la guía oficial de [React Native - Configuración del entorno](https://reactnative.dev/docs/environment-setup).

> **Nota:** Se recomienda iniciar en iOS primero, ya que Android requiere una versión específica de Java y configuración adicional.

## Instalación

Clona este repositorio y accede al directorio del proyecto:

```sh
git clone https://github.com/nicofuentesg/CODEaUNIChallenge.git
cd CODEaUNIChallenge
```

Instala las dependencias del proyecto:

```sh
pnpm install
```

## Iniciar Metro Bundler

Metro es el servidor de desarrollo de React Native. Antes de ejecutar la aplicación, asegúrate de que Metro está corriendo:

```sh
pnpm start
```

## Ejecutar la aplicación

### iOS (Recomendado)

Antes de la primera ejecución en iOS, instala las dependencias de CocoaPods. Para ello, ejecuta:

```sh
cd ios && pod install && cd ..
```

Luego, inicia la aplicación en el simulador de iOS con:

```sh
npx react-native run-ios
```

### Android (Opcional, requiere configuración adicional)

Si deseas ejecutar en Android, asegúrate de cumplir con los siguientes requisitos:
- Tener **Java 17** instalado y configurado correctamente.
- Tener el **SDK de Android** configurado.
- Tener un **emulador de Android** activo o un dispositivo físico conectado.

Si cumples con estos requisitos, puedes ejecutar:

```sh
pnpm android
```

## Vista previa de la aplicación

Aquí puedes ver cómo se ve la aplicación en funcionamiento en su modo oscuro:

- Modo Luz

https://github.com/user-attachments/assets/83f01e1d-faee-44eb-9234-c608b004116a


- Modo Oscuro


https://github.com/user-attachments/assets/6f9f4faf-0b0a-4269-a69f-7024db934ef3


