export function SkipLink() {
  function handleSkipToMain() {
    document.querySelector("main")?.focus();
  }

  return (
    <button className="skip-link " onClick={() => handleSkipToMain()}>
      Skip to Main content
    </button>
  );
}

export default SkipLink;
