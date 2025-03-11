import { getServerAuthSession } from "@/auth"; // Import từ auth-next
import SignIn from "@/components/sign-in";

export default async function Home() {
  const session = await getServerAuthSession(); // Lấy thông tin người dùng

  return (
    <>
      <div>Login</div>
      {session ? (
        <div>
          <h1>Chào, {session.user?.name}!</h1>
          <p>Email: {session.user?.email}</p>
          {session.user?.image && (
            <img src={session.user.image} alt="Avatar" width={50} height={50} />
          )}
        </div>
      ) : (
        <SignIn />
      )}
    </>
  );
}
