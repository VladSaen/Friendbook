export const ExtraButtons = ({
  numberOfUsers,
  setNumberOfUsers,
  setLoadNewUsers,
}) => {
  return (
    <div className="extra-buttons">
      <label className="label" htmlFor="numder-of-users">
        How many users to download
        <input
          type="number"
          id="numder-of-users"
          value={numberOfUsers}
          onChange={(event) => {
            if (event.target.value >= 500) {
              setNumberOfUsers(500);
            } else if (event.target.value > 0) {
              setNumberOfUsers(event.target.value);
            }
          }}
        />
      </label>

      <button className="button" onClick={() => setLoadNewUsers(true)}>
        Load new users
      </button>
    </div>
  );
};
