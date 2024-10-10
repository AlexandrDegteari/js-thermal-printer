const Interface = require("./interface");
// const Net = require("net");
import Socket from "@vendus/sockets-for-cordova";
// import Socket from "capacitor-socket-connection-plugin";

class Network extends Interface {
  constructor(host, port, options) {
    super();
    options = options || {};
    this.timeout = options.timeout || 3000;
    this.host = host;
    this.port = port || 9100;
  }


  async isPrinterConnected() {
    return new Promise((resolve, reject) => {
      var socket = new Socket();
      socket.open(this.host, this.port, opened, error)

      function opened() {
        resolve(true)
        socket.close()
      }
      function error(err) {
        reject(err)
        socket.close()
      }
    })
  }

  async execute(buffer) {
    console.log('EXECUTE')
    return new Promise((resolve, reject) => {
      var socket = new Socket();
      socket.open(this.host, this.port, opened, error)

      function opened() {
        socket.write(buffer, writeSuccess,error)
      }
      function writeSuccess() {
        resolve(true)
        socket.close()
      }
      function error(err) {
        reject(err)
        socket.close()
      }
    })
  }
}


module.exports = Network;
