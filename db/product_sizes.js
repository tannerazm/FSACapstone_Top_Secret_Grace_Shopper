/*
const client = require('./client');

async function createProduct_Size({ size, product_id }) {
  console.log('Starting to create product_size! db/product_sizes.js');
  try {
    const {
      rows: [product_size],
    } = await client.query(
      `
        INSERT INTO product_sizes (size, product_id)
        VALUES($1, $2)
        RETURNING *;
      `,
      [size, product_id]
    );

    console.log('Project_Size created: ..');
    console.log(product_size);
    console.log('Finished Creating Product_Size! product_sizes.js');
    return product_size;
  } catch (error) {
    console.error('Error Creating Product_Size! product_sizes.js');
    throw error;
  }
}

module.exports = {
  createProduct_Size,
};

*/
