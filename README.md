# @wexample/js-graph-log

Version: 1.0.3

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

## Table of Contents

- [Laying out a history](#laying-out-a-history)
- [Drawing it](#drawing-it)
- [Integration in the Suite](#integration-in-the-suite)
- [Versioning & Compatibility Policy](#versioning--compatibility-policy)
- [License](#license)
- [About us](#about-us)
- [Migration Notes](#migration-notes)

## Integration in the Suite

This package is part of the Wexample Suite — a collection of high-quality, modular tools designed to work seamlessly together across multiple languages and environments.

### Related Packages

The suite includes packages for configuration management, file handling, prompts, and more. Each package can be used independently or as part of the integrated suite.

Visit the [Wexample Suite documentation](https://docs.wexample.com) for the complete package ecosystem.

## Versioning & Compatibility Policy

Wexample packages follow **Semantic Versioning** (SemVer):

- **MAJOR**: Breaking changes
- **MINOR**: New features, backward compatible
- **PATCH**: Bug fixes, backward compatible

We maintain backward compatibility within major versions and provide clear migration guides for breaking changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Free to use in both personal and commercial projects.

## About us

[Wexample](https://wexample.com) stands as a cornerstone of the digital ecosystem — a collective of seasoned engineers, researchers, and creators driven by a relentless pursuit of technological excellence. More than a media platform, it has grown into a vibrant community where innovation meets craftsmanship, and where every line of code reflects a commitment to clarity, durability, and shared intelligence.

This packages suite embodies this spirit. Trusted by professionals and enthusiasts alike, it delivers a consistent, high-quality foundation for modern development — open, elegant, and battle-tested. Its reputation is built on years of collaboration, refinement, and rigorous attention to detail, making it a natural choice for those who demand both robustness and beauty in their tools.

Wexample cultivates a culture of mastery. Each package, each contribution carries the mark of a community that values precision, ethics, and innovation — a community proud to shape the future of digital craftsmanship.

## Migration Notes

When upgrading between major versions, refer to the migration guides in the documentation.

Breaking changes are clearly documented with upgrade paths and examples.
