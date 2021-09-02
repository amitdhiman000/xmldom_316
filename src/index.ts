import { DOMParser } from "@xmldom/xmldom";

export function findNodeValue(xml: string, tag: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, "text/xml");
  const tags = doc.getElementsByTagName(tag);
  if (tags.length > 0) {
    return tags[0].nodeValue;
  }
  return undefined;
}
