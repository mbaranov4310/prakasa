# Rudra PDF decode

Literal Unicode of both VedaVMS PDFs. Svaras kept. No Stage 1 transforms.

## Re-run

```
python3 scripts/rudra-decode/extract.py
python3 scripts/rudra-decode/catalog.py
python3 scripts/rudra-decode/apply.py
```

## Extractors

pymupdf `rawdict` is the span source. pypdf visitor must match BRH compact strings;
overlapping Malayalam U+2013 ticks and a one-matra Nirmala fight on the last page
are logged in `extract_agreement.json`.

The catalog is a per-codepoint piece table in `scripts/rudra-decode/baraha_map.py`,
checked against isolated glyphs and against known lines (ॐ नमः, नमस्ते रुद्र…).
`apply.py` then composes pieces (्ा → inherent a, ि stored before its consonant, repha).
Auto image-match only named punctuation; it did not name the letters.

## Catalog

- keys in map.json: 174
- named: 174
- unknown keys: 0

## Output

- `namakam`: 40015 chars → `docs/rudra/decode/out/namakam.txt` (unknown in text compose: 0; jsonl `?`: 0)
- `camakam`: 53304 chars → `docs/rudra/decode/out/camakam.txt` (unknown in text compose: 0; jsonl `?`: 0)

## Unmapped Baraha keys (fail closed as `?`)

None.

## Invertibility

Original codepoints stay on every JSONL row. Unicode is a derived column.
Several Baraha cps collapse to the same piece (two ि glyphs, dummy û/ü, etc.).
Those collisions are listed in `apply_stats.json`; they are not guesses.

Eye-copy in `docs/rudra/archive-eye-copy/` is not a source.

