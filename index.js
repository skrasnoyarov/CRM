const {app} = require('./app');
const port = process.env.PORT || 5000;
// process.env.PORT - получает порт, иначе 5000

app.listen(port, () => console.log(`Start! ${port}`));
