
export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Welcome <u>Admin</u> to Your Laravel-React Application</h2>
      <p className="welcome-message">
        This robust application combines the power of <strong>PHP Laravel</strong> on the backend with <strong>React</strong> on the frontend. Here's what you can do:
      </p>
      <ul className="dashboard-features">
        <li><strong>User Management:</strong> Create, Read, Update, and Delete user accounts.</li>
        <li><strong>Security:</strong> Secure login/logout functionality, ensuring data safety.</li>
        <li><strong>Data Storage:</strong> Efficient use of a minimalistic SQLite database.</li>
      </ul>
      <p className="additional-info">
        Your actions are backed by a secure, token-based authentication system, providing a seamless and secure user experience.
      </p>
      {/* Rest of your dashboard content */}
    </div>
  )
}