const BananoCurrency = require('bananocurrency')
// When the parent theard requires it, render the HTML
self.addEventListener("message", async (message) => {
  const { blockHash, workerIndex, workerCount, workThreshold } = message.data;
  const result = await BananoCurrency.computeWork(blockHash, { workThreshold, workerIndex, workerCount });
  self.postMessage(result);
});