export default function SchoolListConvertor({ description }) {
    const pointers = description.split('\n')
    return (
        <ul>
            {pointers.map((point) => (
                <li>{point}</li>
            ))}
        </ul>
    )
}