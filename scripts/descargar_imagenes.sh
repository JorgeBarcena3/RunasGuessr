#!/bin/bash

# Definir un arreglo con las URLs de las imágenes
urls=(
  "https://www.elmagoarcano.com/wp-content/uploads/2017/02/01-Fehu.png"
  "https://www.elmagoarcano.com/wp-content/uploads/2017/02/02-Uruz.png"
  "https://www.elmagoarcano.com/wp-content/uploads/2017/02/03-Thurisaz.png"
  "https://www.elmagoarcano.com/wp-content/uploads/2017/02/04-Ansuz.png"
  "https://www.elmagoarcano.com/wp-content/uploads/2017/02/05-Raido.png"
  "https://www.elmagoarcano.com/wp-content/uploads/2017/02/06-Kano.png"
  "https://www.elmagoarcano.com/wp-content/uploads/2017/02/07-Gebo.png"
  "https://www.elmagoarcano.com/wp-content/uploads/2017/02/08-Wunjo.png"
  "https://www.elmagoarcano.com/wp-content/uploads/2017/02/09-Hagalaz.png"
  "https://www.elmagoarcano.com/wp-content/uploads/2017/02/10-Nauthiz.png"
  "https://www.elmagoarcano.com/wp-content/uploads/2017/02/11-Isa.png"
  "https://www.elmagoarcano.com/wp-content/uploads/2017/02/12-Jera.png"
  "https://www.elmagoarcano.com/wp-content/uploads/2017/02/13-Eihwaz.png"
  "https://www.elmagoarcano.com/wp-content/uploads/2017/02/14-Perth.png"
  "https://www.elmagoarcano.com/wp-content/uploads/2017/02/15-Algiz.png"
  "https://www.elmagoarcano.com/wp-content/uploads/2017/02/16-Sowelu.png"
  "https://www.elmagoarcano.com/wp-content/uploads/2017/02/17-Teiwaz.png"
  "https://www.elmagoarcano.com/wp-content/uploads/2017/02/18-Berkana.png"
  "https://www.elmagoarcano.com/wp-content/uploads/2017/02/19-Ehwaz.png"
  "https://www.elmagoarcano.com/wp-content/uploads/2017/02/20-Mannaz.png"
  "https://www.elmagoarcano.com/wp-content/uploads/2017/02/21-Laguz.png"
  "https://www.elmagoarcano.com/wp-content/uploads/2017/02/22-Inguz.png"
  "https://www.elmagoarcano.com/wp-content/uploads/2017/02/23-Dagaz.png"
  "https://www.elmagoarcano.com/wp-content/uploads/2017/02/24-Othila.png"
  "https://www.elmagoarcano.com/wp-content/uploads/2017/02/25-Odin.png"
)

# Loop a través de las URLs y descargar las imágenes
for url in "${urls[@]}"; do
  filename=$(basename "$url")
  curl -O "$url"
  echo "Descargada: $filename"
done

echo "Todas las imágenes han sido descargadas."

# Fin del script
