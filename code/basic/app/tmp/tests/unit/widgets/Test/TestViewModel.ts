import TestViewModel from "../../../../src/widgets/Test/TestViewModel";

const { beforeEach, suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

suite("widgets/Test/TestViewModel", () => {
  let vm: TestViewModel;

  beforeEach(() => {
    vm = new TestViewModel();
  });

  test("validate that name is correct", () => {
    assert.equal(vm.name, "Slagathor");
  });
});
