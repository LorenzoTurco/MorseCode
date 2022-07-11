import { expect, it } from "@jest/globals";
import { translate } from "./translator";

describe("testing translators", () => {
  it("should display: .-", () => {
    const result = translate("A", "toEnglish");
    expect(result).toBe(".- ");
  });

  it("should display: .- -... -.-", () => {
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
});
