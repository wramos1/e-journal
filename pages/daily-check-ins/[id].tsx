import { useRouter } from "next/router";

export default function checkIn() {
    const router = useRouter()
    return (
        <div>
            Check In {router.query.id}
        </div>
    )
}