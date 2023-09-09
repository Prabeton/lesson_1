import styles from './ProductList.module.css';
import Product from './Product';

const products = [
	{ productName: "chleb żytni", price: "6.49 PLN", description: "bez polepszaczy" },
	{ productName: "bagietka", price: "2.99 PLN", description: "z masłem i czosnkiem" },
	{ productName: "rogal ozorkowski", price: "2.55 PLN", description: "mocno zakręcony" },
	{ productName: "bułka poznańska", price: "1.99 PLN", description: "piekarnia Bydgoszcz" },
];

const ProductList = () => {
	const listItem = products.map(product =>
		<li><Product productName={product.productName} price={product.price} description={product.description}/></li>
	);
	
	return (
		<div className={styles.productList}>
			<ul>{listItem}</ul>
		</div>
	);
};
export default ProductList;

