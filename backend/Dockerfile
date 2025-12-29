# On utilise Python 3.11 (Standard, stable et très rapide)
FROM python:3.11-slim

WORKDIR /app

# Copie des requirements
COPY requirements.txt .

# Installation des dépendances (Rapide car les binaires existent déjà)
RUN pip install --no-cache-dir -r requirements.txt

# Copie du code source
COPY . .

# Lancement du serveur
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]