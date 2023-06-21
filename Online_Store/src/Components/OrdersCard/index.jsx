import { XMarkIcon } from "@heroicons/react/24/solid"

const OrdersCard = (props) => {
    const { totalPrice, totalProducts } = props
    return (
        <div className="flex justify-between items-center pb-6 border border-black">
            <p>
                <span>01.02.23</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    )
}

export default OrdersCard