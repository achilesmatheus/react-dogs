import React from "react";
import styles from "./UserPhotoPost.module.css";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import Error from "../Helper/Error";
import useForm from "../../Custom Hooks/useForm";
import useFetch from "../../Custom Hooks/useFetch";
import { PHOTO_POST } from "../../api";
import { useNavigate } from "react-router-dom";
import Head from "../Helper/Head";

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    // data && navigate("/conta"); Good Alternative

    if (data) navigate("/conta");
  }, [data, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);

    request(url, options);
  };

  const handleImgChange = ({ target }) => {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  };

  const buttonStateLoading = <Button disabled>Enviando...</Button>;
  const buttonStateNormal = <Button>Enviar</Button>;

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste sua foto" />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? buttonStateLoading : buttonStateNormal}
        <Error error={error} />
      </form>
      <div
        className={styles.preview}
        style={{ backgroundImage: `url('${img.preview}')` }}
      ></div>
    </section>
  );
};

export default UserPhotoPost;
