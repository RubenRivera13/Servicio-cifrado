# CRIPTOGRAFIA.md

## AES-256-GCM

AES-256-GCM es un algoritmo de cifrado simétrico autenticado.

Se utiliza para garantizar:

- Confidencialidad
- Integridad
- Autenticidad

Características:

- Usa una clave de 256 bits
- Usa IV aleatorio por operación
- Genera auth tag para detectar manipulación

Fue elegido porque GCM es moderno, eficiente y seguro.

---

## SHA-256

SHA-256 es una función hash criptográfiaca

Se utiliza para:

- Verificar integridad de datos

Características:

- Determinístico
- Irreversible
- Produce salida fijada de 256 bits

No debe usarse para almacenar contraseñas.

---

## bcrypt

bcrypt es un algoritmo especializada para almacenar contraseñas.

Características:

- Usa salt automáticamente
- Es lento intencionalmente
- Resistente a ataques de fuerza bruta

Fue elegido porque es más seguro para contraseñas que SHA-256.

---

## HMAC-SHA256

HMAC usa SHA-256 junto con una clave secreta.

Se utiliza para:

- Verificar integridad
- Verificar autenticidad

Características:

- Solo quien conoce la clave puede generar el HMAC correcto
- Protege contra manipulación de mensajes

La verificación usa comparación en tiempo constante para evitar ataques de temporización.