import useToggle from '../../utils/useToggle';
import Row from '../row/Row';

export default function ToggleMenu({
  openState = false,
  icons,
  children,
  ...rest
}) {
  const { toggle, setToggleStatus } = useToggle(openState);
  const { open, closed } = icons;

  function handleKeyDown(event) {
    event.preventDefault();

    if (event.code === 'Enter') {
      setToggle();
    }
  }
  function handleClick(event) {
    event.preventDefault();
    console.log('clicked', toggle);
    setToggleStatus();
  }

  return (
    <Row data-toggleMenu {...rest}>
      <button
        className="toggle-menu__button"
        onKeyDown={(e) => handleKeyDown(e)}
        onClick={(e) => handleClick(e)}
        aria-controls="toggle-menu__content"
        aria-expanded={toggle ? true : false}
      >
        {toggle ? open : closed}
      </button>
      <Row
        id="toggle-menu__content"
        className={
          toggle ? 'toggle-menu__content open' : 'toggle-menu__content'
        }
      >
        {children}
      </Row>
    </Row>
  );
}
