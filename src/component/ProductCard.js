// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { Button, Card } from 'react-bootstrap';


// import { Bounce, ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const ProductCard = ({ product }) => {
//   const [showDetails, setShowDetails] = useState(false);
//   const [isOn, setIsOn] = useState(false);

//   const handleShowDetails = () => {
//     setShowDetails(true);
//     // Add your logic for showing details here
//   };

//   //added
//   // const { ShowProduct, setShowProduct } = useContext(ProductDetail_Context);
//   const handleLinkClick = () => {
//     window.scrollTo(0, 0);
//   };

//   // const ShowDetails = () => {
//   //   handleLinkClick();
//   //   setShowProduct(product);
//   //   console.clear();
//   //   console.log(ShowProduct);
//   // };
//   const handleToggleWishlist = () => {
//     setIsOn(!isOn);
//     // You can add more logic here, like adding/removing from wishlist
//     toast.success(`Product ${isOn ? 'removed from' : 'added to'} wishlist`, {
//       position: "top-right",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });
//   };

//   const handleToast = (item) => {
//     toast.success(`Product ${item.productName} added to cart!`, { // Use product.productName for specific product
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//         transition: Bounce,
//     });
// }

//   return (
//     <div className="w-350 border-2 border-gray-100 shadow-sm rounded-lg">
//     <Link to="/ProductDetail" className="group relative block overflow-hidden">
//       {/* Wishlist Button Component */}
//       <div>
//         <button
//           className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
//           onClick={handleToggleWishlist}
//         >
//           <span className="sr-only">Wishlist</span>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill={isOn ? 'red' : 'none'}
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="h-4 w-4"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Product Image */}
//       <Link to="/ProductDetail">
//         <img
//           src={product.imageUrl}
//           alt=""
//           className="h-200 w-full object-cover transition duration-500 group-hover:scale-105 rounded-lg"
//         />
//       </Link>

//       {/* Product Details */}
//       <Card className="border border-gray-100 bg-white p-6 rounded-lg">
//         {/* New Tag */}
//         <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">New</span>

//         {/* Product Name */}
//         <Link to="/ProductDetail">
//           <h3 className="mt-4 text-lg font-medium text-gray-900">{product.productName}</h3>
//         </Link>

//         {/* Product Price */}
//         <p className="mt-1.5 text-sm text-gray-700">Rs.{product.price}</p>

//         {/* Add to Cart Button */}
//         <Button
//           variant="warning"
//           className="mt-4"
//           onClick={() => {
//             // Handle adding to cart logic here
//             toast.info('Product added to cart', {
//               position: "top-right",
//               autoClose: 3000,
//               hideProgressBar: false,
//               closeOnClick: true,
//               pauseOnHover: true,
//               draggable: true,
//               progress: undefined,
//             });
//           }}
//         >
//           Buy Now
//         </Button>
//       </Card>
//     </Link>

//     {/* Toast Container for Notifications */}
//     <ToastContainer
//       position="top-right"
//       autoClose={5000}
//       hideProgressBar={false}
//       newestOnTop={false}
//       closeOnClick
//       rtl={false}
//       pauseOnFocusLoss
//       draggable
//       pauseOnHover
//       theme="light"
//     />
//   </div>
//   );
// };

// export default ProductCard;

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ProductCard = ({product, handlePayNowClick}) => {
  console.log(product);
  return (
    <>
    <Card>
         <div class="container1">
  <Link  class="image-container"  style={{overflow: 'hidden'}}>
    <img src={`http://localhost/test/uploads/${product.Image}`} alt=""/>

    <div class="product-details">
      <span class="label">New</span>
      <h3>{product.name}</h3>
      <p>{product.Description}</p>
      <p className='price'>Rs. {product.price} /-</p>

      <form>
        <button onClick={() => handlePayNowClick(product)}>Buy Now</button>
      </form>
    </div>
  </Link>
</div>


    </Card>
    </>
  )
}

export default ProductCard

const Card = styled.div `
/* Basic reset and global styles */
margin-top: 30px;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

/* Container styles */
.container1 {
  max-width: 400px; /* Adjust based on your layout */
  margin: 0 auto;
  border: 1px solid #bdbdbf;
  border-radius: 10px;
}

/* Image styles */
.image-container {
  position: relative;
  overflow: hidden;
  border-radius: 10px  10px 0 0;
}

.image-container img {
  width: 400px;
  height: 300px;
  display: block;
  transition: transform 0.5s;
  overflow: hidden;
  border-radius: 10px  10px 0 0;
  filter: brightness(80%);
}

.image-container:hover img {
  transform: scale(1.01); /* Scale image on hover */
  filter: brightness(100%);
}

/* Product details styles */
.product-details {
  border: 1px solid #ddd;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 0 0 10px  10px;
}

.product-details .label {
  display: inline-block;
  background-color: #fb5b21; /* Yellow */
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  margin-bottom: 0.75rem;
  white-space: nowrap;
}

.product-details h3 {
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
  margin-top: 1rem;
}

.product-details .price {
  font-weight: bold;
  font-size: 1.2rem
}


.product-details p {
  font-size: 0.875rem;
  color: #666;
  margin-top: 0.375rem;
}

.product-details button {
  display: block;
  width: 100%;
  background-color: #fb5b21; /* Yellow */
  color: white;
  padding: 1rem;
  font-size: 0.875rem;
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 10px; /* Large border-radius for rounded shape */
  margin-top: 1rem;
  cursor: pointer;
  transition: transform 0.3s;
}

.product-details button:hover {
  transform: scale(1.05); /* Scale button on hover */
}

@media (max-width: 768px) {
   .container1 {
    img{
      max-width: 80vw;
      height:270px;
    }
   }

   .product-details {
     max-width: 80vw;
   }
 }

`;