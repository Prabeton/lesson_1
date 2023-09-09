import styles from './Product.module.css';

const Product = ( { productName, price, description } ) => {
	return (
		<div className={styles.product}>
			<span>{productName}</span>
			<span>  |  </span>
			<span>{price}</span>
			<span>  |  </span>
			<span>{description}</span>
		</div>
	);
}
export default Product;