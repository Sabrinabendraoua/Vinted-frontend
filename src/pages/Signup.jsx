import { useEffect, useState, Link } from "react";
import axios from "axios";

const Form = () => {
  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <section>
      <div>
        <p>coucou</p>
      </div>
    </section>
  );
};

export default Form;
