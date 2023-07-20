export default function Dynamic({ params }: { params: { abc: string } }) {
  return (
    <div>
      <h2>Dynamic {params.abc}</h2>
    </div>
  )
}