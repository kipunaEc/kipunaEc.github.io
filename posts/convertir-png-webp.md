# Convertir PNG a WebP con Python

*Optimiza tus imágenes para la web*

---

## 📦 Instalación

Primero instala la librería necesaria:

```bash
pip install Pillow
```

## 🐍 El código básico

```python
from PIL import Image

# Abrir imagen PNG
imagen = Image.open("mi-foto.png")

# Guardar como WebP (calidad 85%)
imagen.save("mi-foto.webp", "webp", quality=85)

print("✅ Convertido a WebP!")
```

## 📂 Convertir múltiples archivos

```python
import os
from PIL import Image

def convertir_todos():
    for archivo in os.listdir("."):
        if archivo.lower().endswith(".png"):
            img = Image.open(archivo)
            nombre = archivo.replace(".png", ".webp")
            img.save(nombre, "webp", quality=85)
            
            original = os.path.getsize(archivo) / 1024
            nuevo = os.path.getsize(nombre) / 1024
            ahorro = (1 - nuevo / original) * 100
            
            print(f"📁 {archivo}: {original:.1f}KB → {nuevo:.1f}KB (ahorro {ahorro:.0f}%)")

convertir_todos()
```

## 📊 Resultados reales

| Formato | Tamaño |
|---------|--------|
| PNG original | 450 KB |
| WebP (85%) | 120 KB |
| **Ahorro** | **73%** |

## 🎯 Conclusión

Con solo **3 líneas de Python** puedes reducir drásticamente el peso de tus imágenes. ¡Tu sitio web cargará mucho más rápido! 🚀
