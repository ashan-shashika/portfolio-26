export type TimelineType = "education" | "career" | "project" | "current";

export interface TimelineDetailGroup {
  label: string;
  items: string[];
}

export interface TimelineEntry {
  /** Unique and stable, e.g. "2027-new-role" */
  id: string;
  year: string;
  type: TimelineType;
  title: string;
  organization: string;
  description: string;
  /** Shown as tags on the card */
  technologies?: string[];
  /** Short accent badge, e.g. a career transition */
  highlight?: string;
  /** Small live badge, e.g. "Currently" */
  status?: string;
  /** Shown inside the expandable "View details" area */
  achievements?: string[];
  /** Extra tag groups inside the expandable area, e.g. "Relevant areas" */
  details?: TimelineDetailGroup[];
  /** Internal path, #anchor or full URL. Leave out or set to null to hide the CTA */
  link?: string | null;
  /** CTA text, defaults to "View project" */
  linkLabel?: string;
}
