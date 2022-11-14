import React from 'react';
import data from './NewData.js';
import Style from './DeliveryAddress.module.css';
export default function Delivery() {
  const content = {
    OkButtonText: 'Ship to this address',
  };

  const todoItems = data.slice(0, 4).map(
    (todo, index) =>
      // Only do this if items have no stable IDs
      data.length <= 4 && (
        <li
          className={Style.addressWrapper}
          style={{
            border: todo.preferredIn
              ? '2px solid #003b71'
              : '1px solid #878f9b',
          }}
          key={index}
        >
          {todo.preferredIn && <span>Default Address</span>}
          <p>
            <span>{todo.careOfFirstName}</span>{' '}
            <span>{todo.careOfLastName}</span>
          </p>
          <p>
            <span>{todo.street1}</span>, <span>{todo.street2}</span>
            <br />
            <span>{todo.city}</span>
            <span> ,{todo.state}</span>
            <span>, {todo.postalCode}</span>
          </p>
          <p>
            <span>Edit</span> <span>&#124;</span> <span>Remove</span>
            <span>&#124;</span> <span>Set as default</span>
          </p>
          {!todo.preferredIn ? (
            <button className={Style.deliveryButton}>
              {content.OkButtonText}
            </button>
          ) : (
            <span
              style={{
                width: '112px',
                height: '20px',
                'font-family': 'Gotham',
                'font-style': 'normal',
                'font-weight': '350',
                'font-size': '13px',
                'line-height': '20px',
              }}
            >
              {/* <Icon
            icon={<Checkmark viewBox="0 0 20 18" height=".5em" />}
            size={20}
            className={content.deliveryAddress} data-analytics-click = "Free shipping Selected method" data-analytics-type = "button" data-analytics-location = "delivery_section"
          /> Selected Method */}
              Selected Method
            </span>
          )}
        </li>
      )
  );
  todoItems.sort();
  return <div>{data && <ul>{todoItems}</ul>}</div>;
}
