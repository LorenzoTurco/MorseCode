import { expect, it } from "@jest/globals";
import { translate } from "./translator";

describe("testing translator", () => {
  it("should display: .- ", () => {
    const result = translate("A", "toEnglish");
    expect(result).toBe(".- ");
  });

  it("should display: -... ", () => {
    const result = `${translate("B", "toEnglish")}`;

    expect(result).toBe("-... ");
  });

  it("should display: .- -... -.-", () => {
    const result = `${translate("A", "toEnglish")}${translate(
      "B",
      "toEnglish"
    )}${translate("C", "toEnglish")}`;

    expect(result).toBe(".- -... -.-. ");
  });

  it("should display: # ", () => {
    const result = `${translate("°", "toEnglish")}`;

    expect(result).toBe(" # ");
  });

  it("should display: # ", () => {
    const result = `${translate(null, "toEnglish")}`;

    expect(result).toBe(" # ");
  });
  it("should display:  ", () => {
    const result = `${translate("A", "abc")}`;

    expect(result).toBe("");
  });
});
