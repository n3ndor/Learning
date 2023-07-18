// This file represents a dynamic user ID page.
// The UserIdPage component receives props as a parameter and renders a heading with the user ID.
// The user ID is obtained through the getServerSideProps function,
// which retrieves the uid parameter from the context and returns it as props.

function UserIdPage(props) {
  return <h2>Props ID: {props.id}</h2>;
}

export default UserIdPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const userId = params.uid;

  return {
    props: {
      id: "userid-" + userId,
    },
  };
}
