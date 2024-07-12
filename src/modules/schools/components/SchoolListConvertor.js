export default function SchoolListConvertor({ description }) {
    const pointers = description.split('\n')
    return (
        <ul>
            {pointers.map((point, index) => (
                <li key={index}>{point}</li>
            ))}
        </ul>
    )
}