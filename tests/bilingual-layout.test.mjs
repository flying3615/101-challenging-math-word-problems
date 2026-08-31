import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const page = await readFile(new URL('../index.html', import.meta.url), 'utf8');
assert.match(page, /\.masthead\{[^}]*min-height:148px/, 'Desktop headers must reserve a compact, consistent space in both languages.');
assert.doesNotMatch(page, /collection-note|All six original books are stored together/, 'The resource-folder notice must not appear in the header.');
assert.match(page, /\.language-switch\{[^}]*white-space:nowrap/, 'Language names must remain horizontal rather than wrapping vertically.');
assert.match(page, /@media\(max-width:740px\)[\s\S]*?\.masthead\{[^}]*min-height:0/, 'Mobile headers may return to their natural height.');
console.log('PASS: homepage localization preserves the desktop layout.');
