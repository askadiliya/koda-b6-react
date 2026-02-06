import { useEffect, useState } from "react";

export default function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const url ="https://raw.githubusercontent.com/askadiliya/koda-b6-html/refs/heads/main/data/data.json";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        const data = await res.json();

        setProducts(data);
      } catch (error) {
        console.log("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading };
}
