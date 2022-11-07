FROM node:14.21.0-slim

# usuário do container - root - trás uma série de riscos

# Mínimo privilégio
USER node

WORKDIR "/home/node/app"

CMD ["sh", "-c", "npm install && tail -f /dev/null" ]
