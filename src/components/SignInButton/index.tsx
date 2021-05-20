import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/client";

import styles from "./styles.module.scss";

export function SignInButton() {
  const [ session ] = useSession();

  function handleSignIn() {
    signIn("github");
  }

  function handleLogout(){
    signOut();
  }

  return session ? (
    <button className={styles.signInButton} onClick={handleLogout}>
      <FaGithub color="#04d401" />
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button className={styles.signInButton} onClick={handleSignIn}>
      <FaGithub color="#eba417" /> Sign in with GitHub
    </button>
  );
}
