const { applyOperation } = require("fast-json-patch");

const jsonPatch = (req, res) => {
  let { document, operations } = req.body;
  operations.map((operation) => {
    document = applyOperation(document, operation).newDocument;
  });
  res.json({
    success: true,
    document,
  });
};

module.exports = jsonPatch;
