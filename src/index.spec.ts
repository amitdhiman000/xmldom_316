import { expect } from "@esm-bundle/chai";
import { findNodeValue } from "./index";

const xml = `
<Person>
  <name>Amit</name>
  <email>amit@mail.com</email>
</Person>`;

it("test for name", async () => {
  const val = await findNodeValue(xml, "name");
  console.log("test");
  expect(val === "Amit");
});
