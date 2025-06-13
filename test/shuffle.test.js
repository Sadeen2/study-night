import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";

describe("shuffle", () => {
  it("should return a new array with the same elements but in different order", () => {
    const original = [1, 2, 3, 4, 5];
    const result = shuffle([...original]);

    expect(result).to.have.members(original); 
    expect(result.join()).to.not.equal(original.join());
  });
});
