export interface Observer {
  update(): void;
}

export interface Observable {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

// export class Observable {
//     #subscribers = {};

//     getFreeSubscribeID(signalName) {
//       if (!Object.hasOwn(this.#subscribers, signalName)) return -1;
//       let maxID = -1;
//       Object.keys(this.#subscribers[signalName]).forEach((subscribeID) => {
//         if (subscribeID > maxID) maxID = subscribeID;
//       })
//       return maxID + 1;
//     }

//     connect(signalName, callback, once = false) {
//       if (!Object.hasOwn(this.#subscribers, signalName)) this.#subscribers[signalName] = {};
//       Object.values(this.#subscribers[signalName]).forEach((subscribeData) => {
//         if (subscribeData.callback === callback) return;
//       });
//       const subscribeID = this.getFreeSubscribeID(signalName);
//       this.#subscribers[signalName][subscribeID] = { callback, once };
//     }

//     disconnect(signalName, callback) {
//       if (!Object.hasOwn(this.#subscribers, signalName)) return;
//       for (const [subscribeID, subscribeData] of Object.entries(this.#subscribers[signalName])) {
//         if (subscribeData.callback === callback) {
//           delete this.#subscribers[signalName][subscribeID];
//           return;
//         }
//       };
//     }

//     emit(signalName, ...args) {
//       if (!Object.hasOwn(this.#subscribers, signalName)) return;

//       const onceSubscribeIDs = [];
//       for (const [subscribeID, subscribeData] of Object.entries(this.#subscribers[signalName])) {
//         if (subscribeData.once) {
//           onceSubscribeIDs.push(subscribeID);
//         }
//         subscribeData.callback(...args);
//       };

//       onceSubscribeIDs.forEach((subscribeID) => {
//         delete this.#subscribers[signalName][subscribeID];
//       })
//     }
//   }
