import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Layout({ children }) {
  return (
    <div className="container">
      <div className="col-sm-12">
        <Header />
        {children}
      </div>
    </div>
  );
}