# 🚀 Backend - Cognito Business

Servidor API REST para Cognito Business, un asistente virtual empresarial impulsado por IA.

---

## 📋 Tabla de Contenidos

- [Inicio Rápido](#inicio-rápido)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Comandos Disponibles](#comandos-disponibles)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Endpoints de la API](#endpoints-de-la-api)
- [Variables de Entorno](#variables-de-entorno)
- [Manejo de Errores](#manejo-de-errores)
- [Seguridad](#seguridad)

---

## 🚀 Inicio Rápido

1. Instalar dependencias
npm install

2. Crear archivo .env
(Copiar variables de la sección Variables de Entorno)
3. Ejecutar en modo desarrollo
npm run dev

4. El servidor estará disponible en http://localhost:3001
text

---

## 📦 Instalación

### Requisitos Previos
- Node.js v18+
- npm v9+

### Pasos

Clonar el repositorio
git clone https://github.com/TuUsuario/Cognito-Business.git

Entrar a la carpeta backend
cd Cognito-Business/backend

Instalar dependencias
npm install

Verificar instalación
node -v
npm -v

text

---

## ⚙️ Configuración

### 1. Obtener API Key de OpenAI
1. Ve a [platform.openai.com](https://platform.openai.com)
2. Crea una cuenta (o inicia sesión)
3. Ve a API Keys
4. Click en "Create new secret key"
5. Copia la clave generada

### 2. Crear archivo .env

En la carpeta backend, crea un archivo .env
text

**Contenido del .env:**
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxxxx
PORT=3001
ALLOWED_ORIGINS=http://localhost:3000
NODE_ENV=development

text

### 3. Configurar CORS (Opcional)

Edita `server.js` para permitir múltiples orígenes:
app.use(cors({
origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
credentials: true
}));

text

---

## 🎮 Comandos Disponibles

Modo desarrollo (con auto-reinicio)
npm run dev

Modo producción
npm start

Ver logs
npm run dev -- --verbose

text

---

## 📁 Estructura del Proyecto

backend/
├── src/
│ ├── config/
│ │ └── openai.js # Configuración de OpenAI
│ ├── controllers/
│ │ └── chatController.js # Lógica del chatbot
│ ├── routes/
│ │ └── chatRoutes.js # Definición de rutas
│ └── middleware/
│ └── errorHandler.js # Manejo de errores
│
├── .env # Variables de entorno
├── .gitignore
├── server.js # Punto de entrada
├── package.json
├── package-lock.json
└── README.md # Este archivo

text

---

## 🔌 Endpoints de la API

### 1. Enviar Mensaje
POST /api/chat
Content-Type: application/json

{
"message": "¿Cómo empiezo a invertir en Bitcoin?",
"history": [
{ "role": "user", "content": "Hola" },
{ "role": "assistant", "content": "Hola, ¿en qué puedo ayudarte?" }
]
}

text

**Respuesta Exitosa (200):**
{
"reply": "Para comenzar a invertir en Bitcoin, considera los siguientes pasos...",
"timestamp": "2025-10-30T05:00:00.000Z"
}

text

### 2. Health Check
GET /health

text

**Respuesta (200):**
{
"status": "ok",
"message": "Cognito Business API is running"
}

text

---

## 🔑 Variables de Entorno

| Variable | Requerida | Descripción | Ejemplo |
|---|---|---|---|
| `OPENAI_API_KEY` | ✅ | Clave API de OpenAI | `sk-proj-xxxx...` |
| `PORT` | ❌ | Puerto del servidor | `3001` |
| `ALLOWED_ORIGINS` | ❌ | URLs permitidas (CORS) | `http://localhost:3000` |
| `NODE_ENV` | ❌ | Ambiente | `development` \| `production` |

---

## 🛡️ Manejo de Errores

El servidor maneja los siguientes tipos de errores:

### 400 - Solicitud Inválida
{
"error": "El mensaje no puede estar vacío"
}

text

### 401 - Unauthorized
{
"error": "API Key inválida o expirada"
}

text

### 429 - Rate Limit Excedido
{
"error": "Límite de solicitudes excedido. Intenta de nuevo más tarde."
}

text

### 500 - Error Interno
{
"error": "Error interno del servidor",
"message": "Detalles del error (solo en desarrollo)"
}

text

---

## 🔐 Seguridad

### Buenas Prácticas Implementadas

✅ **Variables de Entorno Protegidas**
- Todas las credenciales en `.env`
- `.env` excluido de git

✅ **CORS Configurado**
- Solo orígenes permitidos pueden acceder
- Método seguro de comunicación

✅ **Validación de Entrada**
- Verificación de mensajes vacíos
- Límite de tokens

✅ **Manejo de Errores**
- No expone detalles internos
- Logs seguros

---

## 📊 Modelos de Datos

### Request - Mensaje
{
message: string; // Mensaje del usuario
history: Message[]; // Historial de conversación
}

text

### Response - Respuesta
{
reply: string; // Respuesta del asistente
timestamp: string; // ISO timestamp
}

text

### Message
{
role: 'user' | 'assistant';
content: string;
}

text

---

## 🚀 Despliegue

### Desplegar en Heroku

1. Crear app en Heroku
heroku create tu-app-nombre

2. Configurar variables de entorno
heroku config:set OPENAI_API_KEY=sk-proj-xxxx...

3. Desplegar
git push heroku main

text

### Desplegar en Vercel

Vercel no soporta Node.js directamente
Usa Heroku, Railway, Render o tu propio servidor
text

---

## 🐛 Debugging

### Habilitar logs detallados
npm run dev -- --verbose

text

### Ver logs en tiempo real
heroku logs --tail

text

---

## 📞 Soporte

- Issues: [GitHub Issues](https://github.com/TuUsuario/Cognito-Business/issues)
- Email: devjhonharvey@gmail.com

---

## 📄 Licencia

MIT - Ver LICENSE para detalles
