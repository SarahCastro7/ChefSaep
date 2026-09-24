import express from 'express';
import session from 'express-session';

const app = express();
app.use(express.json());


app.use(session({
secret: 'saepchef',
resave: false,
saveUninitialized: false
}));

app.use(express.static('public'));

app.listen(3000, () => {
console.log('SAEPChef rodando em http://localhost:3000');
});