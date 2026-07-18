/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};
//pk Dot Notation
console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);

//pk Bracket Notation
console.log("The color value:", backpack["color"]);

var query = "volume";
console.log("The volume value:", backpack[query]);
