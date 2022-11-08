# Micro serviço

## Efetuar Testes com Jest
-  npm install jest @types/jest -D
### Compilador swc (speed web compiler)
- npm install @swc/core @swc/jest -D
### Criando arquivo `jest.config.ts`
- npx jest --init
### Modificando arquivo `jest.config.ts`
```typescript
	rootDir: "src"
	testRegex: ".*\\..*spec\\.ts$"
	transform: {
		"^.+\\.ts?$" : ["@swc/jest"]
	}
```


