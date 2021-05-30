
const productUpdate = async (event) => {
  event.preventDefault();
  let id = "";
  const product_name = document.querySelector('#product_name').value.trim();
  const stock = document.querySelector('#stock').value.trim();
  const price = document.querySelector('#price').value.trim();
  if(document.querySelector('#product_id') && document.querySelector('#product_id').value !== ""){
    id = document.querySelector('#product_id').value.trim();
  }
  if(id === ""){
        alert(product_name +" && " + stock +" && " + price);
        if (product_name && stock && price) {
            const response = await fetch('/products/', {
                method: 'POST',
                body: JSON.stringify({ product_name, stock, price }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
            document.location.replace('/products');
            } else {
            alert('Failed to add product.');
            }
        }
  }else{
    if (id && product_name && stock && price) {
        const response = await fetch('/products/'+id, {
            method: 'PUT',
            body: JSON.stringify({product_name, stock, price }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
        document.location.replace('/products');
        } else {
        alert('Failed to update product.');
        }
    }
  }
};
const productDelete = async (event) => {
    event.preventDefault();
    let id = "";
    if(document.querySelector('#product_id') && document.querySelector('#product_id').value !== ""){
      id = document.querySelector('#product_id').value.trim();
      const prompt1 = confirm("Do you want to delete the selected product record?\nClick OK for Yes");
      if(!prompt1){return false;}
    }     
    if (id) {
        const response = await fetch('/products/'+id, {
            method: 'DELETE',
            body: JSON.stringify({}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
        document.location.replace('/products');
        } else {
        alert('Failed to delete product.');
        }
    }
    
  };
if(document.querySelector('#cust_delete')){
    document.querySelector('#cust_delete').addEventListener('click', productDelete);
}
document
  .querySelector('#product-form')
  .addEventListener('submit', productUpdate);
