
export async function findNodeValue(xml: string, tag: string) {
    // problem when adding comment inside the import call.
    // if we remove the comment, it start working without any issue. 
    const { DOMParser } = await import(/* webpackChunkName: "xmldom-xmldom" */ "@xmldom/xmldom");
    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, "text/xml");
    const tags = doc.getElementsByTagName(tag);
    if (tags.length > 0) {
      return tags[0].nodeValue;
    }
    return undefined;
  }