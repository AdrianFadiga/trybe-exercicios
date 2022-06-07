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

app.use((error, req, res, next) => {
    if (error.status) return res.status(error.status).json({message: error.message});
    return res.status(500).json({message: error.message});
});

app.listen(PORT, () => {
    console.log(`O PAI TA ON NA ${PORT}`);
});

