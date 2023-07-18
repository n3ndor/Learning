import { useRouter } from "next/router";

function SelectedClientProjectpage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h2>Project for a Specific Project for a Selectede Client</h2>
    </div>
  );
}

export default SelectedClientProjectpage;
