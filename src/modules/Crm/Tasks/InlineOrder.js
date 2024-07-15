function InlineOrder(props){
    return(
        <div className="orderRow">
            سفارش: {props.order.rxOrderNo}
        </div>
    )
}
export default InlineOrder