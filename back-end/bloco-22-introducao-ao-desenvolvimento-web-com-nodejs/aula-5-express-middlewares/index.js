const express = require('express');
const app = express();
app.use(express.json());
const userRouter = require('./routers/userRouter');
const btcRouter = require('./routers/btcRouter');
const teamsRouter = require('./routers/teamsRouter');

const PORT = 3001;

app.use('/user', userRouter);

app.use('/btc', btcRouter);

app.use('/teams', teamsRouter);


app.listen(PORT, () => {
    console.log(`O PAI TA ON NA ${PORT}`);
});

