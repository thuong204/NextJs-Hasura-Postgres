export default function Register() {
  const [registerUser] = useRegisterUserMutation();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await registerUser({
        variables: {
          email: formState.email,
          password: formState.password,
        },
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}
