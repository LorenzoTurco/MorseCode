import { expect, it } from "@jest/globals";
import { translate } from "../scripts/translator";

describe("testing translator", () => {
  it("should display: .- ", () => {
    const result = translate("a", "toEnglish");
    expect(result).toBe(".- ");
  });
  it("should display: .--...-.-. ", () => {
    const result = translate("abc", "toEnglish");
    expect(result).toBe(".- -... -.-. ");
  });

  it("should display: ..--.. ", () => {
    const result = translate("?", "toEnglish");
    expect(result).toBe("..--.. ");
  });

  it("should display: ###", () => {
    const result = translate("***", "toEnglish");
    expect(result).toBe("###");
  });

  it("should display: a", () => {
    const result = translate(".-", "toMorse");
    expect(result).toBe("a");
  });
  it("should display: abc", () => {
    const result = translate(".- -... -.-. ", "toMorse");
    expect(result).toBe("abc");
  });

  it("should display: 6", () => {
    const result = translate("-.... ", "toMorse");
    expect(result).toBe("6");
  });

  it("should not display anything ", () => {
    const result = translate("***", "toMorse");
    expect(result).toBe("");
  });

  it("should not display anything ", () => {
    const result = translate("abc", "AAA");
    expect(result).toBe("");
  });
});
