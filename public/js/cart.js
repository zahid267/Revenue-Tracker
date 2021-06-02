
  const AddToCart = async(event,prodid)=>{
    event.preventDefault();
    if (prodid) {
        const response = await fetch('/cart/'+prodid, {
            method: 'GET',
           // body: JSON.stringify({}),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log("here : " + response.cartCnt);
        if (response.ok) {
            alert(prodid+" added to cart");
        } else {
            alert('Failed to add product to cart.');
        }
    }}