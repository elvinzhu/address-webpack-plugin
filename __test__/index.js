const plugin = require("../index");

new plugin({ compilerHookName: "donddde" }).apply({
  hooks: {
    done: {
      tap() {},
    },
  },
});

new plugin().apply({
  hooks: {
    done: {
      tap() {},
    },
  },
});

new plugin({ port: "8080", openPage: "/" }).apply({
  hooks: {
    done: {
      tap() {},
    },
  },
});
