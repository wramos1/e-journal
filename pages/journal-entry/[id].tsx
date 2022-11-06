import { useRouter } from "next/router";

export default function JournalEntry() {
    const router = useRouter()
    return (
        <p>Check In {router.query.id}</p>
    )
}