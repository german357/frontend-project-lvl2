install: npm install

start:
	npx babel-node src/bin/test.js

publish:
	npm publish --dry-run
lint:
	npx eslint .
