import React from 'react';
import './widget.scss';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { Link } from 'react-router-dom';

const Widget = ({ type }) => {
  let data;

  const amount = 100;
  const diff = 20;

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        label: 'See all Users',
        link: '/users',
        icon: (
          <PersonOutlineOutlinedIcon
            className="icon"
            style={{ color: 'red', backgroundColor: 'rgba(249, 3, 3, 0.205)' }}
          />
        ),
      };
      break;
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        label: 'View all orders',
        link: '/users',
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              color: 'green',
              backgroundColor: 'rgba(0, 128, 0, 0.246)',
            }}
          />
        ),
      };
      break;
    case 'earning':
      data = {
        title: 'EARNING',
        isMoney: true,
        label: 'View net earnings',
        link: '/users',
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{
              color: 'goldenrod',
              backgroundColor: 'rgba(255, 255, 0, 0.335)',
            }}
          />
        ),
      };
      break;
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        label: 'See details',
        link: '/users',
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              color: 'purple',
              backgroundColor: 'rgba(128, 0, 128, 0.227)',
            }}
          />
        ),
      };
      break;
    default:
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title"> {data.title} </span>
        <span className="counter">
          {' '}
          {data.isMoney && '$'} {amount}{' '}
        </span>
        <Link to={data.link}>
          <span className="link"> {data.label} </span>
        </Link>
      </div>
      <div className="right">
        <div className="percentage positive negative">
          <ArrowDropUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
