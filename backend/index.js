import express from 'express';
const app = express();

app.get('/api/products', (req, res) => {
  const products = [
    {
      id: 1,
      name: 'table wooden',
      price: 200,
      image:
        'https://images.pexels.com/photos/5570224/pexels-photo-5570224.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      name: 'table glass',
      price: 250,
      image:
        'https://images.pexels.com/photos/20751985/pexels-photo-20751985/free-photo-of-orange-juice-and-fruit-on-tray.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      name: 'table plastic',
      price: 200,
      image:
        'https://images.pexels.com/photos/5225292/pexels-photo-5225292.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 4,
      name: 'table metal',
      price: 300,
      image:
        'https://images.pexels.com/photos/5225292/pexels-photo-5225292.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 5,
      name: 'table polyester',
      price: 150,
      image:
        'https://images.pexels.com/photos/18087307/pexels-photo-18087307/free-photo-of-top-view-of-a-colorful-salad-a-bottle-of-wine-and-a-menu-card-on-a-table-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  if (req.query.search) {
    const filterProduct = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    res.send(filterProduct);
    return;
  }
  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is run on port:${port}`);
});
