// This file represents a user profile page.
// The UserProfilePage component receives props as a parameter and renders a heading with the username.
// The username is hardcoded as "Max" and passed as props.

function UserProfilePage(props) {
  return <h2>User Name: {props.username}</h2>;
}

export default UserProfilePage;

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  return {
    props: {
      username: "Max",
    },
  };
}
