import express from 'express';
import bodyParser from 'body-parser';
// import MealsRoute from './routes/meal.route';
// import MenuRoute from './routes/menu.route';
// import OrdersRoute from './routes/order.route';
import UsersRoute from './routes/user.route';

export const app = express();


const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Welcome to meal app'));

app.use('/api/v1/signup', UsersRoute);

// app.use('/api/v1/menu', MenuRoute);

// app.use('/api/v1/orders', OrdersRoute);


// app.use((req, res) => {
//   const error = new Error('Not found');
//   res.status(404);
//   res.json({
//     error: {
//       message: error.message,
//     },
//   });
// });

// app.use((error, req, res) => {
//   res.status(error.status || 500);
//   res.json({
//     error: {
//       message: error.message,
//     },
//   });
// });

// export const server = app.listen(PORT, () => (`Server is running at ${PORT}`));
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));

// module.exports.app = app;
// export default app;
