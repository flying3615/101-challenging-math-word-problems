import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const page = await readFile(new URL('../index.html', import.meta.url), 'utf8');
assert.match(page, /\.masthead\{[^}]*min-height:248px/, 'Desktop headers must reserve the same vertical space in both languages.');
assert.match(page, /\.collection-note\{[^}]*min-height:62px/, 'The localized resource notice must not change the header height.');
assert.match(page, /\.language-switch\{[^}]*white-space:nowrap/, 'Language names must remain horizontal rather than wrapping vertically.');
assert.match(page, /@media\(max-width:740px\)[\s\S]*?\.masthead\{[^}]*min-height:0/, 'Mobile headers may return to their natural height.');
console.log('PASS: homepage localization preserves the desktop layout.');
