import React, { useState } from 'react'
import MyContext from './myContext'
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { fireDb } from '../../firebase/FirebaseConfig'


function myState(props) {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "rgb(17,24,30)"
    }
    else{
      setMode('ligth');
      document.body.style.backgroundColor = "white"
    }
  }

  const [loading, setLoading] = useState(false);
  
  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )

  });

  // ********************** Add Product Section  **********************
  const addProduct = async () => {
    if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
      return toast.error('Please fill all fields')
    }
    const productRef = collection(fireDb, "products")
    setLoading(true)
    try {
      await addDoc(productRef, products)
      toast.success("Product Add successfully")
      getProductData();
     /*  closeModal() */
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    setProducts("")
  }

  const [product, setProduct] = useState([]);

    // ****** get product
    const getProductData = async () => {
      setLoading(true)
      try {
        const q = query(
          collection(fireDb, "products"),
          orderBy("time"),
          // limit(5)
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
          let productArray = [];
          QuerySnapshot.forEach((doc) => {
            productArray.push({ ...doc.data(), id: doc.id });
          });
          setProduct(productArray)
          setLoading(false);
        });

        return () => data;

      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    useEffect(() => {
      getProductData();
    }, []);
  



  return (
    <MyContext.Provider value={{mode, toggleMode, loading, setLoading, products, setProducts,
      addProduct, product
    
    }}>
        {props.children}
    </MyContext.Provider>
  )
}

export default myState