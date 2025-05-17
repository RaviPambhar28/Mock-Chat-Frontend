export function getMessagesByGroup(groupId) {
  return new Promise(async (resolve, reject) => {
    const db = await openChatDB();
    const tx = db.transaction("messages", "readonly");
    const store = tx.objectStore("messages");
    const index = store.index("groupId");

    const messages = [];
    const request = index.openCursor(IDBKeyRange.only(groupId));
    request.onsuccess = function (event) {
      const cursor = event.target.result;
      if (cursor) {
        messages.push(cursor.value);
        cursor.continue();
      } else {
        db.close();
        resolve(messages);
      }
    };
    request.onerror = function (event) {
      db.close();
      reject(event.target.error);
    };
  });
}

export async function saveMessage(groupId, sender, content) {
  const db = await openChatDB();
  const tx = db.transaction("messages", "readwrite");
  const store = tx.objectStore("messages");

  const message = {
    groupId,
    sender,
    content,
    timestamp: Date.now(),
  };

  store.add(message);
  await tx.complete;
  db.close();
}

export function openChatDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("ChatDB", 1);

    request.onupgradeneeded = function (event) {
      const db = event.target.result;
      const store = db.createObjectStore("messages", { keyPath: "id", autoIncrement: true });
      store.createIndex("groupId", "groupId", { unique: false });
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
