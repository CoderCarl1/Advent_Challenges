import React, { useContext, useEffect, useState } from 'react';
import TodoContext from './todo_context';
import ToggleMenu from '../toggleMenu/ToggleMenu';
import Row from '../row/Row';
import {
  MdModeEdit,
  MdEditOff,
  MdOutlineCheck,
  MdDeleteForever,
  MdOutlineClose,
} from 'react-icons/md';
import { IoEllipsisVerticalSharp } from 'react-icons/io5';
// import './todo.scss';
/** TODOS contain:
 *  label: string
 *  Status: true/ false
 *  id
 */

export default function Todo({
  label = 'missing label',
  id = 0,
  status = false,
  updateTodo,
}) {
  const [editing, setEditing] = useState(false);
  const [labelText, setLabelText] = useState(label);
  const [miniMenuOpen, setMiniMenuOpen] = useState(false);

  function handleMiniMenu(event) {
    event.preventDefault();
    setMiniMenuOpen((Prev) => !Prev);
    if (event.code === 'Enter') {
      setUlFocused(true);
      changeFocus();
    }
  }

  function handleDone(event) {
    event.preventDefault();
  }
  function handleDelete(event) {
    event.preventDefault();
  }
  function handleUpdate(event) {
    console.log('====================================');
    console.log('clicked');
    console.log('====================================');

    // updateTodo(id);
    // setStatus((prev) => !prev);
  }
  function handleEdit(event) {
    event.preventDefault();
    setEditing((prev) => !prev);
  }

  return (
    <Row className="todo">
      <Row className="todo__label__wrapper">
        {editing ? (
          <>
            <label
              className="todo__label todo__editing"
              htmlFor={`${id}-editing`}
            ></label>
            <input
              name={`${id}-editing`}
              onChange={(e) => setLabelText(e.target.value)}
              value={labelText}
            ></input>
          </>
        ) : (
          <p className="todo__label" htmlFor={`${id}-done`}>
            {labelText}
          </p>
        )}
      </Row>
      <Row className="todo__button__wrapper">
        <div className="todo__button"></div>

        <ToggleMenu
          openState={false}
          icons={{
            closed: <IoEllipsisVerticalSharp />,
            open: <MdOutlineClose />,
          }}
        >
          <button
            onKeyDown={(e) => handleEdit(e)}
            onClick={(e) => handleEdit(e)}
            className="icon-wrapper"
          >
            <span>{editing ? 'ok?' : 'Edit'}</span>
            {editing ? (
              <MdEditOff size={'1.5em'} className="icon-edit" />
            ) : (
              <MdModeEdit size={'1.5em'} className="icon-edit" />
            )}
          </button>
          <button
            onKeyDown={(e) => handleDone(e)}
            onClick={(e) => handleDone(e)}
            className="icon-wrapper"
          >
            <span>Done</span>
            <MdOutlineCheck size={'1.5em'} className="icon-done" />
          </button>
          <button
            onKeyDown={(e) => handleDelete(e)}
            onClick={(e) => handleDelete(e)}
            className="icon-wrapper"
          >
            <span>Delete</span>
            <MdDeleteForever size={'1.5em'} className="icon-delete" />
          </button>
        </ToggleMenu>
        {/* <button
          className="mini-menu__toggle"
          onKeyDown={(e) => handleMiniMenu(e)}
          onClick={(e) => handleMiniMenu(e)}
        >
          {miniMenuOpen ? <MdOutlineClose /> : <IoEllipsisVerticalSharp />}
        </button> */}
        {/* <div className="todo__button"> */}
        {/* <button onClick={handleUpdate}> */}
        {/* </button> */}
        {/* MdModeEdit, MdEditOff */}
        {/* </div> */}
      </Row>
    </Row>
  );
}
