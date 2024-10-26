import { openDB } from 'idb';

// Initialize the IndexedDB database
const initDB = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('content')) {
        console.log('Database already exists');
        return;
      }
      db.createObjectStore('content', { keyPath: 'id', autoIncrement: true });
      console.log('Database created');
    },
  });

// PUT function to save content
export const putContent = async (content) => {
  const db = await initDB();
  const tx = db.transaction('content', 'readwrite');
  const store = tx.objectStore('content');
  await store.put({ id: 1, value: content });
  console.log('Content saved');
};

// GET function to retrieve content
export const getContent = async () => {
  const db = await initDB();
  const tx = db.transaction('content', 'readonly');
  const store = tx.objectStore('content');
  const request = await store.get(1);
  return request?.value || '';
};
