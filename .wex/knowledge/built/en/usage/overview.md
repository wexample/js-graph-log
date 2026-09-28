## Laying out a history

`graphLogLayout(items)` takes items read newest first, each with its `id` and its `parents`
(first parent first), and returns one row per item: the column its node stands in, the colour
index of its lane, and the line segments reaching and leaving it. Lanes are never reordered and
keep their colour from start to end, as `git log --graph` draws them.

```ts
import { graphLogColumns, graphLogLayout, graphLogSvg } from '@wexample/js-graph-log/Helper/GraphLog';

const rows = graphLogLayout([
  { id: 'd', parents: ['b', 'c'] },
  { id: 'c', parents: ['a'] },
  { id: 'b', parents: ['a'] },
  { id: 'a' },
]);
```

## Drawing it

`graphLogSvg(row, columns, laneColor)` returns the SVG markup of one row,
`GRAPH_LOG_COLUMN` pixels per lane and `GRAPH_LOG_ROW` high, so the rows stacked one under the
other join their lines. Pass `graphLogColumns(rows)` as `columns` so every row is as wide as
the widest and the text beside the graph lines up. `laneColor` maps a colour index to any CSS
colour; the default spreads hues.
