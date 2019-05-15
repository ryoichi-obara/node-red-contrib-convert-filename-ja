const util = require('convert-filename-ja');

/**
 * exportsするfunctionの定義.
 * @see https://nodered.jp/docs/creating-nodes/node-js
 * @param {object} RED - Node-REDで決められているお作法.
 */
function exportsFunction(RED) {
  /**
   * registerTypeで登録するfunctionの定義.
   * @see https://nodered.jp/docs/creating-nodes/node-js#ノードコンストラクタ
   * @param {object} config
   */
  function nodeFunction(config) {
    const thisNode = this;
    RED.nodes.createNode(thisNode, config);

    // inputイベント(ノードがメッセージを受信)へのリスナー登録.
    this.on('input', async (msg) => {
      if (msg.payload) {
        const payload = util.convert(msg.payload);
        msg.payload = payload;
      }
      thisNode.send(msg);
    });
  }

  RED.nodes.registerType('convert-filename-ja', nodeFunction, {
    // credentials
  });
}

module.exports = exportsFunction;
