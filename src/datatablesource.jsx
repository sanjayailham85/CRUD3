export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'user',
    headerName: 'User',
    width: 250,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="user-image" />
          {params.row.username}
        </div>
      );
    },
  },

  {
    field: 'email',
    headerName: 'Email',
    width: 230,
  },
  {
    field: 'age',
    headerName: 'Age',
    width: 80,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 200,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: 'Snow',
    img: 'https://randomuser.me/api/portraits/men/35.jpg',
    age: 24,
    email: 'snow@gmail.com',
    status: 'active',
  },
  {
    id: 2,
    username: 'Clifford',
    img: 'https://randomuser.me/api/portraits/men/94.jpg',
    age: 20,
    email: 'clifford@gmail.com',
    status: 'passive',
  },
  {
    id: 3,
    username: 'Stark',
    img: 'https://randomuser.me/api/portraits/men/20.jpg',
    age: 34,
    email: 'stark@gmail.com',
    status: 'active',
  },
  {
    id: 4,
    username: 'Lannister',
    img: 'https://randomuser.me/api/portraits/women/79.jpg',
    age: 20,
    email: 'lannister@gmail.com',
    status: 'pending',
  },
  {
    id: 5,
    username: 'Roxie',
    img: 'https://randomuser.me/api/portraits/women/35.jpg',
    age: 27,
    email: 'roxie@gmail.com',
    status: 'active',
  },
];
