document.addEventListener('DOMContentLoaded', (event) => {
            // Funzione per inizializzare il database IndexedDB
            function initDatabase() {
                return new Promise((resolve, reject) => {
                    let request = indexedDB.open('UserDatabase', 1);

                    request.onupgradeneeded = (event) => {
                        let db = event.target.result;
                        if (!db.objectStoreNames.contains('users')) {
                            let objectStore = db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
                            objectStore.createIndex('nome', 'nome', { unique: false });
                            objectStore.createIndex('cognome', 'cognome', { unique: false });
                        }
                    };

                    request.onsuccess = (event) => {
                        resolve(event.target.result);
                    };

                    request.onerror = (event) => {
                        reject(event.target.error);
                    };
                });
            }

            // Funzione per verificare se l'utente esiste già
            function userExists(db, nome, cognome) {
                return new Promise((resolve, reject) => {
                    let transaction = db.transaction(['users'], 'readonly');
                    let store = transaction.objectStore('users');
                    let index = store.index('nome');
                    let request = index.openCursor();

                    request.onsuccess = (event) => {
                        let cursor = event.target.result;
                        if (cursor) {
                            if (cursor.value.nome === nome && cursor.value.cognome === cognome) {
                                resolve(true);
                            } else {
                                cursor.continue();
                            }
                        } else {
                            resolve(false);
                        }
                    };

                    request.onerror = (event) => {
                        reject(event.target.error);
                    };
                });
            }

            // Funzione per salvare l'utente nel database
            function saveUser(db, nome, cognome) {
                return new Promise((resolve, reject) => {
                    let transaction = db.transaction(['users'], 'readwrite');
                    let store = transaction.objectStore('users');
                    let user = { nome: nome, cognome: cognome, punteggio: '' };
                    let request = store.add(user);

                    request.onsuccess = (event) => {
                        resolve(event.target.result);
                    };

                    request.onerror = (event) => {
                        reject(event.target.error);
                    };
                });
            }

            // Evento click per il pulsante Salva
            document.getElementById('saveButton').addEventListener('click', async (event) => {
                event.preventDefault();
                let nome = document.getElementById('nome').value;
                let cognome = document.getElementById('cognome').value;

                let db = await initDatabase();
                let exists = await userExists(db, nome, cognome);

                if (!exists) {
                    await saveUser(db, nome, cognome);
                    alert('Utente salvato con successo.');
                    document.getElementById('nome').value = '';
                    document.getElementById('cognome').value = '';
                    window.location.href = 'https://potasovvi.github.io/Trivial-Pursuit-HP/index2.html';
                } else {
                    alert('Utente già presente.');
                }
            });
        });
