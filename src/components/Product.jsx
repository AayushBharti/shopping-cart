const Product = (prop) => {
  const post = prop.post;
  return (
    <div>
      <p>{post.title}</p>
      <p>{post.description}</p>
      <img src={post.image} className="h-28" />
      <p>{`${post.price} $`}</p>
      <button>
        {selected? <p>Remove Item</p> : <p>Add to Cart</p>}
      </button>
    </div>
  );
};

export default Product;
