import { NOTE_ISSUE_URL } from "../lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <a href={NOTE_ISSUE_URL} target="_blank" rel="noreferrer">
        Send a note
      </a>
    </footer>
  );
}
