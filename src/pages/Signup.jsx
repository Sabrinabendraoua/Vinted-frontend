const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <h2>S'inscrire</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Nom d'utilisateur"
        />
        <input type="email" name="email" id="email" placeholder="Email" />
        <input
          type="text"
          password="password"
          id="password"
          placeholder="Mot de passe"
        />
        <div>
          <input type="checkbox" />
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
        </div>
      </form>
      <button type="submit">S'inscrire</button>
    </>
  );
};

export default Form;
