const axios = require('axios');
(async () => {
 for (let i = 1; i <= 100; i++) {
 try {
 const res = await axios.get('http://localhost:3000/aluno');
 console.log(`[${i}] Status:`, res.status);
 } catch (err) {
 console.log(`[${i}] Erro:`, err.message);
 }
 }
})();
