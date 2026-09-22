import assert from 'node:assert/strict';
import { withBasePath, basePath } from '../data/site.ts';
assert.equal(withBasePath('/projects/example/'), basePath + '/projects/example/');
assert.equal(withBasePath('/#contact'), basePath + '/#contact');
assert.equal(withBasePath('#main'), '#main');
assert.equal(withBasePath('https://example.com/image.png'), 'https://example.com/image.png');
assert.equal(withBasePath('//example.com/image.png'), '//example.com/image.png');
if (basePath) assert.equal(withBasePath(basePath + '/projects/example/'),basePath + '/projects/example/');
console.log('Root and subpath link/asset checks passed.');
