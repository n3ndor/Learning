<h1 align="center">Laravel-React Application</h1>

<h2>About the Project</h2>

This project is a Laravel-React application that combines the robustness of PHP Laravel for backend operations with the dynamic capabilities of React for the frontend. The application features user authentication, user management (CRUD operations), and a streamlined, secure login/logout process. It uses a minimalistic SQLite database for efficient data storage.

<div align="center">
  <img src="https://github.com/n3ndor/Learning/blob/main/laravel-react/screenshots/dashboard.png" alt="Dashboard View" width="600"/>
  <p><strong>Dashboard View</strong></p>
  <img src="https://github.com/n3ndor/Learning/blob/main/laravel-react/screenshots/login.png" alt="Login View" width="600"/>
  <p><strong>Login View</strong></p>
  <img src="https://github.com/n3ndor/Learning/blob/main/laravel-react/screenshots/users.png" alt="User Management View" width="600"/>
  <p><strong>User Management View</strong></p>
</div>

<h2>Acknowledgments</h2>

Special thanks to <a href="https://github.com/thecodeholic">TheCodeholic</a> for creating the instructional video that inspired and guided this project.

<h2>Getting Started</h2>

<h2>Prerequisites</h2> 
<ul>
    <li>PHP installed on your system</li>
    <li>Composer (PHP package manager)</li>
    <li>Node.js and npm (Node package manager)</li>
</ul>

<h2>Installation</h2>

<h3>Sparse Checkout for the Laravel-React Project</h3>
<p>To only get the <u>laravel-react</u> project from the Learning repository, follow these steps:</p>

<ul>
  <li><p>Initialize a new repository:</p>
      <pre><code>git init Learning-laravel-react</code></pre></li>
  <li><p>Add the main repository as a remote source:</p>
      <pre><code>git remote add origin https://github.com/n3ndor/Learning.git</code></pre></li>
  <li><p>Enable sparse checkout:</p>
      <pre><code>git config core.sparseCheckout true</code></pre></li>
  <li><p>Specify the laravel-react directory to check out:</p>
      <pre><code>echo "laravel-react/*" >> .git/info/sparse-checkout</code></pre></li>
  <li><p>Fetch the specified directory and checkout:</p>
      <pre><code>git pull origin main</code></pre></li>
</ul>

<h3>Setting Up Laravel Backend</h3>
<p>After checking out the repository:</p>

<ul>
  <li><p>Navigate to the laravel-react directory:</p>
      <pre><code>cd laravel-react</code></pre></li>
  <li><p>Set up the environment:</p>
      <pre><code>cp .env.example .env</code></pre>
      <pre><code>composer install</code></pre>
      <pre><code>php artisan serve</code></pre></li>
</ul>

<h3>Setting Up React Frontend</h3>
<ul>
  <li><p>Open a new terminal and navigate to the React directory within the laravel-react project:</p>
      <pre><code>cd react</code></pre></li>
  <li><p>Install npm packages:</p>
      <pre><code>npm install</code></pre></li>
  <li><p>Start the React development server:</p>
      <pre><code>npm run dev</code></pre></li>
</ul>

<p>After successfully completing these steps, the application will be accessible at <code>localhost:3000</code> in your web browser.</p>