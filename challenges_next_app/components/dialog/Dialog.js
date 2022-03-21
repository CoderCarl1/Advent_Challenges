export default function Dialog(props) {
  const [open, setOpen] = useState(false);
  const { dataAttr, setDialogState, dialogState } = props;

  function handleDialogOpen() {
    setDialogState(true);
  }
  function handleDialogClose() {
    setDialogState(false);
  }

  return (
    <div
      role="dialog"
      aria-labelledby="dialogTitle"
      aria-describedby="dialogDesc"
      {...dataAttr}
      className={dialogState ? "dialog_open" : "dialog_closed"}
    >
      <h2 id="dialogTitle">{title}</h2>
      <p id="dialogDesc">
        You can change your details at any time in the user account section.
      </p>
      <button onClick={handleDialogClose}>Close</button>
    </div>
  );
}
