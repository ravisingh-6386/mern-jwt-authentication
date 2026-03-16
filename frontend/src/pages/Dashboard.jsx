import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString('en-IN', {
        year: 'numeric', month: 'long', day: 'numeric',
      })
    : 'N/A';

  return (
    <div className="dashboard">
      {/* Hero Banner */}
      <div className="dashboard-hero">
        <div className="hero-avatar">{user?.name?.[0]?.toUpperCase()}</div>
        <div>
          <h1>Welcome back, <span>{user?.name}</span>! 👋</h1>
          <p>You are securely authenticated via JWT.</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="dashboard-grid">
        <div className="dash-card">
          <div className="dash-card-icon">👤</div>
          <h3>Profile</h3>
          <p className="dash-value">{user?.name}</p>
          <small>{user?.email}</small>
        </div>
        <div className="dash-card">
          <div className="dash-card-icon">📅</div>
          <h3>Member Since</h3>
          <p className="dash-value">{memberSince}</p>
          <small>Registration date</small>
        </div>
        <div className="dash-card">
          <div className="dash-card-icon">✅</div>
          <h3>Status</h3>
          <p className="dash-value status-active">Active</p>
          <small>Account in good standing</small>
        </div>
      </div>

      {/* JWT Info Box */}
      <div className="info-box">
        <h3>🔐 How JWT Authentication Works</h3>
        <ol>
          <li>You submitted your credentials (email + password).</li>
          <li>The server verified them and signed a <strong>JWT token</strong> with a secret key.</li>
          <li>The token is stored in <code>localStorage</code> on your browser.</li>
          <li>Every API request sends the token via the <code>Authorization: Bearer &lt;token&gt;</code> header.</li>
          <li>The server verifies the token on each request — no session storage needed!</li>
          <li>This page is a <strong>protected route</strong>: unauthenticated users are redirected to <code>/login</code>.</li>
        </ol>
      </div>
    </div>
  );
};

export default Dashboard;
