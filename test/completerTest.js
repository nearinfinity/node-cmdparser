'use strict';

var CmdParser = require('../parser');

exports.completerTest = {
  "single word command": function (test) {
    var cmdparser = new CmdParser([
      "test"
    ]);
    var results = cmdparser.completer("te");
    test.deepEqual(results, [
      ["test"],
      "te"
    ]);
    test.done();
  },

  "single word command, multiple matches": function (test) {
    var cmdparser = new CmdParser([
      "test1",
      "test2"
    ]);
    var results = cmdparser.completer("te");
    test.deepEqual(results, [
      ["test1", "test2"],
      "te"
    ]);
    test.done();
  },

  "single word command, no match": function (test) {
    var cmdparser = new CmdParser([
      "test"
    ]);
    var results = cmdparser.completer("bad");
    test.equal(results, null);
    test.done();
  },

  "one required parameter": function (test) {
    var cmdparser = new CmdParser([
      "test <param1>"
    ], {
      param1: function (str) {
        return [str + "1", str + "2", str + "3"];
      }
    });
    var results = cmdparser.completer("test val");
    test.deepEqual(results, [
      ["val1", "val2", "val3"],
      "val"
    ]);
    test.done();
  }
};
