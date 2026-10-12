
import { useEffect, useState } from "react";
import { Button } from "./button";
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./card";

function Products() {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                setLoading(true);
                setError("");

                const response = await fetch(
                    "https://dummyjson.com/products"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }

                const result = await response.json();

                setData(result.products);
            } catch (err) {
                setError(
                    "Could not load products. Please try again."
                );
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);


    useEffect(() => {
        async function fetchProducts() {
            try {
                setLoading(true);
                setError("");

                const response = await fetch(
                    "https://dummyjson.com/products"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }

                const result = await response.json();

                setData(result.products);
            } catch (err) {
                setError(
                    "Could not load products. Please try again."
                );
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    if (loading) {
        return <p className="p-4">Loading products...</p>;
    }

    if (error) {
        return (
            <p className="p-4 text-red-500">
                {error}
            </p>
        );
    }

    return (
        <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((product) => (
                <Card
                    key={product.id}
                    className="relative mx-auto w-full max-w-sm overflow-hidden pt-0"
                >
                    <div className="absolute inset-0 z-10 aspect-video bg-black/20" />

                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="relative z-0 aspect-video w-full object-cover"
                    />

                    <CardHeader>
                        <CardAction>
                            <span className="text-sm font-semibold">
                                ${product.price}
                            </span>
                        </CardAction>

                        <CardTitle>{product.title}</CardTitle>

                        <CardDescription className="line-clamp-3">
                            {product.description}
                        </CardDescription>
                    </CardHeader>

                    <CardFooter>
                        <Button className="w-full">
                            View Product
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
export default Products