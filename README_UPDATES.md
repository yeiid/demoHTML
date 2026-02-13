# GymTrack Demo Website - Guía de Actualización

## 📁 Estructura del Proyecto

```
demoHTML/
├── public/
│   └── downloads/
│       └── gymtrack.exe          ← Ejecutable de la aplicación
├── src/
│   ├── components/
│   │   ├── Hero.astro            ← Hero con botón de descarga
│   │   ├── DownloadSection.astro ← Sección de descarga de prueba
│   │   └── ...                   ← Otros componentes de demo
│   └── pages/
│       └── index.astro           ← Página principal
└── README_UPDATES.md             ← Este archivo
```

## 🔄 Cómo Actualizar el Ejecutable

Cuando tengas una nueva versión de `gymtrack.exe`, sigue estos pasos:

### Opción 1: Reemplazo Manual (Recomendado)
1. Navega a la carpeta: `public/downloads/`
2. Elimina el archivo `gymtrack.exe` existente
3. Copia el nuevo `gymtrack.exe` a esta carpeta
4. ¡Listo! El enlace de descarga se actualizará automáticamente

### Opción 2: Usando PowerShell
```powershell
# Desde la raíz del proyecto
Move-Item -Path "ruta/al/nuevo/gymtrack.exe" -Destination "public/downloads/gymtrack.exe" -Force
```

### Opción 3: Usando la Terminal
```bash
# Desde la raíz del proyecto
mv ruta/al/nuevo/gymtrack.exe public/downloads/gymtrack.exe
```

## 📝 Actualizar el Tamaño del Archivo

Si el tamaño del archivo cambia significativamente, actualiza la etiqueta en:

**Archivo:** `src/components/DownloadSection.astro`
**Línea:** ~72

```astro
Descargar Ahora (58 MB)  ← Cambia este número
```

## 🚀 Compilar y Desplegar

### Desarrollo Local
```bash
npm run dev
```
Visita: http://localhost:4321

### Compilar para Producción
```bash
npm run build
```
Los archivos compilados estarán en la carpeta `dist/`

## 📋 Características de la Página de Descarga

✅ **Sección de descarga dedicada** con:
- Botón de descarga prominente
- Lista de características principales
- Requisitos del sistema
- Información de prueba de 7 días
- Tarjetas informativas (instalación, seguridad, soporte)

✅ **Hero mejorado** con:
- Botón de descarga animado
- Enlace directo a la sección de descarga
- Nota sobre la prueba gratuita

✅ **CTA final actualizado** con:
- Botón de descarga
- Opción de contacto de ventas

## 🎨 Personalización

### Cambiar el Color del Botón de Descarga
Edita `src/styles/global.css` y modifica las variables CSS:
```css
:root {
    --primary: #6366f1;  /* Color principal */
    --accent: #8b5cf6;   /* Color de acento */
}
```

### Modificar el Texto de la Prueba
Edita `src/components/DownloadSection.astro` para cambiar:
- Duración de la prueba (línea ~5)
- Características incluidas (líneas ~30-60)
- Requisitos del sistema (líneas ~100-130)

## 🔗 Enlaces Importantes

- **Descarga directa:** `/downloads/gymtrack.exe`
- **Sección de descarga:** `#download`
- **Demo interactiva:** `#features`

## ⚠️ Notas Importantes

1. **No cambies el nombre del archivo** - El enlace de descarga espera `gymtrack.exe`
2. **Mantén la carpeta `public/downloads/`** - Es la ubicación estándar
3. **Verifica el tamaño** - Archivos muy grandes (>100MB) pueden tardar en descargarse
4. **Prueba localmente** - Siempre prueba la descarga antes de desplegar

## 📞 Soporte

Si tienes problemas con la actualización, verifica:
- ✅ El archivo está en `public/downloads/gymtrack.exe`
- ✅ El archivo tiene permisos de lectura
- ✅ El servidor web puede acceder a la carpeta `public/`
- ✅ Has reconstruido el proyecto con `npm run build`

---

**Última actualización:** Febrero 2026
**Versión de la demo:** 1.0.0
