// import { netflixLogo } from "../assets";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Logo } from "../assets";
import { Menu, Transition } from "@headlessui/react";
import { CiUser } from "react-icons/ci";
import { TiArrowSortedUp } from "react-icons/ti";
import { addUser, removeUser } from "../utils/userSlice";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const name = useSelector(store => store.user.displayName);
  const userProfile = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email } = user;
        // console.log(user);
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate("/browse");

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {userProfile ? (
        <div className="flex absolute z-10  box-border">
          <div className=" w-screen box-border pl-5 py-2 h-[5rem] bg-gradient-to-b from-[#0B0B0B] flex items-center justify-between -ml-[1.2rem] ">
            <img src={Logo} alt="logo" className="w-[10rem] ml-14 mt-5  " />

            <Menu as={"div"}>
              <div className="">
                <Menu.Button>
                  <img
                    src="https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
                    alt=""
                    className="w-9 rounded box-border mr-20 mt-5"
                  />
                </Menu.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-150 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Menu.Items>
                    <TiArrowSortedUp
                      className="text-black  absolute right-[5rem] top-12 mt-[0.65rem] "
                      size={"1.8rem"}
                    />
                    <div className="w-40 h-auto pt-4  pb-2 px-2 mt-[1.8rem] bg-black absolute right-[3rem] top-12 opacity-80">
                      <ul className="text-white">
                        <li className="flex items-center gap-2 hover:underline decoration-1 cursor-pointer">
                          <CiUser />
                          {/* {name != null ? { name } : "name"} */}
                          {userProfile.displayName}
                        </li>
                        <li
                          className="text-center border-t-[0.5px] border-gray-500 mt-4  tracking-wide hover:underline decoration-1 cursor-pointer"
                          onClick={handleSignOut}
                        >
                          Sign out
                        </li>
                      </ul>
                    </div>
                  </Menu.Items>
                </Transition>
              </div>
            </Menu>
          </div>
        </div>
      ) : (
        <img
          className="absolute z-40 w-48 ml-24 mt-2 cursor-pointer "
          src={Logo}
          alt="netflix-Logo"
        />
      )}
    </div>
  );
};

export default Header;
