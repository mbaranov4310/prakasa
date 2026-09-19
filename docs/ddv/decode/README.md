# Dṛg-dṛśya-viveka dump

## Re-run

```
python3 scripts/ddv-extract-param-iast.py
python3 scripts/ddv-write-text.py
python3 scripts/ddv-crop-verses.py
python3 scripts/check-ddv-text.py docs/ddv/text
```

## Outputs

- `out/param-iast-raw.txt` — Param IAST as extracted (`ē`, Devanagari dandas, verse numbers)
- `out/param-iast.txt` — normalized Prakāśa IAST (`e`, ASCII `\|` `\|\|`, numbers stripped)
- `out/param-verses.json` — same plus PDF page numbers
- `crops/` — gitignored PNGs of both PDFs; regenerate locally for the lock

Param Devanagari is **not** extracted (CID). Nikh text layer is **not** used (OCR junk).
