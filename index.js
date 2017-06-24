const app = require('./server/index');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App listenting on port ${PORT}`);
});
