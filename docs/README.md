# Content export for Google Sheets

The `site-copy.csv` file aggregates all text and copy that appears in the KJ Run Club site, including:

- Structured content from the `content/` JSON files
- Page-level copy from components under `app/`
- Navigation, footer, and fallback messaging from `components/`
- Metadata strings and public manifest/robots text

## Using in Google Sheets

1. Open Google Sheets and create a new spreadsheet.
2. Go to **File → Import**, select the **Upload** tab, and choose the `site-copy.csv` file.
3. When prompted, choose **Create new sheet** to keep the data separate from other tabs.
4. Each row lists the source file, the logical key/path, and the current text. Collaborators can edit the Text column directly.
5. After edits, export the sheet as CSV to bring updated copy back into the project (overwriting `site-copy.csv`).

The `scripts/export-site-copy.js` script can be re-run whenever code or content updates are made to refresh the CSV.
