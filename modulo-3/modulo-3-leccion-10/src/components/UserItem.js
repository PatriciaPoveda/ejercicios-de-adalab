import PropTypes from "prop-types";

const UserItem = (props) => {
  const { name, city, image, gender: originalGender } = props.user;

  const gender = originalGender;
  let translateGender = "No binario";
  if (gender === "female") {
    translateGender = "Mujer";
  } else if (gender === "male") {
    translateGender = "Hombre";
  }
  return (
    <article className="users__card">
      <div className="users__card--imgContainer">
        <img
          className="users__card--img"
          src={image}
          alt={`Foto de ${name}`}
          title={`Foto de NAME`}
        />
      </div>
      <h4 className="users__card--title">{name}</h4>
      <p className="users__card--description">
        {city} / {translateGender}
      </p>
    </article>
  );
};

UserItem.propTypes = {
  /* handleFilter: PropTypes.func.isRequired, */
  user: PropTypes.object.isRequired,
};

export default UserItem;
