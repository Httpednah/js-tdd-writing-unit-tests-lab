// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for a palindrome word (e.g. 'racecar')", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for a non-palindrome word (e.g. 'car')", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("handles uppercase and lowercase input correctly", () => {
    expect(isPalindrome("Mom")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error if input contains non-alphabetic characters", () => {
    expect(() => isPalindrome("ra$ecar")).toThrow(
      "Input must contain only letters"
    );
  });

  it("throws an error if input is not a string", () => {
    expect(() => isPalindrome(123)).toThrow("Input must be a string");
  });
});
