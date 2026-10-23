import { test } from 'node:test';
import assert from 'node:assert/strict';
import { graphLogColumns, graphLogLayout, graphLogSvg } from '../dist/Helper/GraphLog.js';

// d is a merge of c into b; b and c fork from a.
const items = [
  { id: 'd', parents: ['b', 'c'] },
  { id: 'c', parents: ['a'] },
  { id: 'b', parents: ['a'] },
  { id: 'a' },
];

test('a merge opens a lane, the fork closes it', () => {
  const rows = graphLogLayout(items);

  assert.deepEqual(rows.map((row) => row.column), [0, 1, 0, 0]);
  assert.equal(graphLogColumns(rows), 2);
  assert.equal(rows[3].outgoing.length, 0);
  assert.deepEqual(rows[3].incoming.map((edge) => edge.from).sort(), [0, 1]);
});

test('a lane keeps its colour and the drawing takes a custom one', () => {
  const rows = graphLogLayout(items);
  const svg = graphLogSvg(rows[0], 2, (index) => `c${index}`);

  assert.equal(rows[0].color, rows[2].color);
  assert.match(svg, /^<svg [^>]*width="28"/);
  assert.match(svg, /fill:c0/);
});
