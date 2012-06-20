
# cmdparser

Command parser with support for completers.

# Install

```bash
$ npm install cmdparser
```

# Example

```javascript
var cmdparser = new CmdParser([
  "del <key> [key ...]",
  "dump <key>",
  "exists <key>"
], {
  key: function (partial) {
    return ["1111", "1112", "1113"];
  }
});
var results = cmdparser.completer("dump 111");
// results = [ ["1111", "1112", "1113"], "111" ]
```
