import { useRouter } from "next/router";

export default function list() {
    const router = useRouter()
    return (
        <p>Check In {router.query.id}</p>
    )
}