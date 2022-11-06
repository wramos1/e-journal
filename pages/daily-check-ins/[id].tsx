import { useRouter } from "next/router";

export default function checkIn() {
    const router = useRouter()
    return (
        <p>Check In {router.query.id}</p>
    )
}