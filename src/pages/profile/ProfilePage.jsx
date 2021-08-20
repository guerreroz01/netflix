import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebaseConfig";
import Nav from "../../components/nav/Nav";
import "./profilePage.css";

function ProfilePage() {
  const user = useSelector(selectUser);
  return (
    <div className="profilePage">
      <Nav />
      <div className="profilePage__body">
        <h1>Edit Profile</h1>
        <div className="profilePage__info">
          <img
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt=""
          />
          <div className="profilePage__details">
            <h2>{user.email}</h2>
            <div className="profilePage__plans">
              <h3>Plans</h3>
              <button
                className="profilePage__signOut"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
