install:
	npm install

gendiff:
	node bin/gendiff.js

lint:
	npx eslint .

test:
	npm test
