function handleRedirection(link) {
    window.open({link}, '_blank');
    // window.location.href = {link};
}

function ProductCard({productImg, productName, productDescription, productPrice, productAmount, prodLink}) {
    return (
        <div className="prodCard">
            <img src={productImg} alt="Immagine prodotto" />
            <div className="prodInfo">
                <h3>{productName}</h3>
                <p>{productDescription}</p>
                <div className="prodBuy">
                    <div className="prodBuyInfo">
                        <h4>{productPrice}</h4>
                        <p>{productAmount}</p>
                    </div>
                    <button onClick={handleRedirection({prodLink})}>Acquista</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard