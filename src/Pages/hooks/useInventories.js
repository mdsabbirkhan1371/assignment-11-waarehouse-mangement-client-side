import { useEffect, useState } from "react"

const useInventories = () => {

    const [inventoryies, setInventoryies] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/inventory")
            .then(res => res.json())
            .then(data => setInventoryies(data))

    }, [])
    return [inventoryies, setInventoryies]
}
export default useInventories;