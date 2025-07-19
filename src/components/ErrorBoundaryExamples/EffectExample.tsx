import { useEffect } from "react"

export const EffectExample = () => {
    useEffect(() => {
        throw new Error("This is a simulated error in useEffect");
    }, []);
    return <div>   </div>
}
