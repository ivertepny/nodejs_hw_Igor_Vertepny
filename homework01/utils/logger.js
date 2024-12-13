
module.exports = function (prefix) {
    return {
      log: function (message) {
        console.log(`${prefix}: ${message}`);
      },
      warn: function (message) {
        console.error(`${prefix}: ${message}`);
      },
    };
  };
  