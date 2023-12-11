import cart from"../CartWidget/img/cart.png";



function CartWidget({ itemCount }){
    return (
    <div>
        <img src={cart} alt="cart-widget" />
        {itemCount}
    </div>
    );
}
export default  CartWidget;